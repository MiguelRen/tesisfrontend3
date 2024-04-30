import axios from "axios";

const API_URL = "http://localhost:4500/api/auth/";


class AuthService {
 async login(user) {
   try {
  
    const result = await axios.post(API_URL + "signin", user);
     
     const data = result.data;
    //  console.log(data);
   
    //  console.log(data);
     if (data.accessToken) {
       localStorage.setItem("user", JSON.stringify(data));
      //  console.log(
      //   'im in the auth services     '+
      //     localStorage.getItem("user")
      //  );
       
      }
      
      return new Promise(resolve => resolve(data));
    
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
