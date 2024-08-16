package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ClassStudent;
import com.example.demo.entities.Student;

@Repository
public interface ClassStudentRepository extends JpaRepository<ClassStudent, Integer>
{
	@Query("select cs from ClassStudent cs where cs.sid=:id")
    public ClassStudent getStudent(int id);
	
	@Query("select s from ClassStudent s where s.std_id=:stdid and s.yid=:yid")
	public List<ClassStudent> getStudentsByStandard(int stdid,int yid);
}
