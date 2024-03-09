import axios from "axios";


// const API_URL = "http://localhost:4500/api/section/";
const API_URL = "https://despliegue-backend-tesis.onrender.com/api/section/";


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