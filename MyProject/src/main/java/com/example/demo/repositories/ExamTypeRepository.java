package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ExamType;

@Repository
public interface ExamTypeRepository extends JpaRepository<ExamType, Integer>
{

}
