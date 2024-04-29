import axios from 'axios';
import authHeader from './auth-header';


const API_URL = 'http://localhost:4500/api/user/';
class UserService {
  async register(user) {
    try {
      
    
        const response = await axios.post(API_URL , {
          username: user.username,
          email: user.email,
          password: user.password,
        }); 
        if(response.status == 200){
          return "Usuario Registrado Correctamente";
        }else if(response.status == 409){
          return "Usuario NO registrado";
        }else{
          return "Problema no registrado código "+ response.status;
        }
      
       
      
      
    } catch (error) {
      console.log("register services ERROR \n", error.message); 
    }
  }


  async getUser(currentUser){
    try {

      
      const apiAnswer = await axios.get( API_URL ,currentUser, {
        headers: authHeader()
        
      });
      console.log(apiAnswer);

    } catch (error) {
      console.log("getUser services ERROR\n", error.message);
    }
  }
}
export default new UserService();
