import axios from "axios";
import authHeader from "./auth-header";
import { apiUrl} from "../api/apiUrl";

const API_URL = apiUrl + "api/student/";

// const API_URL = "https://tesisbackend3.onrender.com/api/student/";

class studentServices {
    async createStudent(userData){
        try {
            
            const result = await axios.post(API_URL, userData,{
                headers: authHeader(),
            });
          
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
               
                return result.data ;
        }catch(error){
            console.log(error);
        }
    }
    async getParticularStudent (data){
        try {
            // console.log(data.target._value); 
            const studentId =  data.target._value;
            const result = await axios.get(API_URL + studentId);
            console.log(result)
            return result.data;
            
        } catch (error) {
            console.log(error);
        }
    }
    async getStudentBySection(sectionId){
        try {
            console.log(sectionId)
;            const result = await axios.get(API_URL + "section/" + sectionId);
            console.log(result);
            
        } catch (error) {
            console.log(error);
        }
    }
}

export default new studentServices(); 