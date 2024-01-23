import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

function Video() {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(true);
  const youtubePlayerRef = useRef(null);

  useEffect(() => {
    const hasSkipped = localStorage.getItem("hasSkipped");

    if (hasSkipped) {
      setShowVideo(false);
    }
  }, []);

  const handleSkip = () => {
    if (youtubePlayerRef.current) {
      const player = new window.YT.Player(youtubePlayerRef.current, {
        events: {
          onReady: () => {
            // Stop the YouTube video when skipping
            player.stopVideo();
          },
        },
      });
    }
    localStorage.setItem("hasSkipped", "true");
    setShowVideo(false);
  };

  useEffect(() => {
    const lastSkipTimestamp = localStorage.getItem("lastSkipTimestamp");
    const timeToShowAgain = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

    if (lastSkipTimestamp) {
      const currentTime = new Date().getTime();
      const timeSinceSkip = currentTime - parseInt(lastSkipTimestamp, 10);

      if (timeSinceSkip < timeToShowAgain) {
        // Less than 7 days passed, don't show the video
        setShowVideo(false);
      }
    }
  }, []);

  useEffect(() => {
    // Load the YouTube API script dynamically
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = initializeYouTubePlayer;

    // Function to initialize the YouTube player
    function initializeYouTubePlayer() {
      new window.YT.Player(youtubePlayerRef.current);
    }
  }, []);

  return (
    <div className={`video_modal${showVideo ? "" : " hidden_welcome_modal"}`}>
      <div className="wrapper">
        <div className="content">
          {/* Your YouTube video embed code goes here */}
          <div ref={youtubePlayerRef}></div>
          <button onClick={handleSkip}>{t("skipBtn")}</button>
        </div>
      </div>
    </div>
  );
}

export default Video;
