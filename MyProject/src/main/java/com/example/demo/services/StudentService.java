package com.example.demo.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Student;


import com.example.demo.repositories.StudentRepository;

@Service
public class StudentService {

	@Autowired
	StudentRepository srepo;
	
    public List<Student> getStudents()
    {
    	return srepo.findAll();
    }
    
    public Student getStudent(int sid)
    {
    	return srepo.findById(sid).get();
    }
    
    public Student assignParent(Student s)
    {
    	return srepo.save(s);
    }
    public List<Student> getStudentsByParent(int pid)
    {
    	return srepo.getStudentsByParent(pid);
    }
    public Student getById(int id)
    {
    	return srepo.findById(id).get();
    }
}
