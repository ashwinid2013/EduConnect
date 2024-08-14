package com.example.demo.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Homework;
import com.example.demo.entities.Standard;
import com.example.demo.entities.Subject;
import com.example.demo.entities.User;
import com.example.demo.services.StandardService;
import com.example.demo.services.SubjectService;
import com.example.demo.services.UserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UserController 
{
	@Autowired
   UserService uservice;
   @Autowired
   StandardService stdservice;
   @Autowired
   SubjectService subservice;
   
    @GetMapping("/getTeachers")
    public List<User> getTeachers()
    {
    	return uservice.getTeachers();
    }
    
    @GetMapping("/getUsers")
    public List<User> getAllUsers()
    {
    	return uservice.getUsers();
    }
    
    @GetMapping("/getParents")
    public List<User> getParents()
    {
    	return uservice.getParents();
    }
   
}
