package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.AcademicYear;
import com.example.demo.entities.ExamType;
import com.example.demo.entities.Marks;
import com.example.demo.entities.MarksDemo;
import com.example.demo.entities.Standard;
import com.example.demo.entities.Student;
import com.example.demo.entities.Subject;
import com.example.demo.entities.User;
import com.example.demo.services.ClassStudentService;
import com.example.demo.services.ExamTypeService;
import com.example.demo.services.MarksService;
import com.example.demo.services.StandardService;
import com.example.demo.services.StudentService;
import com.example.demo.services.SubjectService;
import com.example.demo.services.UserService;
import com.example.demo.services.YearService;

@RestController
public class MarksController {

    @Autowired
    private MarksService mservice;
    @Autowired
    private YearService yservice;
    @Autowired
    private StandardService stdservice;
    @Autowired
    private SubjectService subservice;
    @Autowired
    private StudentService studservice;
    @Autowired
    private UserService uservice;
    @Autowired
    private ExamTypeService eservice;
    @Autowired
    private ClassStudentService csservice;

    @PostMapping("/addMarks")
    public Marks addMarks(@RequestBody MarksDemo marks) {
        AcademicYear year = yservice.getById(marks.getYearid());
        Standard std = stdservice.getById(marks.getStdid());
        Subject sub = subservice.getByid(marks.getSubid());
        Student stud = studservice.getById(marks.getStudid());
        User tid = uservice.getById(marks.getTid());
        ExamType type = eservice.getById(marks.getTypeid());
        
        Marks savemarks = new Marks(stud, sub, year, tid, type, marks.getComment(), marks.getMarks());
        return mservice.saveMarks(savemarks);
    }

    @PostMapping("/viewMarks")
    public List<Marks> viewMarks(@RequestBody MarksDemo marks) {
    	
    	System.out.println(marks);
        Subject subid = subservice.getByid(marks.getSubid());
        System.out.println(subid);
        AcademicYear yid = yservice.getById(marks.getYearid());
        Student studid = studservice.getById(marks.getStudid());
        ExamType tid = eservice.getById(marks.getTypeid());
        
        return mservice.viewMarks(yid, subid, studid, tid);
    }
    
    // Uncomment for GET request with @RequestParam
    /*
    @GetMapping("/viewMarks")
    public List<Marks> viewMarks(
            @RequestParam int yearid,
            @RequestParam int subid,
            @RequestParam int studid,
            @RequestParam int typeid) {
        return mservice.viewMarks(yearid, subid, studid, typeid);
    }
    */
}
