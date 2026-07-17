import { useState } from "react";
// import axios from "axios";
import { UploadCloud, Video, CheckCircle, Loader } from "lucide-react";
import "./UploadLecture.css";
import API from "@/services/api";

export default function UploadLecture() {
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState(null);

  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleVideo = (e) => {
    const file = e.target.files[0];

    if (file) {
      setVideo(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // const uploadLecture = async () => {
  //   if (!title || !video) {
  //     alert("Please fill all details");
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     setSuccess(false);

  //     const formData = new FormData();

  //     formData.append("video", video);

  //     const upload = await axios.post(
  //       "http://localhost:5000/api/videos/upload-video",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       },
  //     );

  //     const videoUrl = upload.data.url;

  //     await axios.post(
  //       "http://localhost:5000/api/courses/add-lecture/COURSE_ID",
  //       {
  //         title,
  //         videoUrl,
  //       },
  //     );

  //     setSuccess(true);

  //     setTitle("");
  //     setVideo(null);
  //     setPreview("");
  //   } catch (err) {
  //     console.log(err);
  //     alert("Upload failed");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const uploadLecture = async () => {
    if (!title || !video) {
      alert("Please fill all details");
      return;
    }

    try {
      setLoading(true);
      setSuccess(false);

      const formData = new FormData();

      formData.append("video", video);

      const upload = await API.post("/videos/upload-video", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const videoUrl = upload.data.url;

      await API.post("/courses/add-lecture/COURSE_ID", {
        title,
        videoUrl,
      });

      setSuccess(true);

      setTitle("");
      setVideo(null);
      setPreview("");
    } catch (err) {
      console.log(err.response?.data || err.message);

      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <div className="upload-header">
          <div className="icon-box">
            <UploadCloud size={32} />
          </div>

          <div>
            <h1>Upload Lecture</h1>
            <p>Add a new video lesson to your course</p>
          </div>
        </div>

        <div className="form-group">
          <label>Lecture Title</label>

          <input
            type="text"
            placeholder="Enter lecture title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="video-upload">
          <Video size={40} />

          <h3>Upload Lecture Video</h3>

          <p>MP4, MOV, WEBM supported</p>

          <input
            id="video"
            type="file"
            accept="video/*"
            onChange={handleVideo}
          />

          <label htmlFor="video">Choose Video</label>
        </div>

        {preview && (
          <div className="preview">
            <video controls>
              <source src={preview} />
            </video>
          </div>
        )}

        <button
          className="upload-btn"
          disabled={loading}
          onClick={uploadLecture}
        >
          {loading ? (
            <>
              <Loader className="spin" />
              Uploading...
            </>
          ) : (
            <>
              <UploadCloud />
              Upload Lecture
            </>
          )}
        </button>

        {success && (
          <div className="success">
            <CheckCircle />
            Lecture Uploaded Successfully
          </div>
        )}
      </div>
    </div>
  );
}
