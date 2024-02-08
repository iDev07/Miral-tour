import { Container } from "@mui/material";
import React from "react";

function AboutUsVideo() {
  return (
    <div>
      <div className="video_about_wrapper category">
        <Container>
          <div className="intro">
            <h1>About Our Company</h1>
          </div>
          <div className="video_container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6vXU-oLPe_c?si=TiDf9iZ97H2UhvJu"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AboutUsVideo;
