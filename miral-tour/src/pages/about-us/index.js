import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";

function AboutUs() {
  return (
    <>
      <Head>
        <title>About us!</title>
      </Head>
      <div className="about_us pt_100">
        <Container>
          <div className="main_intro">
            <div className="left_box">
              <h2>About us and our group</h2>
            </div>
            <div className="right_box">
              <p>
                Traveling with Miral Tour through the ancient cities of this
                sunny region will be a fascinating and unforgettable adventure
                for you. Miral Tour is a division of Miral Travel, a tour
                operator in Uzbekistan. Our department specializes in tours
                around Uzbekistan, Turkmenistan, Tajikistan, Kyrgyzstan, and
                Kazakhstan. For guests who would love to explore The Great Silk
                Road Tours, we'll offer the best options and develop a special
                route.{" "}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AboutUs;
