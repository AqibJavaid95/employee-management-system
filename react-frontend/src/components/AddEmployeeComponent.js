import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('') //setFirstName is a function which updates the state value of the variable firstName
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [department, setDepartment] = useState('')
    const [location, setLocation] = useState('')
    const navigate = useNavigate(); //returns user to list of employees page
    const {id} = useParams(); //provides object which contains key/value pairs

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault(); //prevents page from refreshing whenever we submit the form

        const employee = {firstName, lastName, email, role, department, location}

        if(id){ //checks if id contains any value and if it does then calls updateEmployee function, if not then calls createEmployee function
            EmployeeService.updateEmployee(id, employee).then((response) =>{
            
            navigate('/employees'); //returns user to list of employees page

            }).catch(error =>{ //exception handling
                console.log(error);
            })

        }else{
            EmployeeService.createEmployee(employee).then((response) => {

                console.log(response.data)
    
                navigate('/employees'); //returns user to list of employees page 
    
            }).catch(error => { //exception handling
                console.log(error)
            })
        }

    }

    useEffect(() => {

        if(id){
            EmployeeService.getEmployeeById(id).then((response) => { //makes a rest api call to retrieve the employee object
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
                setRole(response.data.role)
                setDepartment(response.data.department)
                setLocation(response.data.location)
            }).catch(error => {
                console.log(error) 
            })
        }
    }, [id])

    const title = () => {

        if(id){ //checks if id contains any values
            return <h2 className='text-center mt-2'>Edit Employee</h2>
        }else{
            return <h2 className='text-center mt-2'>Add Employee</h2>
        }
    }

    return (
        <div>
            <br/>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            title() //dynamically updates header to show edit employee or add employee based on whether id has a value
                        }
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
                                    <label className='form-label'> Email: </label>
                                    <input
                                        type = 'email'
                                        placeholder='Enter email address'
                                        name='email'
                                        className='form-control'
                                        value={email} //getting the value using state
                                        onChange={(e) => setEmail(e.target.value)} //calls setEmail function to update state value
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
                                    <label className='form-label'> Department: </label>
                                    <input
                                        type = 'text'
                                        placeholder='Choose department'
                                        name='department'
                                        className='form-control'
                                        value={department} //getting the value using state
                                        onChange={(e) => setDepartment(e.target.value)} //calls setDepartment function to update state value
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> Location: </label>
                                    <input
                                        type = 'text'
                                        placeholder='Choose location'
                                        name='location'
                                        className='form-control'
                                        value={location} //getting the value using state
                                        onChange={(e) => setLocation(e.target.value)} //calls setLocation function to update state value
                                    >
                                    </input>
                                </div>

                                <button className='btn btn-success float-end ms-1' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                                <Link to="/employees" className="btn btn-danger float-end"> Cancel </Link> {/* cancel button which returns user to list of employees page */}

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent 