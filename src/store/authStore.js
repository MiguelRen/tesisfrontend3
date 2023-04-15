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

    
    async register(user) {
      try {
        const result = await AuthService.register(user);
        console.log(result);
        return Promise.resolve(result);
      } catch (error) {
      
        return Promise.reject(error);
      }
    },
  },
});
