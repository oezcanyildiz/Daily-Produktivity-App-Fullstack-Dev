package com.ozcnyldz.todo_app.controller;

import com.ozcnyldz.todo_app.dto.ChangeEmailRequestDTO;
import com.ozcnyldz.todo_app.dto.ChangePasswordRequestDTO;


public interface IUserController {
	
	public void deleteMe();
	
	public void changeUserPassword( ChangePasswordRequestDTO dto);
	
	public void updateUserEmail(ChangeEmailRequestDTO dto);

}
