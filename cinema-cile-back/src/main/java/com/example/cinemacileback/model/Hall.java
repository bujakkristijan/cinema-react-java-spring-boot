package com.example.cinemacileback.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
public class Hall {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;
	private String name;
	private int rowsHall;
	private int columnsHall;
	
	@JsonIgnore
	@OneToMany(mappedBy = "hall", fetch = FetchType.LAZY, cascade=CascadeType.ALL)
	private List<Projection> projections = new ArrayList<Projection>();
	
	public Hall() {
		
	}

	public Hall(Long id, String name, int rowsHall, int columnsHall, List<Projection> projections) {
		super();
		this.id = id;
		this.name = name;
		this.rowsHall = rowsHall;
		this.columnsHall = columnsHall;
		this.projections = projections;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}



	public int getRowsHall() {
		return rowsHall;
	}

	public void setRowsHall(int rowsHall) {
		this.rowsHall = rowsHall;
	}

	public int getColumnsHall() {
		return columnsHall;
	}

	public void setColumnsHall(int columnsHall) {
		this.columnsHall = columnsHall;
	}

	public List<Projection> getProjections() {
		return projections;
	}

	public void setProjections(List<Projection> projections) {
		this.projections = projections;
	}
	
	
	

}
