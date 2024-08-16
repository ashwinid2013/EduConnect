package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.ClassStudent;
import com.example.demo.entities.Student;
import com.example.demo.services.ClassStudentService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ClassStudentController {

	@Autowired
	ClassStudentService cservice;
	
	@PostMapping("/saveClassStudent")
	public ClassStudent saveClassStudent(@RequestBody ClassStudent s)
	{
		return cservice.SaveClassStudent(s);
	}
	 @GetMapping("/getClassStudent/{id}")
	 public ClassStudent getStudent(@PathVariable int id)
	 {
		 return cservice.getStudent(id);
	 }
	 @GetMapping("/getStudentsByStandard/{stdid}/{yid}")
	 public List<ClassStudent> getStudentsByStandard(@PathVariable int stdid,@PathVariable int yid)
	 {
		 return cservice.getStudentsByStandard(stdid,yid);
	 }
}
