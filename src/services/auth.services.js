import axios from 'axios';

const API_URL = 'http://localhost:4500/api/auth/';

class AuthService {
    async login(user) {
  
      
     const response = await axios.post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      });
      if (response.data.accessToken) {
        console.log(response.data.accessToken);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      console.log("blablablabl");
      return response.data;

  }




  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();