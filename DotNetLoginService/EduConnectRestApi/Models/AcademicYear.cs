using System;
using System.Collections.Generic;

namespace EduConnectRestApi.Models
{
    public partial class AcademicYear
    {
        public AcademicYear()
        {
            ClassStudents = new HashSet<ClassStudent>();
            ClassSubTeachers = new HashSet<ClassSubTeacher>();
            Marks = new HashSet<Mark>();
        }

        public int Yid { get; set; }
        public string YearName { get; set; } = null!;

        public virtual ICollection<ClassStudent>? ClassStudents { get; set; }
        public virtual ICollection<ClassSubTeacher>? ClassSubTeachers { get; set; }
        public virtual ICollection<Mark>? Marks { get; set; }
    }
}
