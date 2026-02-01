package com.ozcnyldz.todo_app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDTO {

	    private String token;
	    private String tokenType = "Bearer";
	    private String userEmail;
}
