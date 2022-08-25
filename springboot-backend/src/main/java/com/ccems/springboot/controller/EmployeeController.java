package com.ccems.springboot.controller;

import com.ccems.springboot.model.Employee;
import com.ccems.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employees") //defining a common base url for our rest apis
public class EmployeeController { //handles http requests, and will define rest api methods within this class

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees(){ //list of type employee with method name getAllEmployees, don't need to pass in any arguments
        return employeeRepository.findAll(); //returns list of objects i.e employees to the client
    }
}
