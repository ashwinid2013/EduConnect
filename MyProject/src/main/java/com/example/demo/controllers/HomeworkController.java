package com.example.demo.controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Homework;
import com.example.demo.entities.HomeworkRequest;
import com.example.demo.entities.Standard;
import com.example.demo.entities.Subject;
import com.example.demo.entities.User;
import com.example.demo.services.HomeworkService;
import com.example.demo.services.StandardService;
import com.example.demo.services.SubjectService;
import com.example.demo.services.UserService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class HomeworkController {

	 @Autowired
	 HomeworkService hservice;
	 @Autowired
	 StandardService stdservice;
	 @Autowired
	 UserService uservice;
	 @Autowired
	 SubjectService subservice;
	 
	 @PostMapping("/addHomework")
	    public Homework addHomework(@RequestBody HomeworkRequest homeworkrequest)
	    {
		    Standard std=stdservice.getById(homeworkrequest.getStandardId());
		    Subject sub=subservice.getByid(homeworkrequest.getSubjectId());
		    User teacherid=uservice.getById(homeworkrequest.getTeacherId());
		    
		    Homework hw=new Homework(std,teacherid,sub,homeworkrequest.getAssignDate(),homeworkrequest.getSubmitDate(),homeworkrequest.getDescription());
		    return hservice.save(hw);
	    }
}
