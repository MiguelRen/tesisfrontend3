import  axios  from "axios";

const API_URL = "http://localhost:4500/api/employee";

class employeeServices {
    async createEmployee (employeeData){
        try {
            console.log(employeeData);
            const result = await axios.post(API_URL,employeeData);
            console.log(result);
            return result;
        } catch (error) {
            console.table(error);
            return error;
        }
    }
}

export default new employeeServices();