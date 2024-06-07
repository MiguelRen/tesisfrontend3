import { defineStore } from "pinia";
import {ref} from "vue"
import AuthService from "../services/auth.services";

export const useSessionStore = defineStore (
    "session",
    ()=>{
  

            const user = ref("");
            const roles = ref({});
            const  accessToken = ref("");
            
            const login = async (currentUser) =>{
                const serviceResponse = await AuthService.login(currentUser);
                console.log(serviceResponse);
                user.value = serviceResponse.username;
                roles.value = serviceResponse.roles;
                accessToken.value = serviceResponse.accessToken;
                return serviceResponse.data;
            }
        
            return{
                user,
                roles,
                accessToken,
                login,
        
            }
        }
    
);