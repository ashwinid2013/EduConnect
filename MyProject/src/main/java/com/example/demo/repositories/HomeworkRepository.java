package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Homework;
import com.example.demo.entities.Standard;

@Repository
public interface HomeworkRepository extends JpaRepository<Homework, Integer>
{
    @Query("select h from Homework h where h.std_id.std_id=:stdid")
	public List<Homework> viewHomework(int stdid);
}
