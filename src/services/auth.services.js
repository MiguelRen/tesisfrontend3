import axios from "axios";
import { Alert } from "bootstrap";
import { object } from "yup";

const API_URL = "http://localhost:4500/api/auth/";

class AuthService {
 async login(user) {
   try {
    const result = await axios.post(API_URL + "signin", user);
     // console.log( result);
     const data = result.data;
   
     
     if (data.accessToken) {
       localStorage.setItem("user", JSON.stringify(data.username));
      }
      
      return new Promise(resolve => resolve(data));
    
 
    } catch (error) {
      return Promise.reject(error);
    }
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(user) {
    try {
        
        const response = await axios.post(API_URL + "signup", {
          username: user.username,
          email: user.email,
          password: user.password,
        }); 
       return new Promise (resolve=>resolve({message: "Usuario Registrado Correctamente"}));
        
      
      
    } catch (error) {
      
       
      
      return Promise.reject(error);
      
    }
  }
}

export default new AuthService();
