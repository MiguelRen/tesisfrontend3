import axios from "axios";
import authHeader from "./auth-header";

// const API_URL = "http://localhost:4500/api/period/";

const API_URL = "https://tesisbackend3.onrender.com/api/period/";

class periodServices {
  async createPeriod(period) {
    try {
      // console.log(period);
      const result = await axios.post(API_URL, period, {
        headers: authHeader(),
      });
      //
     
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findCurrentPeriod() {
    try {
      const result = await axios.get(API_URL + "current"
      , {
      
        headers : authHeader(),  
      }
     
    );
      // console.log("find current",result);
      
      return Promise.resolve(result.data[0]);
      
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  // async findOnePeriod(hint) {
  //   try {
  //     const result = await axios.post(API_URL,{headers:authHeader()});
  //     return Promise.resolve(result.data);
  //   } catch (error) {}
  // }
  async findAllPeriod(){
    try{
      const result = await axios.get(API_URL, 
        {
        headers: authHeader(),
      });
      // console.log("find all",result);
      return Promise.resolve(result.data);
    }catch(error){
      console.log(error);
    }
}

}

export default new periodServices();
