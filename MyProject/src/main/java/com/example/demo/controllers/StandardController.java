package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Standard;
import com.example.demo.services.StandardService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class StandardController {

	@Autowired
	StandardService stdservice;
	
	@GetMapping("/getStandards")
	public List<Standard> getStandards()
	{
		return stdservice.getStandards();
	}
}
