import axios from "axios";


// const API_URL = "http://localhost:4500/api/auth/";
const API_URL = "https://despliegue-backend-tesis.onrender.com";

class AuthService {
 async login(user) {
   try {
    const result = await axios.post(API_URL + "signin", user);
     // console.log( result);
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

  async register(user) {
    try {
        
        const response = await axios.post(API_URL + "signup", {
          username: user.username,
          email: user.email,
          password: user.password,
        }); 
        // console.log(response);
       return new Promise (resolve=>resolve({message: "Usuario Registrado Correctamente"}));
        
      
      
    } catch (error) {
      
       
      
      return Promise.reject(error);
      
    }
  }
}

export default new AuthService();
