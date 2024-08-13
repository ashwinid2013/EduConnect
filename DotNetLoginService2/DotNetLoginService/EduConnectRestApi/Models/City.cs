using System;
using System.Collections.Generic;

namespace EduConnectRestApi.Models
{
    public partial class City
    {
        public City()
        {
            Areas = new HashSet<Area>();
        }

        public int Cityid { get; set; }
        public string? Cityname { get; set; }

        public virtual ICollection<Area>? Areas { get; set; }
    }
}
