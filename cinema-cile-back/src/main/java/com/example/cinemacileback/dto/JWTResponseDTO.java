package com.example.cinemacileback.dto;

public class JWTResponseDTO {
	
	public String token;
	
	public JWTResponseDTO() {
		
	}

	public JWTResponseDTO(String token) {
		super();
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	

}
