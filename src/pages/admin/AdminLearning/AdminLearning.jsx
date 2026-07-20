// AdminLearning.jsx

import { useEffect, useState, useCallback } from "react";
import { Plus, X, Search } from "lucide-react";
import {
  fetchCourses,
  addCourse,
  editCourseApi,
  removeCourse,
} from "../../../services/AdmincourseService";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
// import { Plus, X, Edit, Trash2, Search } from "lucide-react";

import "./AdminLearning.css";
import CourseCard from "../../../components/AdminCourseCard/AdminCourseCard";

function AdminLearning() {
  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);

  const [editId, setEditId] = useState(null);

  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    instructor: "",
    duration: "",
    thumbnail: "",
    price: "",
    category: "",
  });

  // LOAD COURSES

  const loadCourses = useCallback(async () => {
    try {
      const data = await fetchCourses();

      setCourses(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  // INPUT CHANGE

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  // CREATE / UPDATE

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await editCourseApi(
          editId,

          form,
        );
      } else {
        await addCourse(form);
      }

      setForm({
        title: "",
        description: "",
        instructor: "",
        duration: "",
        thumbnail: "",
        price: "",
        category: "",
      });

      setEditId(null);

      setShowForm(false);

      loadCourses();
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT

  const editCourse = (course) => {
    setForm({
      title: course.title,

      description: course.description,

      instructor: course.instructor,

      duration: course.duration,

      thumbnail: course.thumbnail,

      price: course.price,

      category: course.category,
    });

    setEditId(course._id);

    setShowForm(true);
  };

  // DELETE

  const deleteCourse = async (id) => {
    const confirmDelete = window.confirm("Delete this course?");

    if (!confirmDelete) return;

    try {
      await removeCourse(id);

      loadCourses();
    } catch (error) {
      console.log(error);
    }
  };

  // SEARCH FILTER

  const filteredCourses = courses.filter((course) => {
    const text = search.toLowerCase();

    return (
      course.title?.toLowerCase().includes(text) ||
      course.instructor?.toLowerCase().includes(text) ||
      course.category?.toLowerCase().includes(text)
    );
  });

  return (
    <div className="admin-learning">
      {/* HEADER */}
      <AdminHeader />

      <div className="learning-header">
        <h1>Manage Courses</h1>

        <div className="header-actions">
          <div className="search-box">
            <Search size={20} />

            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="add-btn" onClick={() => setShowForm(true)}>
            <Plus size={20} />
            Add Course
          </button>
        </div>
      </div>

      {/* FORM */}

      {showForm && (
        <div className="course-form">
          <div className="form-top">
            <h2>{editId ? "Update Course" : "Add New Course"}</h2>

            <X cursor="pointer" onClick={() => setShowForm(false)} />
          </div>

          <form onSubmit={handleSubmit}>
            <input
              name="title"
              placeholder="Course title"
              value={form.title}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
            />

            <input
              name="instructor"
              placeholder="Instructor"
              value={form.instructor}
              onChange={handleChange}
            />

            <input
              name="duration"
              placeholder="Duration"
              value={form.duration}
              onChange={handleChange}
            />

            <input
              name="thumbnail"
              placeholder="Thumbnail URL"
              value={form.thumbnail}
              onChange={handleChange}
            />

            <input
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
            />

            <input
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
            />

            <button className="save-btn">{editId ? "Update" : "Create"}</button>
          </form>
        </div>
      )}

      {/* COURSE LIST */}

      <div className="course-grid">
        {loading ? (
          <h3>Loading...</h3>
        ) : filteredCourses.length === 0 ? (
          <h3 className="empty">No courses found</h3>
        ) : (
          filteredCourses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              editCourse={editCourse}
              deleteCourse={deleteCourse}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default AdminLearning;

// // AdminLearning.jsx

// import { useEffect, useState, useCallback } from "react";
// import {
//   fetchCourses,
//   addCourse,
//   editCourseApi,
//   removeCourse,
// } from "../services/AdmincourseService";
// import { Plus, X, Edit, Trash2, Search } from "lucide-react";
// import "./AdminLearning.css";

// function AdminLearning() {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [showForm, setShowForm] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [search, setSearch] = useState("");

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     instructor: "",
//     duration: "",
//     thumbnail: "",
//     price: "",
//     category: "",
//   });

//   // Fetch courses

//   // Fetch courses

//   const loadCourses = useCallback(async () => {
//     try {
//       const data = await fetchCourses();

//       setCourses(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     loadCourses();
//   }, [loadCourses]);

//   // Input change

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Add / Update Course

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (editId) {
//         await editCourseApi(editId, form);
//       } else {
//         await addCourse(form);
//       }

//       setForm({
//         title: "",
//         description: "",
//         instructor: "",
//         duration: "",
//         thumbnail: "",
//         price: "",
//         category: "",
//       });

//       setEditId(null);

//       setShowForm(false);

//       loadCourses();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Edit

//   const editCourse = (course) => {
//     setForm({
//       title: course.title,
//       description: course.description,
//       instructor: course.instructor,
//       duration: course.duration,
//       thumbnail: course.thumbnail,
//       price: course.price,
//       category: course.category,
//     });

//     setEditId(course._id);

//     setShowForm(true);
//   };

//   // Delete

//   const deleteCourse = async (id) => {
//     const confirmDelete = window.confirm("Delete this course?");

//     if (!confirmDelete) return;

//     try {
//       await removeCourse(id);

//       loadCourses();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // here for search
//   const filteredCourses = courses.filter((course) => {
//     return (
//       course.title?.toLowerCase().includes(search.toLowerCase()) ||
//       course.instructor?.toLowerCase().includes(search.toLowerCase()) ||
//       course.category?.toLowerCase().includes(search.toLowerCase())
//     );
//   });
//   // here end for search

//   return (
//     <div className="admin-learning">
//       {/* Header */}
//       <div className="learning-header">
//         <h1>Manage Courses</h1>

//         <div className="header-actions">
//           <div className="search-box">
//             <Search size={35} />

//             <input
//               type="text"
//               placeholder="Search courses..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           <button className="add-btn" onClick={() => setShowForm(true)}>
//             <Plus size={20} />
//             Add Course
//           </button>
//         </div>
//       </div>
//       {/* Form */}
//       {showForm && (
//         <div className="course-form">
//           <div className="form-top">
//             <h2>{editId ? "Update Course" : "Add New Course"}</h2>

//             <X cursor="pointer" onClick={() => setShowForm(false)} />
//           </div>

//           <form onSubmit={handleSubmit}>
//             <input
//               name="title"
//               placeholder="Course title"
//               value={form.title}
//               onChange={handleChange}
//             />

//             <textarea
//               name="description"
//               placeholder="Description"
//               value={form.description}
//               onChange={handleChange}
//             />

//             <input
//               name="instructor"
//               placeholder="Instructor"
//               value={form.instructor}
//               onChange={handleChange}
//             />

//             <input
//               name="duration"
//               placeholder="Duration"
//               value={form.duration}
//               onChange={handleChange}
//             />

//             <input
//               name="thumbnail"
//               placeholder="Thumbnail URL"
//               value={form.thumbnail}
//               onChange={handleChange}
//             />

//             <input
//               name="price"
//               placeholder="Price"
//               value={form.price}
//               onChange={handleChange}
//             />

//             <input
//               name="category"
//               placeholder="Category"
//               value={form.category}
//               onChange={handleChange}
//             />

//             <button className="save-btn">{editId ? "Update" : "Create"}</button>
//           </form>
//         </div>
//       )}
//       {/* Course List */}
//       <div className="course-grid">
//         {loading ? (
//           <h3>Loading...</h3>
//         ) : filteredCourses.length === 0 ? (
//           <h3 className="empty">No courses found</h3>
//         ) : (
//           filteredCourses.map((course) => (
//             <div className="course-card" key={course._id}>
//               <img src={course.thumbnail} alt={course.title} />

//               <div className="course-info">
//                 <h2>{course.title}</h2>

//                 <p>{course.description}</p>

//                 <span>{course.instructor}</span>

//                 <p className="category">{course.category}</p>

//                 <div className="actions">
//                   <button className="edit" onClick={() => editCourse(course)}>
//                     <Edit size={18} />
//                   </button>

//                   <button
//                     className="delete"
//                     onClick={() => deleteCourse(course._id)}
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminLearning;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Edit, Trash2, Plus, X } from "lucide-react";
// import "./AdminLearning.css";

// function Learning() {
//   const [courses, setCourses] = useState([]);

//   const [loading, setLoading] = useState(true);

//   const [showForm, setShowForm] = useState(false);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     instructor: "",
//     duration: "",
//     category: "",
//   });

//   const getCourses = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/courses");

//       setCourses(res.data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getCourses();
//   }, []);

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const addCourse = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:5000/api/courses", form);

//       setForm({
//         title: "",
//         description: "",
//         instructor: "",
//         duration: "",
//         category: "",
//       });

//       setShowForm(false);

//       getCourses();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const deleteCourse = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/courses/${id}`);

//       setCourses(courses.filter((course) => course._id !== id));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="learning-page">
//       {/* HEADER */}

//       <div className="page-header">
//         <div>
//           <h1>Course Management</h1>

//           <p>Manage your courses</p>
//         </div>

//         <button className="add-btn" onClick={() => setShowForm(!showForm)}>
//           <Plus size={18} />

//           {showForm ? "Close" : "Add Course"}
//         </button>
//       </div>

//       {/* ADD COURSE FORM */}

//       {showForm && (
//         <div className="course-form-section">
//           <div className="form-top">
//             <h2>Add New Course</h2>

//             <button className="close-btn" onClick={() => setShowForm(false)}>
//               <X size={20} />
//             </button>
//           </div>

//           <form onSubmit={addCourse}>
//             <div className="form-grid">
//               <input
//                 name="title"
//                 placeholder="Course title"
//                 value={form.title}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 name="instructor"
//                 placeholder="Instructor"
//                 value={form.instructor}
//                 onChange={handleChange}
//               />

//               <input
//                 name="duration"
//                 placeholder="Duration"
//                 value={form.duration}
//                 onChange={handleChange}
//               />

//               <input
//                 name="category"
//                 placeholder="Category"
//                 value={form.category}
//                 onChange={handleChange}
//               />
//             </div>

//             <textarea
//               name="description"
//               placeholder="Description"
//               value={form.description}
//               onChange={handleChange}
//             />

//             <button className="save-btn">Save Course</button>
//           </form>
//         </div>
//       )}

//       {/* COURSE LIST */}

//       <div className="course-list">
//         <div className="table-header">
//           <h2>All Courses</h2>

//           <span>Total : {courses.length}</span>
//         </div>

//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div className="table-wrapper">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Course</th>

//                   <th>Instructor</th>

//                   <th>Category</th>

//                   <th>Duration</th>

//                   <th>Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {courses.map((course) => (
//                   <tr key={course._id}>
//                     <td>
//                       <div className="course-title">
//                         {course.title || "Untitled"}

//                         <p>
//                           {(course.description || "No description").slice(
//                             0,
//                             50,
//                           )}
//                           ...
//                         </p>
//                       </div>
//                     </td>

//                     <td>{course.instructor || "Not added"}</td>

//                     <td>
//                       <span className="tag">
//                         {course.category || "General"}
//                       </span>
//                     </td>

//                     <td>{course.duration || "N/A"}</td>

//                     <td>
//                       <div className="actions">
//                         <button className="edit">
//                           <Edit size={16} />
//                         </button>

//                         <button
//                           className="delete"
//                           onClick={() => deleteCourse(course._id)}
//                         >
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Learning;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Edit, Trash2, Plus } from "lucide-react";
// import "./AdminLearning.css";

// function Learning() {
//   const [courses, setCourses] = useState([]);

//   const [loading, setLoading] = useState(true);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     instructor: "",
//     duration: "",
//     category: "",
//   });

//   const getCourses = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/courses");

//       setCourses(res.data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getCourses();
//   }, []);

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const addCourse = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:5000/api/courses", form);

//       setForm({
//         title: "",
//         description: "",
//         instructor: "",
//         duration: "",
//         category: "",
//       });

//       getCourses();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const deleteCourse = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/courses/${id}`);

//       setCourses(courses.filter((c) => c._id !== id));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="learning-page">
//       <h1>Course Management</h1>

//       <div className="learning-container">
//         {/* FORM */}

//         <div className="course-form">
//           <h2>
//             <Plus size={20} />
//             Add Course
//           </h2>

//           <form onSubmit={addCourse}>
//             <input
//               name="title"
//               placeholder="Course title"
//               value={form.title}
//               onChange={handleChange}
//             />

//             <input
//               name="instructor"
//               placeholder="Instructor"
//               value={form.instructor}
//               onChange={handleChange}
//             />

//             <input
//               name="duration"
//               placeholder="Duration"
//               value={form.duration}
//               onChange={handleChange}
//             />

//             <input
//               name="category"
//               placeholder="Category"
//               value={form.category}
//               onChange={handleChange}
//             />

//             <textarea
//               name="description"
//               placeholder="Description"
//               value={form.description}
//               onChange={handleChange}
//             />

//             <button>Add Course</button>
//           </form>
//         </div>

//         {/* TABLE */}

//         <div className="course-list">
//           <div className="table-header">
//             <h2>All Courses</h2>

//             <span>Total : {courses.length}</span>
//           </div>

//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <div className="table-wrapper">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Course</th>

//                     <th>Instructor</th>

//                     <th>Category</th>

//                     <th>Duration</th>

//                     <th>Action</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {courses.map((course) => (
//                     <tr key={course._id}>
//                       <td>
//                         <div className="course-title">
//                           {course.title || "Untitled"}

//                           <p>
//                             {(
//                               course.description || "No description available"
//                             ).slice(0, 50)}
//                             ...
//                           </p>
//                         </div>
//                       </td>

//                       <td>{course.instructor || "Not added"}</td>

//                       <td>
//                         <span className="tag">
//                           {course.category || "General"}
//                         </span>
//                       </td>

//                       <td>{course.duration || "N/A"}</td>

//                       <td>
//                         <div className="actions">
//                           <button className="edit">
//                             <Edit size={16} />
//                           </button>

//                           <button
//                             className="delete"
//                             onClick={() => deleteCourse(course._id)}
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Learning;

//

// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./AdminLearning.css";

// function Learning() {

//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     instructor: "",
//     duration: "",
//     category: "",
//   });

//   const getCourses = async () => {

//     try {

//       const res = await axios.get(
//         "http://localhost:5000/api/courses"
//       );

//       setCourses(res.data);

//     } catch (error) {

//       console.log(error);

//     } finally {

//       setLoading(false);

//     }

//   };

//   useEffect(() => {
//     getCourses();
//   }, []);

//   const handleChange = (e) => {

//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });

//   };

//   const addCourse = async (e) => {

//     e.preventDefault();

//     try {

//       await axios.post(
//         "http://localhost:5000/api/courses",
//         form
//       );

//       setForm({
//         title:"",
//         description:"",
//         instructor:"",
//         duration:"",
//         category:""
//       });

//       getCourses();

//     } catch(error){

//       console.log(error);

//     }

//   };

//   const deleteCourse = async(id)=>{

//     try{

//       await axios.delete(
//         `http://localhost:5000/api/courses/${id}`
//       );

//       setCourses(
//         courses.filter(
//           course => course._id !== id
//         )
//       );

//     }catch(error){

//       console.log(error);

//     }

//   };

//   return (

//     <div className="learning-page">

//       <h1>
//         Course Management
//       </h1>

//       <div className="learning-container">

//         {/* ADD COURSE */}

//         <div className="course-form">

//           <h2>
//             Add New Course
//           </h2>

//           <form onSubmit={addCourse}>

//             <input
//               name="title"
//               placeholder="Course Title"
//               value={form.title}
//               onChange={handleChange}
//               required
//             />

//             <input
//               name="instructor"
//               placeholder="Instructor"
//               value={form.instructor}
//               onChange={handleChange}
//             />

//             <input
//               name="duration"
//               placeholder="Duration"
//               value={form.duration}
//               onChange={handleChange}
//             />

//             <input
//               name="category"
//               placeholder="Category"
//               value={form.category}
//               onChange={handleChange}
//             />

//             <textarea
//               name="description"
//               placeholder="Description"
//               value={form.description}
//               onChange={handleChange}
//             />

//             <button>
//               Add Course
//             </button>

//           </form>

//         </div>

//         {/* COURSE LIST */}

//         <div className="course-list">

//           <h2>
//             All Courses
//           </h2>

//           {
//             loading ? (
//               <p>Loading...</p>
//             )
//             :
//             courses.map((course)=>(

//               <div
//                 className="course-card"
//                 key={course._id}
//               >

//                 <h3>
//                   {course.title}
//                 </h3>

//                 <p>
//                   {course.description}
//                 </p>

//                 <span>
//                   {course.category}
//                 </span>

//                 <span>
//                   {course.duration}
//                 </span>

//                 <div>

//                   <button
//                     className="edit"
//                   >
//                     Edit
//                   </button>

//                   <button
//                     className="delete"
//                     onClick={()=>
//                       deleteCourse(course._id)
//                     }
//                   >
//                     Delete
//                   </button>

//                 </div>

//               </div>

//             ))

//           }

//         </div>

//       </div>

//     </div>

//   );
// }

// export default Learning;
