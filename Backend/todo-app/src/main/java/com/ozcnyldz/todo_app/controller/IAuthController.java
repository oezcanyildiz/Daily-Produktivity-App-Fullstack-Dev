package com.ozcnyldz.todo_app.controller;

import com.ozcnyldz.todo_app.dto.LoginRequestDTO;
import com.ozcnyldz.todo_app.dto.LoginResponseDTO;
import com.ozcnyldz.todo_app.dto.UserRequestDTO;
import com.ozcnyldz.todo_app.dto.UserResponseDTO;



public interface IAuthController {
	
	public UserResponseDTO saveUser(UserRequestDTO dto);
	
	public LoginResponseDTO loginUser(LoginRequestDTO dto);

}
