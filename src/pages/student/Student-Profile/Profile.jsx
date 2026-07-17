import { useState, useEffect } from "react";
import { getProfile, updateProfile } from "../../../services/userService";
import "./Profile.css";

import {
  User,
  Mail,
  Phone,
  Calendar,
  BookOpen,
  Trophy,
  Award,
} from "lucide-react";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showEdit, setShowEdit] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    photo: null,
  });

  const [previewImage, setPreviewImage] = useState("");

  // ================= FETCH PROFILE =================
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // ================= OPEN EDIT =================
  const handleEditOpen = () => {
    setFormData({
      name: user?.name || "",
      phone: user?.phone || "",
      photo: null,
    });

    setPreviewImage("");
    setShowEdit(true);
  };

  // ================= IMAGE UPLOAD =================
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));

    setPreviewImage(URL.createObjectURL(file));
  };

  // ================= SAVE PROFILE =================
  const handleSave = async () => {
    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("phone", formData.phone);

      if (formData.photo) {
        data.append("photo", formData.photo);
      }

      const updated = await updateProfile(data);

      setUser(updated);
      setShowEdit(false);

      alert("Profile updated successfully!");
    } catch (error) {
      console.log(error);
      alert("Failed to update profile");
    }
  };

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="profile-page">
        <h2>Loading profile...</h2>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="profile-page">
        <h2>Profile not found</h2>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* HEADER */}
        <div className="profile-cover">
          <div className="profile-avatar">
            <img
              src={
                user?.photo ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user?.name || "Student",
                )}`
              }
              alt="profile"
              className="profile-image"
            />
          </div>

          <div className="profile-content">
            <h1>{user?.name}</h1>
            <p>{user?.role || "Student"}</p>

            <button className="cover-btn" onClick={handleEditOpen}>
              Edit Profile
            </button>
          </div>
        </div>

        {/* INFO */}
        <div className="profile-details">
          <h3>Personal Information</h3>

          <div className="detail-item">
            <Mail size={18} />
            <span>{user?.email}</span>
          </div>

          <div className="detail-item">
            <Phone size={18} />
            <span>{user?.phone || "Not added"}</span>
          </div>

          <div className="detail-item">
            <Calendar size={18} />
            <span>
              Joined{" "}
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "N/A"}
            </span>
          </div>
        </div>

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            <BookOpen />
            <h2>{user?.enrolledCourses || 0}</h2>
            <span>Courses</span>
          </div>

          <div className="stat-card">
            <Trophy />
            <h2>{user?.certificates || 0}</h2>
            <span>Certificates</span>
          </div>

          <div className="stat-card">
            <Award />
            <h2>{user?.progress || 0}%</h2>
            <span>Progress</span>
          </div>

          <div className="stat-card">
            <User />
            <h2>#{user?.rank || 0}</h2>
            <span>Rank</span>
          </div>
        </div>

        {/* EDIT MODAL */}
        {showEdit && (
          <div className="edit-overlay">
            <div className="edit-card">
              <div className="edit-header">
                <h2>Edit Profile</h2>
                <button onClick={() => setShowEdit(false)}>✕</button>
              </div>

              {/* IMAGE */}
              <div className="upload-section">
                <img
                  src={
                    previewImage ||
                    user?.photo ||
                    `https://ui-avatars.com/api/?name=${user?.name}`
                  }
                  className="preview-image"
                  alt="preview"
                />

                <label className="upload-btn">
                  Choose Image
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </label>
              </div>

              {/* INPUTS */}
              <div className="form-group">
                <label>Name</label>
                <input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              {/* ACTIONS */}
              <div className="edit-actions">
                <button className="save-btn" onClick={handleSave}>
                  Save Changes
                </button>

                <button
                  className="cancel-btn"
                  onClick={() => setShowEdit(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;

// import { useState, useEffect } from "react";

// import { getProfile, updateProfile } from "../../services/userService";

// import "./Profile.css";
// import {
//   User,
//   Mail,
//   Phone,
//   Calendar,
//   BookOpen,
//   Trophy,
//   Award,
// } from "lucide-react";

// function Profile() {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const data = await getProfile();

//         setUser(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   return (
//     <div className="profile-page">
//       <div className="profile-card">
//         {/* Profile Cover */}
//         <div className="profile-cover">
//           <div className="profile-avatar">
//             <img
//               src={
//                 user.photo ||
//                 `https://ui-avatars.com/api/?name=${encodeURIComponent(
//                   user.name,
//                 )}`
//               }
//               alt={user.name}
//               className="profile-image"
//             />
//           </div>

//           <div className="profile-content">
//             <h1>{user?.name || "My-Name"}</h1>
//             <p>Class 11 Mathematics Student</p>

//             <button className="cover-btn">Edit Profile</button>
//           </div>
//         </div>

//         {/* Personal Information */}
//         <div className="profile-details">
//           <h3>Personal Information</h3>

//           <div className="detail-item">
//             <Mail size={18} />
//             <span>{user?.email || "My@example.com"}</span>
//           </div>

//           <div className="detail-item">
//             <Phone size={18} />
//             <span>{user?.phone || "+91 7084287787"}</span>
//           </div>

//           <div className="detail-item">
//             <Calendar size={18} />
//             <span>Joined {new Date(user.createdAt).toDateString()}</span>
//           </div>
//         </div>

//         {/* Statistics */}
//         <div className="stats-grid">
//           <div className="stat-card">
//             <BookOpen size={28} />
//             <h2>{user.enrolledCourses}</h2>
//             <span>Courses</span>
//           </div>

//           <div className="stat-card">
//             <Trophy size={28} />
//             <h2>{user.certificates}</h2>
//             <span>Certificates</span>
//           </div>

//           <div className="stat-card">
//             <Award size={28} />
//             <h2>{user.progress}%</h2>
//             <span>Progress</span>
//           </div>

//           <div className="stat-card">
//             <User size={28} />
//             <h2>#{user.rank}</h2>
//             <span>Rank</span>
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="activity-card">
//           <h3>Recent Activity</h3>

//           <div className="activity-item">✅ Completed Calculus Quiz</div>

//           <div className="activity-item">📄 Downloaded Chapter Notes</div>

//           <div className="activity-item">
//             🎯 Purchased JEE Foundation Course
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="profile-actions">
//           <button className="edit-btn">Edit Profile</button>

//           <button className="password-btn">Change Password</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;
