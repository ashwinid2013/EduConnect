package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.AcademicYear;
import com.example.demo.entities.ExamType;
import com.example.demo.entities.Marks;
import com.example.demo.entities.Student;
import com.example.demo.entities.Subject;


@EnableJpaRepositories
@Repository
public interface MarksRepository extends JpaRepository<Marks, Integer> {

	@Query("SELECT m FROM Marks m WHERE m.yid = :yid AND m.sub_id = :subid AND m.stud_id = :studid AND m.type_id = :typeid")
	List<Marks> viewMarks(AcademicYear yid, Subject subid,Student studid, ExamType typeid);
}
