package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.SubTeacher;

@Repository
public interface SubTeacherRepository extends JpaRepository<SubTeacher, Integer>
{

}
