import {defineStore} from "pinia";
import  periodServices  from "../services/period.services.js";

const getInitialState = async ()=>{
    try {
        const result = await periodServices.findCurrentPeriod();
        // console.log(result);    
        return result;
    } catch (error) {
        console.log(error);
        return error;
        
    }
};

// getInitialState();

export const usePeriodStore = defineStore("period",{
    state:()=>({
        periodid : "",
       yearStart: "",
       yearEnd : "",
       
       
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
            // this.isLoading = true;
            try {
               
                const result = await periodServices.findCurrentPeriod();

                // console.log(result);
                this.periodid = result.perperiodid;
                this.yearStart = result.peryearstart;
                this.yearEnd = result.peryearend;
                
            } catch (error) {
                console.log(error);
                return error;
            }
        },

    },
    
}
)


