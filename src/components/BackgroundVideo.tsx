import React from 'react';
import './BackgroundVideo.css'; // Import CSS for styling

const BackgroundVideo: React.FC = () => {
  return (
    <div className="video-container">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome</h1>
        <p>This content is over the video background.</p>
      </div>
    </div>
  );
};

export default BackgroundVideo;
