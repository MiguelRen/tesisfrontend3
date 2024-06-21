import axios from "axios";
import {apiUrl} from "../api/apiUrl"


const API_URL = apiUrl + "api/section/";
// const API_URL = "https://tesisbackend3.onrender.com/api/section/";


class sectionService {
    async createSection(data){
        try {
          
            const result = await axios.post(API_URL,data)
            return error;
        } catch (error) {
            return error;
        }
    }
}
export default new sectionService();