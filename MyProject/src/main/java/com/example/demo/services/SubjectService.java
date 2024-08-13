package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Subject;
import com.example.demo.repositories.SubjectRepository;

@Service
public class SubjectService {

	@Autowired
	SubjectRepository srepo;
	
	public List<Subject> getSubjects()
	{
		return srepo.findAll();
	}
	public Subject getByid(int id)
	{
		return srepo.findById(id).get();
	}
}
