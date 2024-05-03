import { defineStore } from "pinia";
import AuthService from "../services/auth.services.js";
import { ref } from "vue";
const data = localStorage.getItem("user")
const user = JSON.parse(data)

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const useAuthStore = defineStore("auth", {
  state: () => {
    return initialState;
  },
 
  actions: {
    async login(user) {
      try {
        const resu = await AuthService.login(user);
         
        this.status ={
          user: resu.username,
          role:resu.roles,
          accessToken: resu.accessToken,
        };
        
        return new Promise((resolve) => resolve(resu));
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    },

    logout() {
      this.status.loggedIn = false;
      this.user = null;
      AuthService.logout();
    },


  },
 
  
}
);
