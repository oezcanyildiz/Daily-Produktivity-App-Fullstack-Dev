package com.ozcnyldz.todo_app.services;

import com.ozcnyldz.todo_app.entities.User;

public interface IUserServices {
	
	public User saveUser(User user);
	
	public User loginUser(String userEmail, String userPassword);
	
	public void deactivateUser(Long ID);
	
	public User changeUserPassword(Long id, String oldPassword, String newPassword, String newPasswordConfirm);
	
	public User updateUserEmail(Long ID,String oldUserEmail,String newUserEmail);
	

}
