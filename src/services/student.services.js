import axios from "axios";

const API_URL = "http://localhost:4500/api/student";

class studentServices {
    async createStudent(userData){
        try {
            console.log(userData);
            const result = await axios.post(API_URL, userData);
            console.log("bla");
            return result;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default new studentServices(); 