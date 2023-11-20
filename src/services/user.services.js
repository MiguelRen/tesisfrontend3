import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:4500/api/users/';
class UserService {
  getPublicContent () {
    try {
      return  axios.get(API_URL );
      
    } catch (error) {
      console.log(error);
    }
  } 
  
  getUserBoard() {
    try {
      console.log("what is this am feeling");
      const resp = axios.get(API_URL + 'user', { headers: authHeader() });
      console.log(resp);
      return resp;
      
    } catch (error) {
      console.log("im not here");
      console.log(error);
    }
  }
 
  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}
export default new UserService();
