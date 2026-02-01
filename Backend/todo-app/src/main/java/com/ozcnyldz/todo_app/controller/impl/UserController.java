package com.ozcnyldz.todo_app.controller.impl;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ozcnyldz.todo_app.controller.IUserController;
import com.ozcnyldz.todo_app.dto.ChangeEmailRequestDTO;
import com.ozcnyldz.todo_app.dto.ChangePasswordRequestDTO;
import com.ozcnyldz.todo_app.services.IUserServices;

@RestController
@RequestMapping(path="/useropt")
public class UserController implements IUserController{
	
	private IUserServices userServices;
	
	public UserController(IUserServices userServices) {
		this.userServices = userServices;
		}

	@DeleteMapping("/delete/me")
	public void deleteMe() {
	    userServices.deleteCurrentUser();
	}

	@Override
	@PutMapping("/password")
	public void changeUserPassword(
	        @RequestBody ChangePasswordRequestDTO dto) {

	    userServices.changePasswordForCurrentUser(
	        dto.getOldPassword(),
	        dto.getNewPassword(),
	        dto.getNewPasswordConfirm()
	    );
	}

	@Override
	@PutMapping("/email")
	public void updateUserEmail(
	        @RequestBody ChangeEmailRequestDTO dto) {

	    userServices.updateEmailForCurrentUser(
	        dto.getOldEmail(),
	        dto.getNewEmail()
	    );
	}


}
