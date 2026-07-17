import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/learning`;

export const getCourse = (
    courseId
) => {
    return axios.get(
        `${API}/${courseId}`
    );
};

export const completeLesson = (
    data
) => {
    return axios.put(
        `${API}/complete`,
        data
    );
};