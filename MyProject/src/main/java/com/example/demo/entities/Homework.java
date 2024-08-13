package com.example.demo.entities;

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
	@JoinColumn(name="uid")
	User tid;
	
	@ManyToOne
	@JoinColumn(name="sub_id")
	Subject sub_id;

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
	
}
