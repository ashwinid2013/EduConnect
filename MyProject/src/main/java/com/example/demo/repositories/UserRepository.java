package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>
{
	@Query("select u from User u where u.rid.rid = 2")
	public List<User> getTeachers();
	
	@Query("select u from User u where u.rid.rid = 3")
	public List<User> getParents();
}
