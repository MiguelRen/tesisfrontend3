import axios from 'axios';
import authHeader from './auth-header';

// <<<<<<< HEAD
// const API_URL = 'http://localhost:4500/api/users/';
const API_URL = "https://despliegue-backend-tesis.onrender.com/api/user/";
// https://despliegue-backend-tesis.onrender.com
// =======

// const API_URL = 'http://localhost:4500/api/user/';
// >>>>>>> main
class UserService {
  async register(user) {
    try {
      
    
        const apiResponse = await axios.post(API_URL , {
          username: user.username,
          email: user.email,
          password: user.password,
        }); 
        if(apiResponse.status == 200){
          return "Usuario Registrado Correctamente";
        }else if(apiResponse.status == 409){
          return "Usuario NO registrado";
        }else{
          return "Problema no registrado código "+ apiResponse.status;
        }
      
       
      
      
    } catch (error) {
      console.log("register services ERROR \n", error.message); 
    }
  }


  async getUser(currentUser){
    try {

      const apiResponse = await axios.post( API_URL+ "user",
      {
        username:currentUser,
      }
      );
     
      return apiResponse.data;
    } catch (error) {
      console.log("getUser services ERROR\n", error.message);
    }
  }

  async updateUsername(lastUsername,newUsername){
    try {
      const apiResponse = await axios.patch( API_URL+ "userupdate",{
        lastUserName : lastUsername,
        newUserName : newUsername,

      });
     if (apiResponse.status === 200 ) {
        return "Actualizado Correctamente"
     } else {
      console.log(apiResponse.status);
        return "Problemas para actualizar"    
     }
     
    } catch (error) {
      console.log("updateUser services ERROR\n", error.message);
    }
  }
}
export default new UserService();
