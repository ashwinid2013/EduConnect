package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.AcademicYear;

@Repository
public interface YearRepository extends JpaRepository<AcademicYear, Integer>
{

}
