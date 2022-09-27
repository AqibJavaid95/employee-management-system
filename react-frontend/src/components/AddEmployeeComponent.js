import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('') //setFirstName is a function which updates the state value of the variable firstName
    const [lastName, setLastName] = useState('')
    const [role, setRole] = useState('')
    const [location, setLocation] = useState('')
    const navigate = useNavigate();
    
    const saveEmployee = (e) => {
        e.preventDefault(); //prevents page from refreshing whenever we submit the form

        const employee = {firstName, lastName, role, location}

        EmployeeService.createEmployee(employee).then((response) => {

            console.log(response.data)

            navigate.push('/employees');

        }).catch(error => {
            console.log(error)
        })

    }

    return (
        <div>
            <br/>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center mt-3'> Add Employee </h2>
                        <div className='card-body clearfix'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> First Name: </label>
                                    <input
                                        type = 'text'
                                        placeholder='Enter first name'
                                        name='firstName'
                                        className='form-control'
                                        value={firstName} //getting the value using state
                                        onChange={(e) => setFirstName(e.target.value)} //calls setFirstName function to update state value
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> Last Name: </label>
                                    <input
                                        type = 'text'
                                        placeholder='Enter last name'
                                        name='lastName'
                                        className='form-control'
                                        value={lastName} //getting the value using state
                                        onChange={(e) => setLastName(e.target.value)} //calls setLastName function to update state value
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> Role: </label>
                                    <input
                                        type = 'text'
                                        placeholder='Enter role'
                                        name='role'
                                        className='form-control'
                                        value={role} //getting the value using state
                                        onChange={(e) => setRole(e.target.value)} //calls setRole function to update state value
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> Location: </label>
                                    <input
                                        type = 'text'
                                        placeholder='Enter location'
                                        name='location'
                                        className='form-control'
                                        value={location} //getting the value using state
                                        onChange={(e) => setLocation(e.target.value)} //calls setLocation function to update state value
                                    >
                                    </input>
                                </div>

                                <button className='btn btn-success float-end' onClick={(e) => saveEmployee(e)}>Submit</button>
                                <Link to="/employees" className="btn btn-danger float-end"> Cancel </Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent 