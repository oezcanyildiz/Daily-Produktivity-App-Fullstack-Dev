package com.ozcnyldz.todo_app.controller.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ozcnyldz.todo_app.controller.IAuthController;
import com.ozcnyldz.todo_app.dto.LoginRequestDTO;
import com.ozcnyldz.todo_app.dto.LoginResponseDTO;
import com.ozcnyldz.todo_app.dto.UserRequestDTO;
import com.ozcnyldz.todo_app.dto.UserResponseDTO;
import com.ozcnyldz.todo_app.services.IUserServices;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController implements IAuthController {

    @Autowired
    private IUserServices userServices;

    @PostMapping("/save")
    @Override
    public UserResponseDTO saveUser(
            @Valid @RequestBody UserRequestDTO dto) {

        return userServices.saveUser(dto);
    }

    @PostMapping("/login")
    @Override
    public LoginResponseDTO  loginUser(@Valid @RequestBody LoginRequestDTO dto) {
        return userServices.loginUser(dto);
    }


}


