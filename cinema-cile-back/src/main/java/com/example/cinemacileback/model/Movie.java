package com.example.cinemacileback.model;




import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
public class Movie {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;
	private String name;
	private String director;
	private String description;
	private String genre;
	private String actors;
	private String distributor;
	private int year;
	private int duration;
	
	@JsonIgnore
	@OneToMany(mappedBy = "movie", fetch = FetchType.LAZY, cascade=CascadeType.ALL)
	private List<Projection> projections = new ArrayList<Projection>();
	@Lob
	//@Column(columnDefinition = "MEDIUMBLOB")
	private String image;
	
	public Movie() {
		
	}

	public Movie(Long id, String name, String director, String description, String genre, String actors,
			String distributor, int year, int duration, List<Projection> projections, String image) {
		super();
		this.id = id;
		this.name = name;
		this.director = director;
		this.description = description;
		this.genre = genre;
		this.actors = actors;
		this.distributor = distributor;
		this.year = year;
		this.duration = duration;
		this.projections = projections;
		this.image = image;
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

	public List<Projection> getProjections() {
		return projections;
	}

	public void setProjections(List<Projection> projections) {
		this.projections = projections;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}


	
}
