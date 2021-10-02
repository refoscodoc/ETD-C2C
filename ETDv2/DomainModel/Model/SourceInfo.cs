using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ETDv2.DomainModel.Model
{
    public class SourceInfo
    {
        [Key]
        public long SourceInfoId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Timestamp { get; set; }
        public List<DataEventRecord> DataEventRecords { get; set; }
    }
}