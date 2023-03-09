package com.example.cinemacileback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cinemacileback.model.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long>{

}
