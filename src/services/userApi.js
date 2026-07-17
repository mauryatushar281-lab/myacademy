import API from "./api";

// GET logged-in user
export const getMe = () => {
    return API.get("/auth/me");
};