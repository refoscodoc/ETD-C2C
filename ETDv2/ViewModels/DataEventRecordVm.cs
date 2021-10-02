using System;

namespace ETDv2.ViewModels
{
    public class DataEventRecordVm
    {
        public long DataEventRecordId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Timestamp { get; set; }
        public SourceInfoVm SourceInfo { get; set; }
        public long SourceInfoId { get; set; }
        public string Agent { get; set; }
        public string Link { get; set; }
        public string SourceType { get; set; }
        public string GoogleProduct { get; set; }
        public string TTP { get; set; }
        public string Topics { get; set; }
        public string TRA { get; set; }
        public string ReadyToLaunch { get; set; }
        public string Comments { get; set; }
        public string Uuid { get; set; }
        public string TimestampEnd { get; set; }
        public string Uat { get; set; }
    }
}
