package com.example.cinemacileback.dto;

import com.example.cinemacileback.model.Role;
import com.example.cinemacileback.model.User;

public class UserDTO {

	private Long id;
	private String nameSurname;
	private String email;
	private String username;
	private String password;
	private Role role;
	private boolean isDeleted;
	
	public UserDTO() {
		
	}
	public UserDTO(User user) {
		this.id = user.getId();
		this.nameSurname = user.getNameSurname();
		this.email = user.getEmail();
		this.username = user.getUsername();
		this.password = user.getPassword();
		this.role = user.getRole();
		this.isDeleted = user.isDeleted();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNameSurname() {
		return nameSurname;
	}
	public void setNameSurname(String nameSurname) {
		this.nameSurname = nameSurname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public boolean isDeleted() {
		return isDeleted;
	}
	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
	
}
