package com.ccems.springboot;

import com.ccems.springboot.model.Employee;
import com.ccems.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner { //provides run method which executes when the springboot application starts for the first time

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
//		Employee employee = new Employee(); // creates an object of employee
//		employee.setFirstName("Aqib");
//		employee.setLastName("Javaid");
//		employee.setRole("Technical Assistant");
//		employee.setLocation("Glasgow");
//		employeeRepository.save(employee); //saves new employee object to the database
	}
}
