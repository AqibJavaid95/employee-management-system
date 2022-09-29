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
}

export default new EmployeeService();