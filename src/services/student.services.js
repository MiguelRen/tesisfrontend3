import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4500/api/student";

class studentServices {
    async createStudent(userData){
        try {
            
            const result = await axios.post(API_URL, userData,{
                headers: authHeader(),
            });
            console.log("bla");
            return result;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    async getStudents(){
        try{
            const result = await axios.get(API_URL,{
                headers: authHeader()
            });
                console.log(result.data);
                return result.data ;
        }catch(error){
            console.log(error);
        }
    }
}

export default new studentServices(); 