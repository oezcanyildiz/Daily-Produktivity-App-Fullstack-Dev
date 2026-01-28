package com.ozcnyldz.todo_app.entities;


import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="user_todo")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)

public class Todo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id; 
	
	@Column(nullable=false)
	private String todo;
	
	@Column(nullable=false)
	private boolean completed;
	
	@Column(nullable = false)
	private LocalDate datum;
	
	@Column(nullable= true)
	private LocalTime clock; 
	
	@ManyToOne(optional = false) 
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User user;

}
