import {defineStore} from "pinia";
import  periodServices  from "../services/period.services.js.js";

// const getInitialState = async ()=>{
//     try {
//         const result = await periodServices.findCurrentPeriod();
//         console.log(result);    
//         return result;
//     } catch (error) {
//         console.log(error);
//         return error;
        
//     }
// };



export const usePeriodStore = defineStore("period",{
    state:()=>({
       currentPeriod: "",
       isLoading: false
    }),
    getters:{
        getState(state){
            if (!this.currentperiod) {
                return "No hay Períodos Asignados Actualmente"
            }
            else{

                return state.currentPeriod
            }
        }
    },
    actions:{
        async updateCurrent(){
            this.isLoading = true;
            try {
               
                const result = await periodServices.findCurrentPeriod();
                console.log(result);

                this.currentPeriod = result.data;
                
            } catch (error) {
                console.log(error);
                return error;
            }
        },

    },
    
})


