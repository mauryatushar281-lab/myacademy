import API from "./api";

// ================= GET PROFILE =================
export const getProfile = async () => {
    const res = await API.get("/users/dashboard");
    return res.data;
};

// ================= UPDATE PROFILE =================
export const updateProfile = async (profileData) => {

    const token = localStorage.getItem("token");


    const res = await API.put(
        "/users/profile",
        profileData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }
    );


    return res.data;
};



// import axios from "axios";

// const API_URL =
//     "http://localhost:5000/api/users";

// export const getProfile = async () => {
//     const token = localStorage.getItem("token");

//     const response = await axios.get(
//         `${API_URL}/profile`,
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         }
//     );

//     return response.data;
// };

// export const updateProfile = async (
//     profileData
// ) => {
//     const token = localStorage.getItem("token");

//     const response = await axios.put(
//         `${API_URL}/profile`,
//         profileData,
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 "Content-Type":
//                     "multipart/form-data",
//             },
//         }
//     );

//     return response.data;
// };