using System;
using System.Collections.Generic;

namespace EduConnectRestApi.Models
{
    public partial class ClassSubTeacher
    {
        public int CstId { get; set; }
        public int? StdId { get; set; }
        public int? SubId { get; set; }
        public int? Tid { get; set; }
        public int? Yid { get; set; }

        public virtual Standard? Std { get; set; }
        public virtual Subject? Sub { get; set; }
        public virtual User? TidNavigation { get; set; }
        public virtual AcademicYear? YidNavigation { get; set; }
    }
}
