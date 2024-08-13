package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="area")
public class Area {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int areaid;
	String name;
	String pincode;
	@ManyToOne
	@JoinColumn(name="cityid")
	City cityid;
	public int getAreaid() {
		return areaid;
	}
	public void setAreaid(int areaid) {
		this.areaid = areaid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public City getCityid() {
		return cityid;
	}
	public void setCityid(City cityid) {
		this.cityid = cityid;
	}
	
}
