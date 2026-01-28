package com.ozcnyldz.todo_app.entities;
import jakarta.persistence.*;
import lombok.Data;


	
	@Entity
	@Table(name = "test_connection")
	@Data
	public class TestEntity {
	    
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    
	    private String message;
	}