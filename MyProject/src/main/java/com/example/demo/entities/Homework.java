package com.example.demo.entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="homework")
public class Homework {


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int hid;
	
	@ManyToOne
	@JoinColumn(name="std_id")
	Standard std_id;
	
	@ManyToOne
	@JoinColumn(name="tid")
	User tid;
	
	@ManyToOne
	@JoinColumn(name="sub_id")
	Subject sub_id;

	Date assign_date;
	
	Date submission_date;
	
	String description;

	
	
	public Homework() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public Homework(Standard std_id, User tid, Subject sub_id, Date assign_date, Date submission_date,
			String description) {
		super();
		this.std_id = std_id;
		this.tid = tid;
		this.sub_id = sub_id;
		this.assign_date = assign_date;
		this.submission_date = submission_date;
		this.description = description;
	}


	public int getHid() {
		return hid;
	}

	public void setHid(int hid) {
		this.hid = hid;
	}

	public Standard getStd_id() {
		return std_id;
	}

	public void setStd_id(Standard std_id) {
		this.std_id = std_id;
	}

	public User getTid() {
		return tid;
	}

	public void setTid(User tid) {
		this.tid = tid;
	}

	public Subject getSub_id() {
		return sub_id;
	}

	public void setSub_id(Subject sub_id) {
		this.sub_id = sub_id;
	}

	public Date getAssign_date() {
		return assign_date;
	}

	public void setAssign_date(Date assign_date) {
		this.assign_date = assign_date;
	}

	public Date getSubmission_date() {
		return submission_date;
	}

	public void setSubmission_date(Date submission_date) {
		this.submission_date = submission_date;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
