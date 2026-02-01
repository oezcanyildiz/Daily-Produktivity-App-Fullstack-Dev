package com.ozcnyldz.todo_app.services;

import com.ozcnyldz.todo_app.dto.LoginRequestDTO;
import com.ozcnyldz.todo_app.dto.LoginResponseDTO;
import com.ozcnyldz.todo_app.dto.UserRequestDTO;
import com.ozcnyldz.todo_app.dto.UserResponseDTO;
import com.ozcnyldz.todo_app.entities.User;

public interface IUserServices {

    UserResponseDTO saveUser(UserRequestDTO dto);

    public LoginResponseDTO loginUser(LoginRequestDTO dto);

    void deleteCurrentUser();

    User changeUserPassword(
            Long id,
            String oldPassword,
            String newPassword,
            String newPasswordConfirm
    );

    User updateUserEmail(Long id, String oldUserEmail, String newUserEmail);

    User changePasswordForCurrentUser(
            String oldPassword,
            String newPassword,
            String newPasswordConfirm
    );

    User updateEmailForCurrentUser(String oldEmail, String newEmail);
}
