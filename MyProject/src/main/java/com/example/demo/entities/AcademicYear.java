package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="academic_year")
public class AcademicYear {


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int yid;
	
	String year_name;
	
	
	public int getYid() {
		return yid;
	}
	public void setYid(int yid) {
		this.yid = yid;
	}
	public String getYear_name() {
		return year_name;
	}
	public void setYear_name(String year_name) {
		this.year_name = year_name;
	}
	
}
