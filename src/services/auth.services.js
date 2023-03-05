import axios from 'axios';

const API_URL = 'http://localhost:4500/api/auth/';

class AuthService {
    login(user) {
  
      
      const response = new Promise((resolve, reject) => {
        axios.post(API_URL + 'signin', {
          username: user.username,
          password: user.password
        
        }
        )
        resolve (response);
      })
      response.then(data => {console.log(data);})
      
    
      


    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
  
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