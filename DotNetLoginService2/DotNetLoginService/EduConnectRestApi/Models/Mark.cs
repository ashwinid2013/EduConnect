using System;
using System.Collections.Generic;

namespace EduConnectRestApi.Models
{
    public partial class Mark
    {
        public int MarkId { get; set; }
        public int? StudId { get; set; }
        public int? SubId { get; set; }
        public int? Yid { get; set; }
        public int? Tid { get; set; }
        public string? Comment { get; set; }
        public decimal? Total { get; set; }
        public decimal? Percentage { get; set; }
        public string? Grade { get; set; }
        public int? TypeId { get; set; }

        public virtual Student? Stud { get; set; }
        public virtual Subject? Sub { get; set; }
        public virtual User? TidNavigation { get; set; }
        public virtual Type? Type { get; set; }
        public virtual AcademicYear? YidNavigation { get; set; }
    }
}
