package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Standard;
import com.example.demo.repositories.StandardRepository;
import com.example.demo.repositories.StudentRepository;

@Service
public class StandardService {

	@Autowired
	StandardRepository srepo;
	
	public List<Standard> getStandards()
	{
		return srepo.findAll();
	}
	
	public Standard getById(int id)
	{
		return srepo.findById(id).get();
	}
	
}
