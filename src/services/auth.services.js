import axios from "axios";

const API_URL = "http://localhost:4500/api/auth/";


class AuthService {
 async login(user) {
   try {
  
    const result = await axios.post(API_URL + "signin", user); 
    const data = result.data;
   
     if (data.accessToken) {
       localStorage.setItem("user", JSON.stringify(data));
       console.log(JSON.stringify(data));    
      }
      
      return data;
      // return new Promise(resolve => resolve(data));
    
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  logout() {
    localStorage.removeItem("user");
    // localStorage.removeItem("role");
  }


}

export default new AuthService();
