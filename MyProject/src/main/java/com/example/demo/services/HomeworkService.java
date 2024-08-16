package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.entities.Homework;
import com.example.demo.entities.Standard;
import com.example.demo.repositories.HomeworkRepository;

@Service
public class HomeworkService {

	@Autowired
    private HomeworkRepository homeworkRepository;

    public Homework save(Homework homework) {
        return homeworkRepository.save(homework);
    }
    
    public List<Homework> viewHomework(int stdid)
	 {
		 return homeworkRepository.viewHomework(stdid);
	 }
}
