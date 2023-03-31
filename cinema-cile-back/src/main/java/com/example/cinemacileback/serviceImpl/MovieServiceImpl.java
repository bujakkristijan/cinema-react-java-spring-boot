package com.example.cinemacileback.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cinemacileback.dto.MovieDTO;
import com.example.cinemacileback.model.Movie;
import com.example.cinemacileback.repository.MovieRepository;
import com.example.cinemacileback.service.MovieService;

@Service
public class MovieServiceImpl implements MovieService{
	
	@Autowired
	MovieRepository movieRepository;
	
	@Override
	public Movie save(Movie movie) {
		return movieRepository.save(movie);
	}

	@Override
	public List<MovieDTO> findAll() {
		List<Movie> allMovieList = movieRepository.findAll();
		List<MovieDTO> allMovieDTOList = new ArrayList<MovieDTO>();
		MovieDTO movieDTO = new MovieDTO();
		
		for (Movie movie : allMovieList) {
			//MealDTO mealDTO = MealMapper.INSTANCE.entityToDTO(meal);
			movieDTO = new MovieDTO(movie);
				allMovieDTOList.add(movieDTO);
		}
		return allMovieDTOList;
	}
	
	@Override
	public String isValidInput(Movie movie) {
		if (movie.getYear() < 1 
				|| movie.getDuration()<0 || movie.getName() == null || movie.getName().trim().isEmpty()
				|| movie.getActors() == null || movie.getActors().trim().isEmpty() 
				|| movie.getDescription() == null || movie.getDescription().trim().isEmpty()
				|| movie.getGenre() == null || movie.getGenre().trim().isEmpty()
				|| movie.getDirector() == null || movie.getDirector().trim().isEmpty()
				|| movie.getDistributor() == null || movie.getDistributor().trim().isEmpty()) {
			return "invalid";
		}
		return "valid";
	}

	
	@Override
	public String editMovie(Movie movie) {
		Movie m = movieRepository.findById(movie.getId()).get();
		if (isValidInput(movie).equals("invalid")) {
			return "invalid";
		}
		m.setActors(movie.getActors());
		m.setDescription(movie.getDescription());
		m.setName(movie.getName());
		m.setDirector(movie.getDirector());
		m.setDistributor(movie.getDistributor());
		m.setDuration(movie.getDuration());
		m.setYear(movie.getYear());
		m.setGenre(movie.getGenre());
		
		movieRepository.save(m);
		return "success";
	}
	
	@Override
	public Movie delete(Movie movie) {
		if (movie == null)
			throw new IllegalArgumentException("Attempt to delete non-existing movie.");
		movieRepository.delete(movie);
		return movie;
	}
	
	@Override
	public Movie findOne(Long id) {
		Movie movie = movieRepository.findById(id).get();
		return movie;
	}
}
