package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.AcademicYear;
import com.example.demo.services.YearService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class YearController {

	@Autowired
	YearService yservice;
	
	@GetMapping("/getYears")
	public List<AcademicYear> getyears()
	{
		return yservice.getYears();
	}
	
}
