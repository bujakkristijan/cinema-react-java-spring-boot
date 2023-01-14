package com.example.cinemacileback.dto;



public class LoginDTO {
	
	private String token;
	//private User user;
	private String nameSurname;
	private String messageInvalidUsernameOrPassword;
	
	public LoginDTO() {
		
	}


	public LoginDTO(String token, String nameSurname, String messageInvalidUsernameOrPassword) {
		super();
		this.token = token;
//		this.user = user;
		this.nameSurname = nameSurname;
		this.messageInvalidUsernameOrPassword = messageInvalidUsernameOrPassword;
	}

	public String getNameSurname() {
		return nameSurname;
	}


	public void setNameSurname(String nameSurname) {
		this.nameSurname = nameSurname;
	}


	public String getMessageInvalidUsernameOrPassword() {
		return messageInvalidUsernameOrPassword;
	}


	public void setMessageInvalidUsernameOrPassword(String messageInvalidUsernameOrPassword) {
		this.messageInvalidUsernameOrPassword = messageInvalidUsernameOrPassword;
	}


	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	


}
