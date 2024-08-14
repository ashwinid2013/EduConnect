package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Homework;
import com.example.demo.entities.User;
import com.example.demo.repositories.StandardRepository;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userrepo;
	
	public List<User> getTeachers()
	{
		return userrepo.getTeachers();
	}
	
	public List<User> getUsers()
	{
		return userrepo.findAll();
	}
	public List<User> getParents()
	{
		return userrepo.getParents();
	}
	public User getById(int id)
	{
		return userrepo.findById(id).get();
	}
}
