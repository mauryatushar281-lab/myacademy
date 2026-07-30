import { useEffect, useRef } from "react";
import { saveProgress } from "../services/progressService";

export default function VideoPlayer({ lecture, courseId }) {
  const videoRef = useRef(null);

  // ================= Restore Saved Position =================
  useEffect(() => {
    if (!lecture || !videoRef.current) return;

    const video = videoRef.current;

    const restoreTime = () => {
      const savedTime = localStorage.getItem(`lecture-${lecture._id}`);

      if (savedTime) {
        video.currentTime = Number(savedTime);
      }
    };

    video.addEventListener("loadedmetadata", restoreTime);

    return () => {
      video.removeEventListener("loadedmetadata", restoreTime);
    };
  }, [lecture]);

  // ================= Save Progress Every 10 Seconds =================
  useEffect(() => {
    if (!lecture || !videoRef.current) return;

    const interval = setInterval(async () => {
      const video = videoRef.current;

      if (!video) return;

      const watchedTime = Math.floor(video.currentTime);
      const duration = Math.floor(video.duration || lecture.duration || 0);

      localStorage.setItem(`lecture-${lecture._id}`, watchedTime);

      try {
        await saveProgress({
          courseId,
          lectureId: lecture._id,
          watchedTime,
          completed: duration > 0 && watchedTime >= duration * 0.9,
        });

      } catch (err) {
        console.error("Save Progress Error:", err);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [lecture, courseId]);

  // ================= Save When Video Ends =================
  const handleEnded = async () => {
    try {
      await saveProgress({
        courseId,
        lectureId: lecture._id,
        watchedTime: lecture.duration,
        completed: true,
      });

      localStorage.removeItem(`lecture-${lecture._id}`);


    } catch (err) {
      console.error(err);
    }
  };

  // ================= Save Position While Watching =================
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    // debugg
    // const current = Math.floor(videoRef.current.currentTime);

    // console.log("Current Time:", current);

    localStorage.setItem(
      `lecture-${lecture._id}`,
      Math.floor(videoRef.current.currentTime),
    );
  };

  return (
    <video
      key={lecture._id}
      ref={videoRef}
      width="100%"
      controls
      controlsList="nodownload"
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    >
      <source src={lecture.videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

// import { useEffect, useRef } from "react";

// export default function VideoPlayer({ lecture }) {
//   const videoRef = useRef();

//   useEffect(() => {
//     const savedTime = localStorage.getItem("progress");

//     if (savedTime && videoRef.current) {
//       videoRef.current.currentTime = savedTime;
//     }
//   }, []);

//   return (
//     <video
//       ref={videoRef}
//       controls
//       width="100%"
//       src={lecture.videoUrl}
//       onTimeUpdate={
//         (e) => {
//         localStorage.setItem("progress", e.target.currentTime);
//       }
//     }
//     />
//   );
// }
