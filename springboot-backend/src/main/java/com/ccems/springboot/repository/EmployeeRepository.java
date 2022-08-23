package com.ccems.springboot.repository;

import com.ccems.springboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> { //extends jpa repository and takes in two parameters, type of the jpa entity and type of the primary key
    //all crud methods to interact with the database go here
}
