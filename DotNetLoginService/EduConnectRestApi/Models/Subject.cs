using System;
using System.Collections.Generic;

namespace EduConnectRestApi.Models
{
    public partial class Subject
    {
      
        public Subject()
        {
            ClassSubTeachers = new HashSet<ClassSubTeacher>();
            Homeworks = new HashSet<Homework>();
            Marks = new HashSet<Mark>();
        }

        public int SubId { get; set; }
        public string? SubName { get; set; }

       

        public virtual ICollection<ClassSubTeacher>? ClassSubTeachers { get; set; }
        public virtual ICollection<Homework>? Homeworks { get; set; }
        public virtual ICollection<Mark>? Marks { get; set; }
    }
}
