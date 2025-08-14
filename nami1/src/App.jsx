import React, { useState, useRef, useEffect } from "react";
import videoFile from "./Your_reference_video_202508141039.mp4"; // Put video in src/
import HomePage from "./components/HomePage"; // Adjust path if needed

function App() {
  const [showHome, setShowHome] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5; // Speed: 1 = normal, 1.5 = 50% faster
    }
  }, []);

  const handleVideoEnd = () => {
    setShowHome(true);
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      {!showHome ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoFile}
          autoPlay
          muted
          onEnded={handleVideoEnd}
        />
      ) : (
        <div className="fade-in">
          <HomePage />
        </div>
      )}
    </div>
  );
}

export default App;



