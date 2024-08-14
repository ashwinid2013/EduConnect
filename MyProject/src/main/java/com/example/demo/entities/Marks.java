package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

/*@Entity
@Table(name="marks")
public class Marks {


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int mark_id;
	
	@ManyToOne
	@JoinColumn(name="stud_id")
	Student stud_id;
	
	@ManyToOne
	@JoinColumn(name="sub_id")
	Subject sub_id;
	
	@ManyToOne
	@JoinColumn(name="yid")
	AcademicYear yid;
	
	@ManyToOne
	@JoinColumn(name="tid")
	User tid;
	
    String comment;
	
	float total;
	
	float percentage;
	
	String grade;
	
	ExamType type_id;

	public int getMark_id() {
		return mark_id;
	}

	public void setMark_id(int mark_id) {
		this.mark_id = mark_id;
	}

	public Student getStud_id() {
		return stud_id;
	}

	public void setStud_id(Student stud_id) {
		this.stud_id = stud_id;
	}

	public Subject getSub_id() {
		return sub_id;
	}

	public void setSub_id(Subject sub_id) {
		this.sub_id = sub_id;
	}

	public AcademicYear getYid() {
		return yid;
	}

	public void setYid(AcademicYear yid) {
		this.yid = yid;
	}

	public User getTid() {
		return tid;
	}

	public void setTid(User tid) {
		this.tid = tid;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	public float getPercentage() {
		return percentage;
	}

	public void setPercentage(float percentage) {
		this.percentage = percentage;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public ExamType getType_id() {
		return type_id;
	}

	public void setType_id(ExamType type_id) {
		this.type_id = type_id;
	}
	
}*/
