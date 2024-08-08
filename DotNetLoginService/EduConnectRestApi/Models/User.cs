using System;
using System.Collections.Generic;

namespace EduConnectRestApi.Models
{
    public partial class User
    {
        public User()
        {
            ClassSubTeachers = new HashSet<ClassSubTeacher>();
            Homeworks = new HashSet<Homework>();
            Marks = new HashSet<Mark>();
            Students = new HashSet<Student>();
        }

        public int Uid { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Fname { get; set; }
        public string? Lname { get; set; }
        public string? Address { get; set; }
        public string? Email { get; set; }
        public string? ContactNo { get; set; }
        public int? Rid { get; set; }
        public int? Areaid { get; set; }
        public sbyte? Status { get; set; }

        public virtual Area? Area { get; set; }
        public virtual ICollection<ClassSubTeacher>? ClassSubTeachers { get; set; }
        public virtual ICollection<Homework>? Homeworks { get; set; }
        public virtual ICollection<Mark>? Marks { get; set; }
        public virtual ICollection<Student>? Students { get; set; }
    }
}
