using System;
using System.Collections.Generic;

namespace EduConnectRestApi.Models
{
    public partial class ClassStudent
    {
        public int Cid { get; set; }
        public int? Sid { get; set; }
        public int? Yid { get; set; }
        public int? StdId { get; set; }

        public virtual Student? SidNavigation { get; set; }
        public virtual Standard? Std { get; set; }
        public virtual AcademicYear? YidNavigation { get; set; }
    }
}
