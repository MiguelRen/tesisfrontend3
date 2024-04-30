import axios from 'axios';
import authHeader from './auth-header';


const API_URL = 'http://localhost:4500/api/user/';
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

      console.log(currentUser);
      const apiResponse = await axios.post( API_URL+ "user",
      {
        username:currentUser,
      }
      );
      console.log("inside getuser");
      console.log(apiResponse); 
      return apiResponse.data;
    } catch (error) {
      console.log("getUser services ERROR\n", error.message);
    }
  }
}
export default new UserService();
