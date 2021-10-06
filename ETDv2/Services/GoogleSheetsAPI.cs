using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using ETDv2.ViewModels;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Sheets.v4;
using Google.Apis.Sheets.v4.Data;
using Microsoft.AspNetCore.Mvc;

namespace ETDv2.Services
{
    public class GoogleSheets
    {
        static readonly string[] Scopes = {SheetsService.Scope.Spreadsheets};
        static readonly string ApplicationName = "ETDApp";
        static readonly string SpreadsheetId = "11oZULyz9s8tL6IBM-5DF5W9Duw3xKcoVjm76ojH_K6Q";
        private static readonly string sheet = "Logs";
        private static SheetsService service;
        
        // private IEnumerable<DataEventRecordVm> result;
        static void XlsInitialization()
        {
            GoogleCredential credential;
            using (var stream = new FileStream("client_secrets.json", FileMode.Open, FileAccess.Read))
            {
                credential = GoogleCredential.FromStream(stream)
                    .CreateScoped(Scopes);
            }

            service = new SheetsService(new Google.Apis.Services.BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = ApplicationName,
            });
        }

        public async Task<IEnumerable<DataEventRecordVm>> PopulateXls(BusinessProvider businessProvider)
        {
            XlsInitialization();
            
            var range = $"{sheet}!B:X";
            var request = service.Spreadsheets.Values.Get(SpreadsheetId, range);

            var response = request.Execute();
            var values = response.Values;
            
            if (values != null && values.Count > 0)
            {
                foreach (var row in values)
                {
                    var result = new DataEventRecordVm
                    {
                        Timestamp = row[1].ToString(),
                        Description = row[3].ToString(),
                        Name = row[2].ToString(),
                        // SourceInfoId = Convert.ToInt64(row[3]),
                        // DataEventRecordId = Convert.ToString(row[20]),
                        Agent = row[0].ToString(),
                        Link = row[4].ToString(),
                        SourceType = row[5].ToString(),
                        GoogleProduct = row[6].ToString(),
                        TTP = row[12].ToString(),
                        Topics = row[14].ToString(),
                        Uat = row[15].ToString(),
                        TRA = row[16].ToString(),
                        ReadyToLaunch = row[17].ToString(),
                        Comments = row[18].ToString(),
                        Uuid = row[20].ToString(),
                        TimestampEnd = row[1].ToString(), // HAVE TO FIX IT HERE: 21 IS OUT OF RANGE EVEN INCREASING THE RANGE OF COLUMNS
                        SourceInfo = new SourceInfoVm
                        {
                            Description = row[3].ToString(),
                            Name = row[2].ToString(),
                            // SourceInfoId = der.SourceInfo.SourceInfoId,
                            Timestamp = row[1].ToString()
                        }
                    };
                    
                    await businessProvider.CreateDataEventRecord(result);
                }
            }
            
            return null;
        }

        public void ReadXlsEntries()
        {
            var range = $"{sheet}!A:X";
            var request = service.Spreadsheets.Values.Get(SpreadsheetId, range);

            var response = request.Execute();
            var values = response.Values;
            if (values != null && values.Count > 0)
            {
                foreach (var row in values)
                {
                    Console.Write("{0} {1} | {2} {3}", row[1], row[3], row[4], row[5]);
                }
            }
        }

        public void CreateXlsEntry(DataEventRecordVm result)
        {
            XlsInitialization();
            var range = $"{sheet}!B:F";
            var valueRange = new ValueRange();

            var objectList = new List<object>() { null, result.Agent, result.Timestamp, result.Name, result.Description, result.Link, result.SourceType, result.GoogleProduct, null, null, null, null, null, result.TTP, null, result.Topics, result.Uat, result.TRA, result.ReadyToLaunch, result.Comments, null, result.Uuid, result.TimestampEnd }; // have to add every column item as they'll compose the object to be inserted
            valueRange.Values = new List<IList<object>> {objectList};

            var appendRequest = service.Spreadsheets.Values.Append(valueRange, SpreadsheetId, range);
            appendRequest.ValueInputOption =
                SpreadsheetsResource.ValuesResource.AppendRequest.ValueInputOptionEnum.USERENTERED;
            var appendResponse = appendRequest.Execute();
        }

        public void UpdateXlsEntry()
        {
            var range = ""; //have to input the row to modify from the interface!!!!
            var valueRange = new ValueRange();

            var objectList = new List<object>() {"elements to modify"}; // here we also need to insert the cell to modify (in the RANGE param) with the new value
            valueRange.Values = new List<IList<object>> {objectList};

            var updateRequest = service.Spreadsheets.Values.Update(valueRange, SpreadsheetId, range);
            updateRequest.ValueInputOption = SpreadsheetsResource.ValuesResource.UpdateRequest.ValueInputOptionEnum.USERENTERED;
            var updateResponse = updateRequest.Execute();
        }
    }
}