package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ClassStudent;
import com.example.demo.entities.Standard;
import com.example.demo.entities.Student;
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
	public List<ClassStudent> getStudentsByStandard(int stdid,int yid)
	{
		return csrepo.getStudentsByStandard(stdid,yid);
	}
}
