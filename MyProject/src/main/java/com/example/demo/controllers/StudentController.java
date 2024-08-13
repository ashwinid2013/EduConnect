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

	@PutMapping("/assignParent/{sid}")
	public Student assignParent(@RequestBody User u, @PathVariable int sid) {
		Student s = studservice.getStudent(sid);
		s.setPid(u);
		return studservice.assignParent(s);
	}
}
