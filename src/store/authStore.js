import { defineStore } from "pinia"
import  AuthService  from "../services/auth.services.js"


const user = JSON.parse(localStorage.getItem('user'));

const initialState = user 
                    ? { status: { loggedIn: true }, user } 
                    : { status: { loggedIn: false }, user: null };


export const useAuthStore = defineStore('auth' , {
  
  state: () => initialState 
        ,
        actions: {
            login(user) {
              
                return AuthService.login(user).then(
                  user => {
                    
                    this.state.status.loggedIn = true;
                    this.state.user = user;
                    return Promise.resolve(user);
                  },
                  error => {
                    this.state.status.loggedIn = false;
                    this.state.user = null;
                    return Promise.reject(error);
                  }
                );
              },
              logout() {
                  this.state.status.loggedIn = false;
                  this.state.user = null;
                AuthService.logout();
              },
              register(user) {
                return AuthService.register(user).then(
                  response => {
                    this.state.status.loggedIn = false;
                    return Promise.resolve(response.data);
                  },
                  error => {
                    this.state.status.loggedIn = false;
                    return Promise.reject(error);
                  }
                );
              }
            }
        
}

);

