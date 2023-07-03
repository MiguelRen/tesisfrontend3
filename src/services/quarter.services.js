import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4500/api/quarter/";

class quarterService {
  async createQuarter(quarter) {
    try {
        // console.log(quarter);
      const result = await axios.post(API_URL, quarter, {
        headers: authHeader(),
      });
      console.log(result);
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findCurrentQuarter() {
    try {
      const result = await axios.get(API_URL + "current");
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
