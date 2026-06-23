import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import History from "./pages/History";
import LoginSignup from "./pages/LoginSignup";
import ProtectedRoute from "./components/ProtectedRoute";
import { Navigate } from "react-router-dom";
function App() {
  const [showHome, setShowHome] = useState(false);
  const videoRef = useRef(null);

  // check if intro already seen in THIS reload
  useEffect(() => {
    const seenIntro = sessionStorage.getItem("seenIntro"); // ✅ sessionStorage resets only on reload
    if (seenIntro) {
      setShowHome(true);
    }
  }, []);

  // set playback rate after video mounts
  useEffect(() => {
    if (!showHome && videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, [showHome]);

  const handleVideoEnd = () => {
    setShowHome(true);
    sessionStorage.setItem("seenIntro", "true"); // ✅ only skip within same reload
  };

  return (
    <div className="w-screen h-screen">
      {!showHome ? (
        // ⏯️ Intro Video
        <video
          ref={videoRef}
          id="intro-video"
          className="w-full h-full object-cover"
          src="/Your_reference_video_202508141039.mp4"  // ✅ place your video in `public/intro.mp4`
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        />
      ) : (
        // 🌐 Main App with Router
        <div className="fade-in min-h-screen flex flex-col">
          <Router
            future={{
              v7_relativeSplatPath: true,
              v7_startTransition: true,
            }}
          >
            <Navbar />
            <div className="flex-grow pt-20 px-4">
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />

<Route path="/login" element={<LoginSignup />} />

<Route
  path="/chat"
  element={
    <ProtectedRoute>
      <HomePage />
    </ProtectedRoute>
  }
/>

<Route
  path="/history"
  element={
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  }
/>
                
              </Routes>
            </div>
           
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
