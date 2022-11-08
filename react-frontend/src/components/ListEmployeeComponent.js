import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]) // setting the initial state of employees as an empty array

    useEffect(() => {

        getAllEmployees();

    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    
    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            getAllEmployees();

        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='container'>
            <h2 className = "text-center mt-2">CodeClan Employees</h2>
            <Link to = "/add-employee" className='btn btn-primary mb-2'>Add Employee</Link> {/* creates add employee button */}
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Employee Id</th>
                        <th> Employee First Name </th>
                        <th> Employee Last Name </th>
                        <th> Employee Email</th>
                        <th> Employee Role </th>
                        <th> Employee Department </th>
                        <th> Employee Location </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map( //iterates over our array of employees
                            employee =>
                            <tr key={employee.id}>{/* creates unique key for each employee */}
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.role}</td>
                                <td>{employee.department}</td>
                                <td>{employee.location}</td>
                                <td>
                                    <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}> Edit </Link>
                                    <button className='btn btn-danger mt-1' onClick={() => deleteEmployee(employee.id)}> Delete </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent