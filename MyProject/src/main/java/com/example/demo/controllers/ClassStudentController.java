package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.ClassStudent;
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
}
