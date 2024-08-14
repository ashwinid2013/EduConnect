package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Student;

import com.example.demo.entities.User;
import com.example.demo.services.StudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentController {

	@Autowired
	StudentService studservice;

	@GetMapping("/getStudents")
	public List<Student> getStudents() {
		return studservice.getStudents();
	}
	
	@GetMapping("/getStudentById/{sid}")
	public Student getStudentById(@PathVariable int sid) {
		return studservice.getStudent(sid);
	}
	

	@PutMapping("/assignParent/{sid}")
	public Student assignParent(@RequestBody User u, @PathVariable int sid) {
		Student s = studservice.getStudent(sid);
		s.setPid(u);
		return studservice.assignParent(s);
	}
	 
	@GetMapping("/getStudentsByParents/{pid}")
	public List<Student> getStudentsByParents(@PathVariable int pid)
	{
		return studservice.getStudentsByParent(pid);
	
	}
}
