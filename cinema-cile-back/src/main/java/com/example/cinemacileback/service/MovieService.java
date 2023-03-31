package com.example.cinemacileback.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.cinemacileback.dto.MovieDTO;
import com.example.cinemacileback.model.Movie;

@Service
public interface MovieService {
	
	String isValidInput(Movie movie);
	List<MovieDTO> findAll();
	Movie save(Movie movie);
	String editMovie(Movie movie);
	Movie delete(Movie movie);
    Movie findOne(Long id);
//	

}
