using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using ETDv2.Services;
using ETDv2.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace ETDv2.Controllers
{
    [Route("api/[controller]")]
    public class DataEventRecordsController : Controller
    {
        private readonly BusinessProvider _businessProvider;

        private readonly GoogleSheets _googleSheets = new GoogleSheets();
    
        public DataEventRecordsController(BusinessProvider businessProvider)
        {
            _businessProvider = businessProvider;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<DataEventRecordVm>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get()
        {
            // THIS WILL BE THE POPULATE FUNCTION AT STARTUP. IT TAKES THE XLS AND ADDS ALL THE RECORDS TO THE SQLITE, SHOULDNT DO IT EVERY SINGLE TIME
            // await _googleSheets.PopulateXls(_businessProvider);
            
            return Ok(await _businessProvider.GetDataEventRecords());
        }
        
        [HttpGet("/api/DataEventRecords/resync")]
        [ProducesResponseType(typeof(IEnumerable<DataEventRecordVm>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Resync()
        {
            // IEnumerable<DataEventRecordVm> collection = await _businessProvider.GetDataEventRecords();
            // // IEnumerable<SourceInfoVm> collectionSource = await _businessProvider.GetSourceInfos();
            //
            // foreach (var element in collection)
            // {
            //     if (element.DataEventRecordId == 0)
            //     {
            //         return BadRequest();
            //     }
            //
            //     if (!await _businessProvider.ExistsDataEventRecord(element.DataEventRecordId))
            //     {
            //         return NotFound($"DataEventRecord with Id {element.DataEventRecordId} does not exist");
            //     }
            //
            //     await _businessProvider.DeleteDataEventRecord(element.DataEventRecordId);
            //     // it doesnt delete the other table nor this one actually
            // }
            // THIS WILL BE THE POPULATE FUNCTION AT STARTUP. IT TAKES THE XLS AND ADDS ALL THE RECORDS TO THE SQLITE, SHOULDNT DO IT EVERY SINGLE TIME
            await _googleSheets.PopulateXls(_businessProvider);
            
            // return Ok(await _businessProvider.GetDataEventRecords());
            return null;
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(DataEventRecordVm), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public async Task<IActionResult> Get(long id)
        {
            if (!await _businessProvider.ExistsDataEventRecord(id))
            {
                return NotFound($"DataEventRecord with Id {id} does not exist");
            }

            return Ok(await _businessProvider.GetDataEventRecordById(id));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] DataEventRecordVm value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (value.SourceInfo == null && value.SourceInfoId == 0)
            {
                return BadRequest();
            }

            var result = await _businessProvider.CreateDataEventRecord(value);
            _googleSheets.CreateXlsEntry(result);

            return Created("/api/DataEventRecord", result);
        }

        [HttpPut("{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public async Task<IActionResult> Put(long id, [FromBody] DataEventRecordVm value)
        {
            if (id == 0)
            {
                return BadRequest();
            }

            if (!await _businessProvider.ExistsDataEventRecord(id))
            {
                return NotFound($"DataEventRecord with Id {id} does not exist");
            }

            await _businessProvider.UpdateDataEventRecord(id, value);
            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.Conflict)]
        public async Task<IActionResult> Delete(long id)
        {
            if (id == 0)
            {
                return BadRequest();
            }

            if (!await _businessProvider.ExistsDataEventRecord(id))
            {
                return NotFound($"DataEventRecord with Id {id} does not exist");
            }

            await _businessProvider.DeleteDataEventRecord(id);

            return Ok();
        }
    }
}
