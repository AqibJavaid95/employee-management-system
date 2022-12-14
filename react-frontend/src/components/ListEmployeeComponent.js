import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]) // setting the initial state of employees as an empty array
    const [filteredEmployees, setFilteredEmployees] = useState([])
    const [department, setDepartment] = useState('select-department')
    const [location, setLocation] = useState('select-location')
    const [search, setSearch] = useState('') // sets initial state of search bar as empty string

    useEffect(() => {

        getAllEmployees();

    }, [])

    useEffect(() =>{ // filters code
        const filtered = employees.filter(employee => {
            let hasDepartment = true;
            let hasLocation = true;
            let includesSearch = true;
            if (department !== "select-department") { // filter by dropdown
                hasDepartment = department===employee.department;
            }
            if (location !== "select-location") { //filter by dropdown
                hasLocation = location===employee.location;
            }
            if (search !== ''){ // filter by search bar
                const lowercaseSearch = search.toLowerCase();
                includesSearch = employee.firstName.toLowerCase().includes(lowercaseSearch) || employee.lastName.toLowerCase().includes(lowercaseSearch) || employee.role.toLowerCase().includes(lowercaseSearch);
            }
            return hasDepartment && hasLocation && includesSearch;
        })
        setFilteredEmployees(filtered);
    }, [search, department, location, employees])

    const getAllEmployees = () => { // returns list of employees
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            setFilteredEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    
    const deleteEmployee = (employeeId) => { // deletes employee
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            getAllEmployees();

        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='container'>
            <h2 className = "text-center mt-2">CodeClan Employees</h2>
            <div className="row d-flex align-items-end mb-2">
                <div className="col">
                    <Link to = "/add-employee" className='btn btn-primary d-inline-flex'>Add Employee</Link> {/* creates add employee button */}
                </div>
                <div className="col">
                    <input className="form-control" placeholder='Search...' value={search} onChange={(e)=> setSearch(e.target.value)} type="text"/>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <label className='col-form-label'> Department: </label>
                            <div>
                                <select className='form-control' onChange={(e)=> setDepartment(e.target.value)}> {/* creates dropdown options for choosing department */}
                                    <option name='department' value='select-department'>Select department...</option> {/* sets this as default option when adding new employee */}
                                    <option name='department' value='Instructors'>Instructors</option>
                                    <option name='department' value='Student Services'>Student Services</option>
                                    <option name='department' value='Admissions'>Admissions</option>
                                    <option name='department' value='Exec Team'>Exec Team</option>
                                    <option name='department' value='Office Staff'>Office Staff</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <label className='col-form-label'> Location: </label><br></br>
                            <div>
                                <select className='form-control' onChange={(e)=> setLocation(e.target.value)}> {/* creates dropdown options for choosing location */}
                                    <option name='location' value='select-location'>Select location...</option> {/* sets this as default option when adding new employee */}
                                    <option name='location' value='Edinburgh'>Edinburgh</option>
                                    <option name='location' value='Glasgow'>Glasgow</option>
                                    <option name='location' value='Remote'>Remote</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
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
                        filteredEmployees.map( //iterates over our array of employees
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