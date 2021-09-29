using System;
using System.Collections.Generic;
using System.IO;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Sheets.v4;
using Google.Apis.Sheets.v4.Data;

namespace ETDv2.Services
{
    public class GoogleSheets
    {
        static readonly string[] Scopes = {SheetsService.Scope.Spreadsheets};
        static readonly string ApplicationName = "ETDApp";
        static readonly string SpreadsheetId = "11oZULyz9s8tL6IBM-5DF5W9Duw3xKcoVjm76ojH_K6Q";
        private static readonly string sheet = "Logs";
        private static SheetsService service;

        static void InitSheets()
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

        static void ReadEntries()
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

        static void CreateEntry()
        {
            var range = $"{sheet}!A:F";
            var valueRange = new ValueRange();

            var objectList = new List<object>(); // have to add every column item as they'll compose the object to be inserted
            valueRange.Values = new List<IList<object>> {objectList};

            var appendRequest = service.Spreadsheets.Values.Append(valueRange, SpreadsheetId, range);
            appendRequest.ValueInputOption =
                SpreadsheetsResource.ValuesResource.AppendRequest.ValueInputOptionEnum.USERENTERED;
            var appendResponse = appendRequest.Execute();
        }

        static void UpdateEntry()
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