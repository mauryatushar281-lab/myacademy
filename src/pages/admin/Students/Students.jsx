import { useEffect, useState } from "react";
// import axios from "axios";
import API from "../../../services/api";
import Search from "../../../components/Search/Search";
import {
  Users,
  Eye,
  Trash2,
  BookOpen,
  UserCheck,
  RefreshCw,
  X,
} from "lucide-react";

import "./Students.css";

import AdminHeader from "../../../components/AdminHeader/AdminHeader";

export default function Students() {
  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedStudent, setSelectedStudent] = useState(null);

  const [deleting, setDeleting] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  // const loadStudents = async () => {
  //   try {
  //     setLoading(true);

  //     const res = await axios.get("http://localhost:5000/api/users/students");

  //     setStudents(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const loadStudents = async () => {
    try {
      setLoading(true);

      const res = await API.get("/users/students");

      setStudents(res.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
  // const deleteStudent = async (id) => {
  //   const confirm = window.confirm(
  //     "Are you sure you want to delete this student?",
  //   );

  //   if (!confirm) return;

  //   try {
  //     setDeleting(id);

  //     await axios.delete(`http://localhost:5000/api/users/${id}`);

  //     setStudents((prev) => prev.filter((item) => item._id !== id));
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setDeleting("");
  //   }
  // };
  const deleteStudent = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );

    if (!confirmDelete) return;

    try {
      setDeleting(id);

      await API.delete(`/users/${id}`);

      setStudents((prev) => prev.filter((student) => student._id !== id));
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setDeleting("");
    }
  };
  const filteredStudents = students.filter((student) => {
    const text = search.toLowerCase();

    return (
      student.name?.toLowerCase().includes(text) ||
      student.email?.toLowerCase().includes(text)
    );
  });

  return (
    <div className="students-page">
      <AdminHeader  />
      <div className="students-header">
        
        <div>
          <h1>Student Management</h1>

          <p>Track and manage all learners</p>
        </div>

        <div className="student-stats">
          <div className="stat-card">
            <Users />

            <div>
              <h2>{students.length}</h2>

              <span>Total Students</span>
            </div>
          </div>

          <div className="stat-card">
            <UserCheck />

            <div>
              <h2>{students.filter((s) => s.active).length}</h2>

              <span>Active</span>
            </div>
          </div>
        </div>
      </div>

      <div className="toolbar">
        <Search
          value={search}
          onChange={setSearch}
          placeholder="Search courses..."
          onClear={() => setSearch("")}
        />

        <button className="refresh-btn" onClick={loadStudents}>
          <RefreshCw />
          Refresh
        </button>
      </div>

      <div className="student-table">
        {loading ? (
          <div className="loading">Loading students...</div>
        ) : filteredStudents.length === 0 ? (
          <div className="empty">No students found</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Student</th>

                <th>Email</th>

                <th>Courses</th>

                <th>Joined</th>

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student._id}>
                  <td className="student-name">
                    <div className="avatar">{student.name?.charAt(0)}</div>

                    <div>
                      <h4>{student.name}</h4>

                      <small>
                        ID:
                        {student._id.slice(0, 8)}
                      </small>
                    </div>
                  </td>

                  <td>{student.email}</td>

                  <td>
                    <span className="course-badge">
                      <BookOpen size={15} />

                      {student.courses?.length || 0}
                    </span>
                  </td>

                  <td>{new Date(student.createdAt).toLocaleDateString()}</td>

                  <td>
                    <div className="actions">
                      <button
                        className="view"
                        onClick={() => setSelectedStudent(student)}
                      >
                        <Eye />
                      </button>

                      <button
                        className="delete"
                        disabled={deleting === student._id}
                        onClick={() => deleteStudent(student._id)}
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {selectedStudent && (
        <div className="student-modal">
          <div className="modal-card">
            <button className="close" onClick={() => setSelectedStudent(null)}>
              <X />
            </button>

            <h2>Student Details</h2>

            <div className="profile">
              <div className="avatar big">
                {selectedStudent.name?.charAt(0)}
              </div>

              <h3>{selectedStudent.name}</h3>

              <p>{selectedStudent.email}</p>

              <p>
                Courses:
                {selectedStudent.courses?.length || 0}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Users, Search, Eye, Trash2, BookOpen, UserCheck } from "lucide-react";

// import "./Students.css";

// export default function Students() {
//   const [students, setStudents] = useState([]);

//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/users/students");

//       setStudents(res.data);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteStudent = async (id) => {
//     const confirmDelete = window.confirm("Delete this student?");

//     if (!confirmDelete) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/users/${id}`);

//       setStudents(students.filter((student) => student._id !== id));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const filteredStudents = students.filter(
//     (student) =>
//       student.name?.toLowerCase().includes(search.toLowerCase()) ||
//       student.email?.toLowerCase().includes(search.toLowerCase()),
//   );

//   return (
//     <div className="students-page">
//       {/* TOP */}

//       <div className="students-header">
//         <div>
//           <h1>Students</h1>

//           <p>Manage your enrolled learners</p>
//         </div>

//         <div className="student-stats">
//           <div className="stat-card">
//             <Users />

//             <div>
//               <h2>{students.length}</h2>

//               <span>Students</span>
//             </div>
//           </div>

//           <div className="stat-card">
//             <UserCheck />

//             <div>
//               <h2>Active</h2>

//               <span>Learners</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* SEARCH */}

//       <div className="search-box">
//         <Search size={20} />

//         <input
//           placeholder="Search student..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* TABLE */}

//       <div className="student-table">
//         {loading ? (
//           <h3>Loading...</h3>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Student</th>

//                 <th>Email</th>

//                 <th>Courses</th>

//                 <th>Joined</th>

//                 <th>Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredStudents.map((student) => (
//                 <tr key={student._id}>
//                   <td className="student-name">
//                     <div className="avatar">{student.name?.charAt(0)}</div>

//                     <div>
//                       <h4>{student.name}</h4>
//                     </div>
//                   </td>

//                   <td>{student.email}</td>

//                   <td>
//                     <span className="course-badge">
//                       <BookOpen size={15} />

//                       {student.courses?.length || 0}
//                     </span>
//                   </td>

//                   <td>{new Date(student.createdAt).toLocaleDateString()}</td>

//                   <td>
//                     <div className="actions">
//                       <button className="view">
//                         <Eye />
//                       </button>

//                       <button
//                         className="delete"
//                         onClick={() => deleteStudent(student._id)}
//                       >
//                         <Trash2 />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }
