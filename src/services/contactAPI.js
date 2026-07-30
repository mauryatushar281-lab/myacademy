import axios from "axios";

const contactAPI = axios.create({
    baseURL: import.meta.env.VITE_CONTACT_API,
    headers: {
        "Content-Type": "application/json",
    },
});

export default contactAPI;