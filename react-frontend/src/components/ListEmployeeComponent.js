import React, { useState } from 'react'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]) // setting the initial state of employees as an empty array

    return (
        <div className='container'>
            <h2 className = "text-center">List Employees</h2> 
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