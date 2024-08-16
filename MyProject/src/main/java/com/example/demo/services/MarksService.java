package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.AcademicYear;
import com.example.demo.entities.ExamType;
import com.example.demo.entities.Marks;
import com.example.demo.entities.Student;
import com.example.demo.entities.Subject;
import com.example.demo.repositories.MarksRepository;

@Service
public class MarksService {

    @Autowired
    private MarksRepository mrepo;
    
    public Marks saveMarks(Marks mark) {
        return mrepo.save(mark);
    }

    public List<Marks> viewMarks(AcademicYear yid, Subject subid, Student studid, ExamType typeid) {
        return mrepo.viewMarks(yid, subid, studid, typeid);
    }
}
