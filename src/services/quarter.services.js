import axios from "axios";
import authHeader from "./auth-header";
import { apiUrl } from "../api/apiUrl";

const API_URL = apiUrl + "api/quarter/";

// const API_URL = "https://tesisbackend3.onrender.com/api/quarter/";

class quarterService {
  async createQuarter(quarter) {
    try {
        // console.log(quarter);
      const result = await axios.post(API_URL, quarter, {
        headers: authHeader(),
      });
      // console.log(result);
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findCurrentQuarter() {
    try {
      const result = await axios.get(API_URL + "current");
      // console.log(result);
      return result.data;
      
    } catch (error) {
      console.log(error);
      return error;
    }
  }
//   async findOnePeriod(hint) {
//     try {
//       const result = await axios.post();
//       return result;
//     } catch (error) {}
//   }
}


export default new quarterService();
