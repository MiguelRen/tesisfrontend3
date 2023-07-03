import {defineStore} from "pinia";
import quarterService from "../services/quarter.services.js"
import moment from "moment-timezone";



export const useQuarterStore =  defineStore ("quarter",{
    
    
    state:()=>({
        currentQuarter : "" 
    }),
    getters:{
        getQuarter(state){
            return state.currentQuarter;
        },
        
    },
    actions :{
        async updQuarter(state){
            try {
                const result = await quarterService.findCurrentQuarter();
                if (!result){
                    console.log(typeof(result));
                    return this.currentQuarter = "No Hay periodos Asignados Actualmente";
                }else{
                    return this.currentQuarter =[
                        moment(result.quaQuarterIni).tz('America/New_York').format('YYYY-MM-DD') ,
                        moment(result.quaQuarterEnd).tz('America/New_York').format('YYYY-MM-DD'),
                        result.perYearIni,
                        result.perYearEnd
                    ];

                }
            } catch (error) {
                console.log(error);
                return error;
                
            }
        }
    }


}
);