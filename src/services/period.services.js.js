import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4500/api/period/";

class periodServices {
  async createPeriod(period) {
    try {
      console.log(period);
      const result = await axios.post(API_URL, period, {
        headers: authHeader(),
      });
      //
      console.log(result);
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findCurrentPeriod() {
    try {

      const result = await axios.get(API_URL + "current");
      console.log(result);
      
      return result;
      
    } catch (error) {
      
      return error;
    }
  }
  async findOnePeriod(hint) {
    try {
      const result = await axios.post();
      return result;
    } catch (error) {}
  }
}


export default new periodServices();
