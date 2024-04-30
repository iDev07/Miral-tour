import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
function Countries_category() {
  const { t } = useTranslation();
  AOS.init({
    duration: 1500,
  });
  return (
    <div className="sending_company_banner">
      <div className="this_wrapper">
        <Container>
          <h1 className="title">{t("turboTour.title")}</h1>
          <div className="background_section">
            <div className="background_wrapper">
              <div className="content">
                <div className="wrap">
                  <p>{t("turboTour.description")}</p>
                  <a
                    className="green_btn"
                    href="https://turbotour.uz"
                    target="_blank"
                  >
                    {t("turboTour.link")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Countries_category;
