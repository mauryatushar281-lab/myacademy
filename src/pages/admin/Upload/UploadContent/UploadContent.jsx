import { useState } from "react";
// import axios from "axios";

import {
  UploadCloud,
  FileText,
  Video,
  Image,
  CheckCircle,
  Loader,
} from "lucide-react";
import API from "@/services/api";
import "./UploadContent.css";

export default function UploadContent() {
  const [contentType, setContentType] = useState("video");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [file, setFile] = useState(null);

  const [preview, setPreview] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // your selected course id
  const courseId = "6a27d81fdd248a2a6f31afb9";

  const handleFile = (e) => {
    const selected = e.target.files[0];

    if (!selected) return;

    setFile(selected);

    if (selected.type.startsWith("image")) {
      setPreview(URL.createObjectURL(selected));
    } else {
      setPreview("");
    }
  };

  const uploadContent = async () => {
    if (!title || !file) {
      alert("Please fill all details");
      return;
    }

    try {
      setLoading(true);
      setSuccess(false);

      // 1. upload video/pdf/image to cloudinary

      const formData = new FormData();

      formData.append("video", file);

      // const upload = await axios.post(
      //   "http://localhost:5000/api/videos/upload-video",

      //   formData,

      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   },
      // );

      const upload = await API.post("/videos/upload-video", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const videoUrl = upload.data.url;

      // 2. add lecture into course lessons array

      // await axios.post(
      //   `http://localhost:5000/api/courses/add-lecture/${courseId}`,

      //   {
      //     title: title,

      //     videoUrl: videoUrl,

      //     duration: "30 min",
      //   },
      // );

      await API.post(`/courses/add-lecture/${courseId}`, {
        title,
        videoUrl,
        duration: "30 min",
      });

      setSuccess(true);

      setTitle("");

      setDescription("");

      setFile(null);

      setPreview("");
    } catch (error) {
      console.log(error.response?.data || error);

      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-page">
      <div className="content-card">
        <div className="heading">
          <div className="heading-icon">
            <UploadCloud />
          </div>

          <div>
            <h1>Upload Content</h1>

            <p>Add lectures, videos, notes and resources</p>
          </div>
        </div>

        <div className="type-selector">
          <button
            className={contentType === "video" ? "active" : ""}
            onClick={() => setContentType("video")}
          >
            <Video />
            Video
          </button>

          <button
            className={contentType === "pdf" ? "active" : ""}
            onClick={() => setContentType("pdf")}
          >
            <FileText />
            PDF
          </button>

          <button
            className={contentType === "image" ? "active" : ""}
            onClick={() => setContentType("image")}
          >
            <Image />
            Image
          </button>
        </div>

        <div className="field">
          <label>Content Title</label>

          <input
            value={title}
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Description</label>

          <textarea
            value={description}
            placeholder="Write content description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="upload-box">
          <UploadCloud size={45} />

          <h3>Upload {contentType}</h3>

          <p>Select your learning file</p>

          <input
            id="contentFile"
            type="file"
            accept={
              contentType === "video"
                ? "video/*"
                : contentType === "pdf"
                  ? ".pdf"
                  : "image/*"
            }
            onChange={handleFile}
          />

          <label htmlFor="contentFile">Choose File</label>
        </div>

        {preview && (
          <div className="image-preview">
            <img src={preview} />
          </div>
        )}

        <button
          className="submit-btn"
          disabled={loading}
          onClick={uploadContent}
        >
          {loading ? (
            <>
              <Loader className="loader" />
              Uploading...
            </>
          ) : (
            <>
              <UploadCloud />
              Upload Content
            </>
          )}
        </button>

        {success && (
          <div className="success-message">
            <CheckCircle />
            Content uploaded successfully
          </div>
        )}
      </div>
    </div>
  );
}
