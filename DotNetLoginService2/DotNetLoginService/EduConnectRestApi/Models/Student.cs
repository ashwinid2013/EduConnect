using System;
using System.Collections.Generic;

namespace EduConnectRestApi.Models
{
    public partial class Student
    {
        public Student()
        {
            ClassStudents = new HashSet<ClassStudent>();
            Marks = new HashSet<Mark>();
        }

        public int Sid { get; set; }
        public int RegNo { get; set; }
        public string? Fname { get; set; }
        public string? Mname { get; set; }
        public string? Lname { get; set; }
        public int? Pid { get; set; }
        public DateOnly? Dob { get; set; }
        public string? Gender { get; set; }
        public string? BloodGroup { get; set; }

        public virtual User? PidNavigation { get; set; }
        public virtual ICollection<ClassStudent>? ClassStudents { get; set; }
        public virtual ICollection<Mark>? Marks { get; set; }
    }
}
