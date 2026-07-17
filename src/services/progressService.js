import API from "./api";

export const saveProgress = async (data) => {
    try {
        const response = await API.post("/progress/save", data);
        return response.data;
    } catch (error) {
        console.error("Save progress error:", error.response?.data || error.message);
        throw error;
    }
};



// import axios from "axios";

// export const saveProgress = async (data) => {
//     return await axios.post("http://localhost:5000/api/progress/save", data);
// };