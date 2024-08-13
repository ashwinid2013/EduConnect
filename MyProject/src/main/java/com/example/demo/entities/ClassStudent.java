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
@Table(name="class_student")
public class ClassStudent {


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int cid;
	
	int sid;
	
	int yid;
	
	int std_id;
	
	public ClassStudent() {
		super();
	}

	public ClassStudent(int sid, int yid, int std_id) {
		super();
		this.sid = sid;
		this.yid = yid;
		this.std_id = std_id;
	}


	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public int getYid() {
		return yid;
	}

	public void setYid(int yid) {
		this.yid = yid;
	}

	public int getStd_id() {
		return std_id;
	}

	public void setStd_id(int std_id) {
		this.std_id = std_id;
	}
}
