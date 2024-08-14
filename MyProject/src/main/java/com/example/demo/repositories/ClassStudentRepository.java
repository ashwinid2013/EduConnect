package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ClassStudent;

@Repository
public interface ClassStudentRepository extends JpaRepository<ClassStudent, Integer>
{
	@Query("select cs from ClassStudent cs where cs.sid=:id")
    public ClassStudent getStudent(int id);
}
