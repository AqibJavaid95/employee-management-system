import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]) // setting the initial state of employees as an empty array

    useEffect(() => { 

        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    
    }, [])
    

    return (
        <div className='container'>
            <h2 className = "text-center mt-2">CodeClan Employees</h2>
            <Link to = "/add-employee" className='btn btn-primary mb-2'>Add Employee</Link> {/* creates add employee button */}
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Employee Id</th>
                    <th> Employee First Name </th>
                    <th> Employee Last Name </th>
                    <th> Employee Role </th>
                    <th> Employee Location </th>
                </thead>
                <tbody>
                    {
                        employees.map( //iterates over our array of employees
                            employee =>
                            <tr key = {employee.id}> {/* creates unique key for each employee */}
                                <td> {employee.id} </td>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName} </td>
                                <td> {employee.role} </td>
                                <td> {employee.location} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ListEmployeeComponent