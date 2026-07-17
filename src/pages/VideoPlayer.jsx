import { useEffect, useRef } from "react";
import { saveProgress } from "../services/progressService";

export default function VideoPlayer({ lecture, courseId }) {
  const videoRef = useRef(null);

  // Restore saved progress
  useEffect(() => {
    if (!lecture) return;

    const savedTime = localStorage.getItem(`lecture-${lecture._id}`);

    if (savedTime && videoRef.current) {
      videoRef.current.currentTime = Number(savedTime);
    }
  }, [lecture]);

  // Save locally while watching
  const handleTimeUpdate = async () => {
    if (!videoRef.current) return;

    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;

    localStorage.setItem(`lecture-${lecture._id}`, current);

    if (duration > 0 && current / duration >= 0.9) {
      try {
        await saveProgress({
          courseId,
          lectureId: lecture._id,
          watchedTime: Math.floor(current),
          completed: true,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  // Send progress to backend every 10 seconds
  useEffect(() => {
    if (!lecture) return;

    const interval = setInterval(async () => {
      if (!videoRef.current) return;

      try {
        await saveProgress({
          courseId,
          lectureId: lecture._id,
          watchedTime: Math.floor(videoRef.current.currentTime),
        });
      } catch (err) {
        console.error(err);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [lecture, courseId]);

  return (
    <video
      ref={videoRef}
      controls
      width="100%"
      src={lecture.videoUrl}
      onTimeUpdate={handleTimeUpdate}
    />
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
