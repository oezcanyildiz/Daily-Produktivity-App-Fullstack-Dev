package com.ozcnyldz.todo_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ozcnyldz.todo_app.entities.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
	
}
