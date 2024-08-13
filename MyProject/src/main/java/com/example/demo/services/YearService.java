package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.AcademicYear;
import com.example.demo.repositories.YearRepository;

@Service
public class YearService {

	@Autowired
	YearRepository yrepo;
	
	public List<AcademicYear> getYears()
	{
		return yrepo.findAll();
	}
	
	public AcademicYear getById(int id)
	{
		return yrepo.findById(id).get();
	}
	
}
