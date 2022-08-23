package com.ccems.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees") //provides table details
public class Employee {

    @Id //makes id the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //provides primary key generation strategy using id
    private long id;

    @Column(name = "first_name") //creates column for fields
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "role")
    private String role;

    @Column(name = "location")
    private String location;
}
