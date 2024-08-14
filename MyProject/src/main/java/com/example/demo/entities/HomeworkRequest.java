package com.example.demo.entities;

import java.util.Date;

public class HomeworkRequest {

	 int standardId;
     int teacherId;
     int subjectId;
     Date assignDate;
     Date submitDate;
     String description;
	public int getStandardId() {
		return standardId;
	}
	public void setStandardId(int standardId) {
		this.standardId = standardId;
	}
	public int getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(int teacherId) {
		this.teacherId = teacherId;
	}
	public int getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(int subjectId) {
		this.subjectId = subjectId;
	}
	public Date getAssignDate() {
		return assignDate;
	}
	public void setAssignDate(Date assignDate) {
		this.assignDate = assignDate;
	}
	public Date getSubmitDate() {
		return submitDate;
	}
	public void setSubmitDate(Date submitDate) {
		this.submitDate = submitDate;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
