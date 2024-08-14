package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Homework;
import com.example.demo.repositories.HomeworkRepository;

@Service
public class HomeworkService {

	@Autowired
    private HomeworkRepository homeworkRepository;

    public Homework save(Homework homework) {
        return homeworkRepository.save(homework);
    }
}
