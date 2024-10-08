import { Container } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
function AboutUsVideo() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="video_about_wrapper category">
        <Container>
          <div className="intro">
            <h1>{t("about_company.title")}</h1>
          </div>
          <div className="video_container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6vXU-oLPe_c?si=TiDf9iZ97H2UhvJu"
              title="YouTube video player"
              // frameBorder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AboutUsVideo;
