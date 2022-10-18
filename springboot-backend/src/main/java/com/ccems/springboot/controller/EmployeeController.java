package com.ccems.springboot.controller;

import com.ccems.springboot.exception.ResourceNotFoundException;
import com.ccems.springboot.model.Employee;
import com.ccems.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees") //defining a common base url for our rest apis
public class EmployeeController { //handles http requests, and will define rest api methods within this class

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees(){ //list of type employee with method name getAllEmployees, don't need to pass in any arguments
        return employeeRepository.findAll(); //returns list of objects i.e employees to the client
    }

    //builds the create employee REST API
    @PostMapping //handles HTTP POST request
    public Employee createEmployee(@RequestBody Employee employee){ //requestbody annotation converts JSON into a java object
        return employeeRepository.save(employee); //save method returns employee object
    }

    //builds get employee by id REST API
    @GetMapping("{id}") //gets employee by id
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){ //ResponseEntity class constructs response of the REST API, also created getEmployeeById method
        Employee employee = employeeRepository.findById(id) //using employee repository to get the employee object from the database
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id: " + id)); //exception handling
        return ResponseEntity.ok(employee); //ok method provides status code 200
    }

    //builds update employee REST API
    @PutMapping("{id}") //updates employee object
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employeeDetails){ //client calls updateEmployee REST API which sends updated employee information in the request which is bound to the employeeDetails object
        Employee updateEmployee = employeeRepository.findById(id) //using employee repository to get the employee object from the database
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id: " + id)); //exception handling

        //retrieves new info from employeeDetails and updates updateEmployee object with new info
        updateEmployee.setFirstName(employeeDetails.getFirstName());
        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setRole(employeeDetails.getRole());
        updateEmployee.setLocation(employeeDetails.getLocation());

        employeeRepository.save(updateEmployee); //saves the updated updateEmployee object to the database

        return ResponseEntity.ok(updateEmployee); //returns updated information to the client
    }

    //builds delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Employee employee = employeeRepository.findById(id) //finds employee by id
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id: " + id)); //exception handling if employee does not exist with that id

        employeeRepository.delete(employee); //passes employee object to the delete method to delete employee from the database

        return new ResponseEntity<>(HttpStatus.NO_CONTENT); //passing new content message since we're not returning anything to the client

    }
}
