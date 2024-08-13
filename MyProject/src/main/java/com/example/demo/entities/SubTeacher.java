package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="sub_teacher")
public class SubTeacher {


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int cst_id;
	
	@ManyToOne
	@JoinColumn(name="std_id")
	Standard std_id;
	
	@ManyToOne
	@JoinColumn(name="sub_id")
	Subject sub_id;
	
	@ManyToOne
	@JoinColumn(name="tid")
	User tid;
	
	@ManyToOne
	@JoinColumn(name="yid")
	AcademicYear yid;

	
	public SubTeacher() {
		super();
	}
	public SubTeacher(Standard std_id, Subject sub_id, User tid, AcademicYear yid) {
		super();
		this.std_id = std_id;
		this.sub_id = sub_id;
		this.tid = tid;
		this.yid = yid;
	}
	public int getCst_id() {
		return cst_id;
	}
	public void setCst_id(int cst_id) {
		this.cst_id = cst_id;
	}
	public Standard getStd_id() {
		return std_id;
	}
	public void setStd_id(Standard std_id) {
		this.std_id = std_id;
	}
	public Subject getSub_id() {
		return sub_id;
	}
	public void setSub_id(Subject sub_id) {
		this.sub_id = sub_id;
	}
	public User getTid() {
		return tid;
	}
	public void setTid(User tid) {
		this.tid = tid;
	}
	public AcademicYear getYid() {
		return yid;
	}
	public void setYid(AcademicYear yid) {
		this.yid = yid;
	}
}
