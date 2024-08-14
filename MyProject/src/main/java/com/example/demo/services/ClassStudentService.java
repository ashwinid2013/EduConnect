package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ClassStudent;
import com.example.demo.repositories.ClassStudentRepository;

@Service
public class ClassStudentService {

	@Autowired
	ClassStudentRepository csrepo;
	
	public ClassStudent SaveClassStudent(ClassStudent s)
	{
		return csrepo.save(s);
	}
	 public ClassStudent getStudent(int id)
	 {
		 return csrepo.getStudent(id);
	 }
}
