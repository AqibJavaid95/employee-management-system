import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL) //returns data from the rest api database
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee) //employee object contains the form data which gets passed to the rest api which stores it into the database
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId); //returns an employee object using its unique ID from the database
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId, employee); //sends updated information stored in the employee object to the database using the employee id
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId); //deletes employee by id
    }
}

export default new EmployeeService();