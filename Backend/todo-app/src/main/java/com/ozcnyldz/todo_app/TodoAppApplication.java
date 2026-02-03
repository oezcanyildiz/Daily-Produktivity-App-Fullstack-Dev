package com.ozcnyldz.todo_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoAppApplication {

	public static void main(String[] args) {
		System.out.println("Starting TodoApp... Checking Env: " + System.getenv("SPRING_DATASOURCE_URL"));
		SpringApplication.run(TodoAppApplication.class, args);
	}

}
