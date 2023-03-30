import { Alert } from "bootstrap";
import { defineStore } from "pinia";
import AuthService from "../services/auth.services.js";

const user = localStorage.getItem("user");
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const useAuthStore = defineStore("auth", {
  state: () => initialState,
  actions: {
    async login(user) {
      try {
        const resu = await AuthService.login(user);
        
          return new Promise(resolve => resolve(resu));
        
      } catch (error) {
        console.log(error.message);
      }
      
      

      // .then((user) => {
                
              //   initialState.status.loggedIn = true;
              //   initialState.user = user;
              // return (user);
              //   })
              //   .catch((error) => {

              //     initialState.status.loggedIn = false;
              //     initialState.user = null;
              //     return Promise.reject(error);
              //   }
              // )
              // ,(error) => {
              //   (error.response &&
              //           error.response.data &&
              //           error.response.data.message) ||
              //           (error.message )||
              //           (error.toString());
              // }
              
    },
    logout() {
     
      this.status.loggedIn = false;
      this.user = null;
      AuthService.logout();
    },
    register(user) {
      return AuthService.register(user).then(
        (response) => {
          this.state.status.loggedIn = false;
          return Promise.resolve(response.data);
        },
        (error) => {
          this.state.status.loggedIn = false;
          return Promise.reject(error);
        }
      );
    },
  },
});
