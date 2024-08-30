import axios from "axios"
import authHeader from "./auth-header"
import { apiUrl } from "../api/apiUrl"



// const API_URL = apiUrl + "/api/course/";
const API_URL = apiUrl + "api/course/"

class courseService{
    async createCourse(data) {
        try {
                const result = await axios.post(API_URL,data,{headers: authHeader()});
            return result;
        } catch (error) {
        return error
        }
        }
        async getCoursePeriods (){
            try{
                const result = await axios.get(API_URL
                                    );
                console.log(result);
                
                return result.data;
            }catch (error){
                console.log(error);
                
            }
        }
        async getParticularCourses(periodId){
            try{
                const result = await  axios.get(API_URL + periodId,
                    {
                        headers: authHeader()
                    });
                console.log(result);
            }
            catch(error){
                console.log(error);
                
            }
        }

    

};
export default new courseService();