package com.example.cinemacileback.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
public class Projection {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;
	
	@ManyToOne
	private Movie movie;
	
	@ManyToOne
	private Hall hall;
	
	@ManyToOne 
	private User user;
	
	private Date date;
	private int price;
	
	@OneToOne
	private ProjectionType projectionType;
	
	public Projection() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public Hall getHall() {
		return hall;
	}

	public void setHall(Hall hall) {
		this.hall = hall;
	}

	public User getUser() {
		return user;
	}

	public Projection(Long id, Movie movie, Hall hall, User user, Date date, int price, ProjectionType projectionType) {
		super();
		this.id = id;
		this.movie = movie;
		this.hall = hall;
		this.user = user;
		this.date = date;
		this.price = price;
		this.projectionType = projectionType;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public ProjectionType getProjectionType() {
		return projectionType;
	}

	public void setProjectionType(ProjectionType projectionType) {
		this.projectionType = projectionType;
	}
}
