using System;
using System.Collections.Generic;

namespace EduConnectRestApi.Models
{
    public partial class Area
    {
        public Area()
        {
            Users = new HashSet<User>();
        }

        public int Areaid { get; set; }
        public string? Name { get; set; }
        public string? Pincode { get; set; }
        public int? Cityid { get; set; }

        public virtual City? City { get; set; }
        public virtual ICollection<User>? Users { get; set; }
    }
}
