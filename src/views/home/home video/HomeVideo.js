import React from "react";
import "./video.css";

const HomeVideo = () => {
  return (
    <div className="video-box">
      <div className="video-container">
        <iframe
          class="iframe-video"
          src="https://www.youtube.com/embed/kD-IIeri2Uo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <a href="https://manilla.finance/">
          <button className="learn-btn">Learn more about this project</button>
        </a>
      </div>
    </div>
  );
};

export default HomeVideo;
