import React from "react";
import Head from "next/head";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
function AboutUs() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. "
        />
        <link rel="icon" href="/img/mini_logo.png" />
        <meta name="author" content="Miral Tour" />
        <meta
          name="keywords"
          content="miral tour,miral-tour, miral tour uz, uzbekistan, miraltour, miral, worldmiral, turbotour, all4u-tour, tourism, tour, all4u"
        />
        <meta property="og:title" content="Miral Tour" />
        <meta
          property="og:description"
          content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. "
        />
        <meta
          property="og:image"
          content="https://admin.all4u-tour.uz/images/logo/seo_logo1.png"
        />
        <meta property="og:image:width" content="780" />
        <meta property="og:image:height" content="400" />
        <meta property="og:site_name" content="Miral Tour" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Logo" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Miral Tour" />
        <meta
          property="twitter:description"
          content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. "
        />
        <meta
          property="twitter:image"
          content="https://admin.all4u-tour.uz/images/logo/seo_logo1.png"
        />
        <meta
          name="msapplication-TileImage"
          content="https://admin.all4u-tour.uz/images/logo/seo_logo1.png"
        />
        <meta property="og:url" content="miraltour.com"></meta>
        <meta
          name="google-site-verification"
          content="U62xsTImQNPhHCBZzXFmwO3Zip8rZCGxjg2O-4xRNXI"
        />
        <title>{t("aboutUsPage.title")}</title>
      </Head>
      <div className="about_us pt_100">
        <Container>
          <div className="main_intro">
            <div className="left_box">
              <h1>{t("aboutUsPage.introTitle")}</h1>
            </div>
            <div className="right_box">
              <p>{t("aboutUsPage.introDesc")}</p>
            </div>
          </div>
          <div className="first_image">
            <img src="/img/our_tourists1.png" alt="Our tourists - Miral Tour" />
          </div>
          <div className="section">
            <div className="section_wrapper">
              <div className="image_box">
                <img src="/img/our_tourists2.png" alt="Tourists - Miral Tour" />
              </div>
              <div className="content_box">
                <div className="content_box_wrapper">
                  <h2 className="subtitle">{t("aboutUsPage.mission")}</h2>
                  <p>{t("aboutUsPage.missionDesc1")}</p>
                  <p> {t("aboutUsPage.missionDesc2")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section_wrapper reverse">
              <div className="content_box">
                <div className="content_box_wrapper">
                  <h2 className="subtitle">{t("aboutUsPage.vision")}</h2>
                  <p>
                    <b>{t("aboutUsPage.visionTitle")}</b>
                  </p>
                  <p>{t("aboutUsPage.visionDesc")}</p>
                </div>
              </div>
              <div className="image_box">
                <img src="/img/our_tourists3.png" alt="Tourists - Miral Tour" />
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section_wrapper">
              <div className="image_box">
                <img src="/img/our_tourists4.png" alt="Tourists - Miral Tour" />
              </div>
              <div className="content_box">
                <div className="content_box_wrapper">
                  <h2 className="subtitle">{t("aboutUsPage.objective")}</h2>
                  <p>{t("aboutUsPage.objectiveDesc")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="our_team_members">
            <h1 className="title">{t("aboutUsPage.team")}</h1>
            <div className="team_members">
              <div className="member">
                <div className="image_box">
                  <img
                    src="/img/abdulaziz.jpg"
                    alt="Team Member - Miral Tour"
                  />
                </div>
                <div className="detail">
                  <h3>{t("aboutUsPage.name1")}</h3>
                  <span>{t("aboutUsPage.position1")}</span>
                </div>
              </div>
              <div className="member">
                <div className="image_box">
                  <img src="/img/member4.jpg" alt="Team Member - Miral Tour" />
                </div>
                <div className="detail">
                  <h3>{t("aboutUsPage.name2")}</h3>
                  <span>{t("aboutUsPage.position2")}</span>
                </div>
              </div>
              <div className="member">
                <div className="image_box">
                  <img src="/img/member3_.jpg" alt="Team Member - Miral Tour" />
                </div>
                <div className="detail">
                  <h3>{t("aboutUsPage.name3")}</h3>
                  <span>{t("aboutUsPage.position3")}</span>
                </div>
              </div>
              <div className="member">
                <div className="image_box">
                  <img src="/img/nilufar.jpg" alt="Team Member - Miral Tour" />
                </div>
                <div className="detail">
                  <h3>{t("aboutUsPage.name4")}</h3>
                  <span>{t("aboutUsPage.position4")}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AboutUs;
