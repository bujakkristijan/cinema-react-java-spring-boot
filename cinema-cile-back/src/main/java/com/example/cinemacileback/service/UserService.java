package com.example.cinemacileback.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.cinemacileback.dto.LoginDTO;
import com.example.cinemacileback.dto.UserDTO;
import com.example.cinemacileback.model.Login;
import com.example.cinemacileback.model.User;


@Service
public interface UserService {
	
	List<UserDTO> findAllUsers();
	
	User save(User user);
	User findOne(Long id);
	User findByUsername(String username);
	User delete(User user);
	User getCurrentUser();
	String validateUser(User user);
//	String validateUserUpdate(User user);
//	String updateUser(User u);
	LoginDTO generateToken(Login login); 
	String isValidLogout();
	String deactivateUser(Long id);
	
	public void setCurrentUser(User user);

}
