import axios from "axios";
import authHeader from "./auth-header";
import { apiUrl } from "../api/apiUrl";

const API_URL = apiUrl + "api/employee";
// const API_URL = "https://tesisbackend3.onrender.com/api/employee/";
class employeeServices {
  async createEmployee(employeeData) {
    try {
      console.log(employeeData);
      const result = await axios.post(API_URL, employeeData);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async getEmployee() {
    
    try {
    //   console.log("fetch2");
      const result = await axios.get(API_URL,{
        headers: authHeader()});
      // console.log(result.data);
        return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default new employeeServices();
