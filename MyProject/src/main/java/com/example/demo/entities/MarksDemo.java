package com.example.demo.entities;

public class MarksDemo {

    private int yearid;
    private int stdid;
    private int subid;
    private int studid;
    private int tid;
    private float marks;
    private int typeid;
    private String comment;

    public MarksDemo() {
        super();
    }

    public MarksDemo(int yearid, int stdid, int subid, int studid, int tid, float marks, int typeid, String comment) {
        super();
        this.yearid = yearid;
        this.stdid = stdid;
        this.subid = subid;
        this.studid = studid;
        this.tid = tid;
        this.marks = marks;
        this.typeid = typeid;
        this.comment = comment;
    }

    // Getters and Setters
    public int getYearid() { return yearid; }
    public void setYearid(int yearid) { this.yearid = yearid; }
    public int getStdid() { return stdid; }
    public void setStdid(int stdid) { this.stdid = stdid; }
    public int getSubid() { return subid; }
    public void setSubid(int subid) { this.subid = subid; }
    public int getStudid() { return studid; }
    public void setStudid(int studid) { this.studid = studid; }
    public int getTypeid() { return typeid; }
    public void setTypeid(int typeid) { this.typeid = typeid; }
    public int getTid() { return tid; }
    public void setTid(int tid) { this.tid = tid; }
    public float getMarks() { return marks; }
    public void setMarks(float marks) { this.marks = marks; }
    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

	@Override
	public String toString() {
		return "MarksDemo [yearid=" + yearid + ", stdid=" + stdid + ", subid=" + subid + ", studid=" + studid + ", tid="
				+ tid + ", marks=" + marks + ", typeid=" + typeid + ", comment=" + comment + "]";
	}
    
    
}
