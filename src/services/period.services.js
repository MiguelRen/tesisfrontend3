import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4500/api/Period/";

class academicPeriods {
  async createPeriod(period) {
    try {
      const result = await axios.post(API_URL, period, {
        headers: authHeader(),
      });
      //
      console.log(result.data);
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findPeriod() {
    try {
      const result = await axios.get(API_URL);
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
export default new academicPeriods();
