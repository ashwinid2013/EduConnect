package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ExamType;
import com.example.demo.repositories.ExamTypeRepository;

@Service
public class ExamTypeService {

	@Autowired
	ExamTypeRepository erepo;
	
	public ExamType getById(int id)
	{
		return erepo.findById(id).get();
	}
}
