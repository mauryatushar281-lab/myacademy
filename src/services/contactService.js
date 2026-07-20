import API from "./api";



export const getAllMessages = () => {
    return API.get("/contact/all");
};
export const deleteMessage = (id) => {
    return API.delete(`/contact/${id}`);
};
export const markAsReplied = (id) => {
    return API.patch(`/contact/${id}`);
};