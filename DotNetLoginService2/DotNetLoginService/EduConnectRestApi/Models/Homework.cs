using System;
using System.Collections.Generic;

namespace EduConnectRestApi.Models
{
    public partial class Homework
    {
        public int Hid { get; set; }
        public int? StdId { get; set; }
        public int? Tid { get; set; }
        public int? SubId { get; set; }
        public DateOnly? AssignDate { get; set; }
        public DateOnly? SubmissionDate { get; set; }
        public string? Description { get; set; }

        public virtual Standard? Std { get; set; }
        public virtual Subject? Sub { get; set; }
        public virtual User? TidNavigation { get; set; }
    }
}
