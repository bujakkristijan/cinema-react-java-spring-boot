package com.example.cinemacileback.dto;

import com.example.cinemacileback.model.Movie;

public class MovieDTO {
	
	private Long id;
	private String name;
	private String director;
	private String description;
	private String genre;
	private String actors;
	private String distributor;
	private int year;
	private int duration;
	private String imageName;
	
	public MovieDTO() {
		
	}
	
	public MovieDTO(Movie movie) {
		this.id = movie.id;
		this.name = movie.getName();
		this.director = movie.getDirector();
		this.description = movie.getDescription();
		this.genre = movie.getGenre();
		this.actors = movie.getActors();
		this.distributor = movie.getDistributor();
		this.year = movie.getYear();
		this.duration = movie.getDuration();
		this.imageName = movie.getImageName();
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
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

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getActors() {
		return actors;
	}

	public void setActors(String actors) {
		this.actors = actors;
	}

	public String getDistributor() {
		return distributor;
	}

	public void setDistributor(String distributor) {
		this.distributor = distributor;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}
}
