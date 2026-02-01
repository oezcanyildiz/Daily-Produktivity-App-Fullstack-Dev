package com.ozcnyldz.todo_app.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class TodoResponseDTO {
	
    private Long id;
    private String title;
    private String description;
    private boolean done;
    private LocalTime dueTime;
    private LocalDate date;
}
