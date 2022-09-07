import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL) //returns data from the rest api
    }
}

export default new EmployeeService();