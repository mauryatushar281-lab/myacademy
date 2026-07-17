
import API from "./api";

export const enrollCourse = async (courseId) => {
    console.log("Course ID:", courseId);
    const res =
        await API.post(
            "/enrollment/enroll",
            {
                
                courseId
            }
        );
    return res.data;
};


// import API from "./api";
// export const enrollCourse = async (id) => {
//     const res =
//         await API.post(
//             "/enrollment/enroll",
//             {
//                 courseId : id
//             },
//             {
//                 headers: {
//                     Authorization:
//                         `Bearer ${localStorage.getItem("token")}`
//                 }
//             }
//         );
//     return res.data;
// };