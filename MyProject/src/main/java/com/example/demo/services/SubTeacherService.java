package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.AcademicYear;
import com.example.demo.entities.SubTeacher;
import com.example.demo.repositories.SubTeacherRepository;

@Service
public class SubTeacherService {

	@Autowired
	SubTeacherRepository strepo;
	
	 public SubTeacher save(SubTeacher st)
	 {
		return strepo.save(st);
	 }
	 
}
