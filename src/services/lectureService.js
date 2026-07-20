import API from "./api";

export const getLectures = (courseId) => {
    return API.get(`/lectures/${courseId}`);

};

