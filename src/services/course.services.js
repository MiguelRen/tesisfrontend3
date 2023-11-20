import axios from "axios"
import authHeader from "./auth-header"


const API_URL= "http://localhost:4500/api/course/";

class courseService{
    async createCourse(data) {
        try {
                const result = await axios.post(API_URL,data,{headers: authHeader()});
            return result;
        } catch (error) {
        return error
        }
        }
};
export default new courseService();