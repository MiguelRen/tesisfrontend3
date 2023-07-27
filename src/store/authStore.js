import { defineStore } from "pinia";
import AuthService from "../services/auth.services.js";

const data = localStorage.getItem("user");
const user = JSON.parse(data);

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };
console.log(initialState);
export const useAuthStore = defineStore("auth", {
  state: () => {
    return initialState;
  },
  // getters: {
  //   getRole(state) {
  //     console.log(state);
  //     const userRole = state.user;

  //     if (state.user) {
  //       for (let i = userRole.length - 1; i >= 0; i--) {
  //         if (userRole[i] === "ADMINISTRADOR") {
  //           return userRole[i];
  //         }
  //       }
  //       for (let i = userRole.length - 1; i >= 0; i--) {
  //         if (userRole[i] === "MODERADOR") {
  //           return userRole[i];
  //         } else {
  //           return userRole[i];
  //         }
  //       }
  //     }
  //   },
  // },
  actions: {
    async login(user) {
      try {
        const resu = await AuthService.login(user);
        //  console.log(resu);

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
        // console.log(result);
        return Promise.resolve(result);
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
});
