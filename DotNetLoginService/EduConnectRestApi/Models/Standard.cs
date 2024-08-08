using System;
using System.Collections.Generic;

namespace EduConnectRestApi.Models
{
    public partial class Standard
    {
        public Standard()
        {
            ClassStudents = new HashSet<ClassStudent>();
            ClassSubTeachers = new HashSet<ClassSubTeacher>();
            Homeworks = new HashSet<Homework>();
        }

        public int StdId { get; set; }
        public string? StdName { get; set; }

        public virtual ICollection<ClassStudent>? ClassStudents { get; set; }
        public virtual ICollection<ClassSubTeacher>? ClassSubTeachers { get; set; }
        public virtual ICollection<Homework>? Homeworks { get; set; }
    }
}
