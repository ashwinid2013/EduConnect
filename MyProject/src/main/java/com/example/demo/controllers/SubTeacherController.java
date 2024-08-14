package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.AcademicYear;
import com.example.demo.entities.Standard;
import com.example.demo.entities.Student;
import com.example.demo.entities.SubTeacher;
import com.example.demo.entities.Subject;
import com.example.demo.entities.User;
import com.example.demo.services.StandardService;
import com.example.demo.services.SubTeacherService;
import com.example.demo.services.SubjectService;
import com.example.demo.services.UserService;
import com.example.demo.services.YearService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class SubTeacherController {

	@Autowired
	SubTeacherService stservice;
	@Autowired
	StandardService sservice;
	@Autowired
	SubjectService subservice;
	@Autowired
	UserService uservice;
	@Autowired
	YearService yservice;
	
	@PostMapping("/assignTeacher/{std}/{sub}/{teacher}/{year}")
	public SubTeacher assignTeacher(@PathVariable int std,@PathVariable int sub,@PathVariable int teacher,@PathVariable int year) {
		
		Standard stdard=sservice.getById(std);
		Subject subject=subservice.getByid(sub);
		User teach=uservice.getById(teacher);
		AcademicYear yr=yservice.getById(year);
		
		SubTeacher subteach=new SubTeacher(stdard,subject,teach,yr);
		return stservice.save(subteach);
	}
}
