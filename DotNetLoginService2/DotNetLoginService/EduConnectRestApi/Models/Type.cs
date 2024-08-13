using System;
using System.Collections.Generic;

namespace EduConnectRestApi.Models
{
    public partial class Type
    {
        public Type()
        {
            MarksNavigation = new HashSet<Mark>();
        }

        public int TypeId { get; set; }
        public string? TypeName { get; set; }
        public int? Marks { get; set; }

        public virtual ICollection<Mark>? MarksNavigation { get; set; }
    }
}
