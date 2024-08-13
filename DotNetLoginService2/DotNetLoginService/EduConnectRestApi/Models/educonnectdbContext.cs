using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EduConnectRestApi.Models
{
    public partial class educonnectdbContext : DbContext
    {
        public educonnectdbContext()
        {
        }

        public educonnectdbContext(DbContextOptions<educonnectdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AcademicYear> AcademicYears { get; set; } = null!;
        public virtual DbSet<Area> Areas { get; set; } = null!;
        public virtual DbSet<City> Cities { get; set; } = null!;
        public virtual DbSet<ClassStudent> ClassStudents { get; set; } = null!;
        public virtual DbSet<ClassSubTeacher> ClassSubTeachers { get; set; } = null!;
        public virtual DbSet<Homework> Homeworks { get; set; } = null!;
        public virtual DbSet<Mark> Marks { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Standard> Standards { get; set; } = null!;
        public virtual DbSet<Student> Students { get; set; } = null!;
        public virtual DbSet<Subject> Subjects { get; set; } = null!;
        public virtual DbSet<Type> Types { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=educonnectdb", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.30-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<AcademicYear>(entity =>
            {
                entity.HasKey(e => e.Yid)
                    .HasName("PRIMARY");

                entity.ToTable("academic_year");

                entity.Property(e => e.Yid)
                    .ValueGeneratedNever()
                    .HasColumnName("yid");

                entity.Property(e => e.YearName)
                    .HasMaxLength(45)
                    .HasColumnName("year_name");
            });

            modelBuilder.Entity<Area>(entity =>
            {
                entity.ToTable("area");

                entity.HasIndex(e => e.Cityid, "cityid_fk_idx");

                entity.Property(e => e.Areaid).HasColumnName("areaid");

                entity.Property(e => e.Cityid).HasColumnName("cityid");

                entity.Property(e => e.Name)
                    .HasMaxLength(30)
                    .HasColumnName("name");

                entity.Property(e => e.Pincode)
                    .HasMaxLength(8)
                    .HasColumnName("pincode");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Areas)
                    .HasForeignKey(d => d.Cityid)
                    .HasConstraintName("cityid_fk");
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("city");

                entity.Property(e => e.Cityid).HasColumnName("cityid");

                entity.Property(e => e.Cityname)
                    .HasMaxLength(50)
                    .HasColumnName("cityname");
            });

            modelBuilder.Entity<ClassStudent>(entity =>
            {
                entity.HasKey(e => e.Cid)
                    .HasName("PRIMARY");

                entity.ToTable("class_student");

                entity.HasIndex(e => e.Sid, "sid_fk_idx");

                entity.HasIndex(e => e.StdId, "std_id_idx");

                entity.HasIndex(e => e.Yid, "yid_idx");

                entity.Property(e => e.Cid)
                    .ValueGeneratedNever()
                    .HasColumnName("cid");

                entity.Property(e => e.Sid).HasColumnName("sid");

                entity.Property(e => e.StdId).HasColumnName("std_id");

                entity.Property(e => e.Yid).HasColumnName("yid");

                entity.HasOne(d => d.SidNavigation)
                    .WithMany(p => p.ClassStudents)
                    .HasForeignKey(d => d.Sid)
                    .HasConstraintName("sid_fk");

                entity.HasOne(d => d.Std)
                    .WithMany(p => p.ClassStudents)
                    .HasForeignKey(d => d.StdId)
                    .HasConstraintName("std_id_fk");

                entity.HasOne(d => d.YidNavigation)
                    .WithMany(p => p.ClassStudents)
                    .HasForeignKey(d => d.Yid)
                    .HasConstraintName("yid_fk");
            });

            modelBuilder.Entity<ClassSubTeacher>(entity =>
            {
                entity.HasKey(e => e.CstId)
                    .HasName("PRIMARY");

                entity.ToTable("class_sub_teacher");

                entity.HasIndex(e => e.StdId, "stdid_fk_idx");

                entity.HasIndex(e => e.SubId, "subid_fk_idx");

                entity.HasIndex(e => e.Tid, "tid_fk_idx");

                entity.HasIndex(e => e.Yid, "yid_fk_idx");

                entity.Property(e => e.CstId)
                    .ValueGeneratedNever()
                    .HasColumnName("cst_id");

                entity.Property(e => e.StdId).HasColumnName("std_id");

                entity.Property(e => e.SubId).HasColumnName("sub_id");

                entity.Property(e => e.Tid).HasColumnName("tid");

                entity.Property(e => e.Yid).HasColumnName("yid");

                entity.HasOne(d => d.Std)
                    .WithMany(p => p.ClassSubTeachers)
                    .HasForeignKey(d => d.StdId)
                    .HasConstraintName("stdid_fk");

                entity.HasOne(d => d.Sub)
                    .WithMany(p => p.ClassSubTeachers)
                    .HasForeignKey(d => d.SubId)
                    .HasConstraintName("subid_fk");

                entity.HasOne(d => d.TidNavigation)
                    .WithMany(p => p.ClassSubTeachers)
                    .HasForeignKey(d => d.Tid)
                    .HasConstraintName("tid_fk");

                entity.HasOne(d => d.YidNavigation)
                    .WithMany(p => p.ClassSubTeachers)
                    .HasForeignKey(d => d.Yid)
                    .HasConstraintName("yearid_fk");
            });

            modelBuilder.Entity<Homework>(entity =>
            {
                entity.HasKey(e => e.Hid)
                    .HasName("PRIMARY");

                entity.ToTable("homework");

                entity.HasIndex(e => e.StdId, "home_std_id_fk_idx");

                entity.HasIndex(e => e.SubId, "home_sub_id_fk_idx");

                entity.HasIndex(e => e.Tid, "home_tid_fk_idx");

                entity.Property(e => e.Hid)
                    .ValueGeneratedNever()
                    .HasColumnName("hid");

                entity.Property(e => e.AssignDate).HasColumnName("assign_date");

                entity.Property(e => e.Description)
                    .HasMaxLength(100)
                    .HasColumnName("description");

                entity.Property(e => e.StdId).HasColumnName("std_id");

                entity.Property(e => e.SubId).HasColumnName("sub_id");

                entity.Property(e => e.SubmissionDate).HasColumnName("submission_date");

                entity.Property(e => e.Tid).HasColumnName("tid");

                entity.HasOne(d => d.Std)
                    .WithMany(p => p.Homeworks)
                    .HasForeignKey(d => d.StdId)
                    .HasConstraintName("home_stdid_fk");

                entity.HasOne(d => d.Sub)
                    .WithMany(p => p.Homeworks)
                    .HasForeignKey(d => d.SubId)
                    .HasConstraintName("home_subid_fk");

                entity.HasOne(d => d.TidNavigation)
                    .WithMany(p => p.Homeworks)
                    .HasForeignKey(d => d.Tid)
                    .HasConstraintName("home_tid_fk");
            });

            modelBuilder.Entity<Mark>(entity =>
            {
                entity.ToTable("marks");

                entity.HasIndex(e => e.StudId, "marks_studid_fk_idx");

                entity.HasIndex(e => e.SubId, "marks_subid_fk_idx");

                entity.HasIndex(e => e.Tid, "marks_tid_fk_idx");

                entity.HasIndex(e => e.TypeId, "marks_typeid_fk_index");

                entity.HasIndex(e => e.Yid, "marks_yearid_fk_idx");

                entity.Property(e => e.MarkId)
                    .ValueGeneratedNever()
                    .HasColumnName("mark_id");

                entity.Property(e => e.Comment)
                    .HasMaxLength(45)
                    .HasColumnName("comment");

                entity.Property(e => e.Grade)
                    .HasMaxLength(4)
                    .HasColumnName("grade");

                entity.Property(e => e.Percentage)
                    .HasPrecision(5, 2)
                    .HasColumnName("percentage");

                entity.Property(e => e.StudId).HasColumnName("stud_id");

                entity.Property(e => e.SubId).HasColumnName("sub_id");

                entity.Property(e => e.Tid).HasColumnName("tid");

                entity.Property(e => e.Total)
                    .HasPrecision(5, 2)
                    .HasColumnName("total");

                entity.Property(e => e.TypeId).HasColumnName("type_id");

                entity.Property(e => e.Yid).HasColumnName("yid");

                entity.HasOne(d => d.Stud)
                    .WithMany(p => p.Marks)
                    .HasForeignKey(d => d.StudId)
                    .HasConstraintName("marks_studid_fk");

                entity.HasOne(d => d.Sub)
                    .WithMany(p => p.Marks)
                    .HasForeignKey(d => d.SubId)
                    .HasConstraintName("marks_subid_fk");

                entity.HasOne(d => d.TidNavigation)
                    .WithMany(p => p.Marks)
                    .HasForeignKey(d => d.Tid)
                    .HasConstraintName("marks_tid_fk");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.MarksNavigation)
                    .HasForeignKey(d => d.TypeId)
                    .HasConstraintName("marks_typeid_fk");

                entity.HasOne(d => d.YidNavigation)
                    .WithMany(p => p.Marks)
                    .HasForeignKey(d => d.Yid)
                    .HasConstraintName("marks_yearid_fk");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.HasKey(e => e.Rid)
                    .HasName("PRIMARY");

                entity.ToTable("role");

                entity.Property(e => e.Rid)
                    .ValueGeneratedNever()
                    .HasColumnName("rid");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(45)
                    .HasColumnName("role_name");
            });

            modelBuilder.Entity<Standard>(entity =>
            {
                entity.HasKey(e => e.StdId)
                    .HasName("PRIMARY");

                entity.ToTable("standard");

                entity.Property(e => e.StdId)
                    .ValueGeneratedNever()
                    .HasColumnName("std_id");

                entity.Property(e => e.StdName)
                    .HasMaxLength(45)
                    .HasColumnName("std_name");
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.HasKey(e => e.Sid)
                    .HasName("PRIMARY");

                entity.ToTable("student");

                entity.HasIndex(e => e.Pid, "pid_fk_idx");

                entity.HasIndex(e => e.RegNo, "reg_no_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Sid)
                    .ValueGeneratedNever()
                    .HasColumnName("sid");

                entity.Property(e => e.BloodGroup)
                    .HasMaxLength(45)
                    .HasColumnName("blood_group");

                entity.Property(e => e.Dob).HasColumnName("dob");

                entity.Property(e => e.Fname)
                    .HasMaxLength(45)
                    .HasColumnName("fname");

                entity.Property(e => e.Gender)
                    .HasMaxLength(45)
                    .HasColumnName("gender");

                entity.Property(e => e.Lname)
                    .HasMaxLength(45)
                    .HasColumnName("lname");

                entity.Property(e => e.Mname)
                    .HasMaxLength(45)
                    .HasColumnName("mname");

                entity.Property(e => e.Pid).HasColumnName("pid");

                entity.Property(e => e.RegNo)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("reg_no");

                entity.HasOne(d => d.PidNavigation)
                    .WithMany(p => p.Students)
                    .HasForeignKey(d => d.Pid)
                    .HasConstraintName("pid_fk");
            });

            modelBuilder.Entity<Subject>(entity =>
            {
                entity.HasKey(e => e.SubId)
                    .HasName("PRIMARY");

                entity.ToTable("subject");

                entity.Property(e => e.SubId)
                    .ValueGeneratedNever()
                    .HasColumnName("sub_id");

                entity.Property(e => e.SubName)
                    .HasMaxLength(45)
                    .HasColumnName("sub_name");
            });

            modelBuilder.Entity<Type>(entity =>
            {
                entity.ToTable("type");

                entity.Property(e => e.TypeId)
                    .ValueGeneratedNever()
                    .HasColumnName("type_id");

                entity.Property(e => e.Marks).HasColumnName("marks");

                entity.Property(e => e.TypeName)
                    .HasMaxLength(45)
                    .HasColumnName("type_name");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Uid)
                    .HasName("PRIMARY");

                entity.ToTable("user");

                entity.HasIndex(e => e.Areaid, "areaid_fk_idx");

                entity.HasIndex(e => e.Username, "username_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Uid)
                    .ValueGeneratedNever()
                    .HasColumnName("uid");

                entity.Property(e => e.Address)
                    .HasMaxLength(100)
                    .HasColumnName("address");

                entity.Property(e => e.Areaid).HasColumnName("areaid");

                entity.Property(e => e.ContactNo)
                    .HasMaxLength(45)
                    .HasColumnName("contact_no");

                entity.Property(e => e.Email)
                    .HasMaxLength(45)
                    .HasColumnName("email");

                entity.Property(e => e.Fname)
                    .HasMaxLength(45)
                    .HasColumnName("fname");

                entity.Property(e => e.Lname)
                    .HasMaxLength(45)
                    .HasColumnName("lname");

                entity.Property(e => e.Password)
                    .HasMaxLength(45)
                    .HasColumnName("password");

                entity.Property(e => e.Rid).HasColumnName("rid");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.Username)
                    .HasMaxLength(45)
                    .HasColumnName("username");

                entity.HasOne(d => d.Area)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.Areaid)
                    .HasConstraintName("areaid_fk");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
