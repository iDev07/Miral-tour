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
              <h1>About us and our group</h1>
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
                  <h2 className="subtitle">Our Mission</h2>
                  <p>
                    Open borders between countries to show that our worldis
                    colorful and the people are different but we are one in our
                    beautiful planet.
                  </p>
                  <p>
                    {" "}
                    Erase boundaries, remove prejudices and stereotypes. Develop
                    and introduce life-changing and learning tours that may
                    become amazingadventures to our customers. We will prove
                    that every person is a uniquecreature and is ableto change
                    both his life and our world. Participating in our tours is a
                    good starting point of own world – improving!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section_wrapper reverse">
              <div className="content_box">
                <div className="content_box_wrapper">
                  <h2 className="subtitle">Our Mission</h2>
                  <p>
                    Open borders between countries to show that our worldis
                    colorful and the people are different but we are one in our
                    beautiful planet.
                  </p>
                  <p>
                    {" "}
                    Erase boundaries, remove prejudices and stereotypes. Develop
                    and introduce life-changing and learning tours that may
                    become amazingadventures to our customers. We will prove
                    that every person is a uniquecreature and is ableto change
                    both his life and our world. Participating in our tours is a
                    good starting point of own world – improving!
                  </p>
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
                  <h2 className="subtitle">Our Mission</h2>
                  <p>
                    Open borders between countries to show that our worldis
                    colorful and the people are different but we are one in our
                    beautiful planet.
                  </p>
                  <p>
                    {" "}
                    Erase boundaries, remove prejudices and stereotypes. Develop
                    and introduce life-changing and learning tours that may
                    become amazingadventures to our customers. We will prove
                    that every person is a uniquecreature and is ableto change
                    both his life and our world. Participating in our tours is a
                    good starting point of own world – improving!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="our_team_members">
            <h1 className="title">Meet Our Team Members</h1>
            <div className="team_members">
              <div className="member">
                <div className="image_box">
                  <img src="/img/iroda.jpg" alt="Team Member - Miral Tour" />
                </div>
                <div className="detail">
                  <h3>Iroda Baxriddinovna</h3>
                  <span>Head Manager of Miral Tour</span>
                </div>
              </div>
              <div className="member">
                <div className="image_box">
                  <img src="/img/iroda.jpg" alt="Team Member - Miral Tour" />
                </div>
                <div className="detail">
                  <h3>Iroda Baxriddinovna</h3>
                  <span>Head Manager of Marketing department</span>
                </div>
              </div>
              <div className="member">
                <div className="image_box">
                  <img src="/img/iroda.jpg" alt="Team Member - Miral Tour" />
                </div>
                <div className="detail">
                  <h3>Iroda Baxriddinovna</h3>
                  <span>Head Manager of Sales department</span>
                </div>
              </div>
              <div className="member">
                <div className="image_box">
                  <img src="/img/iroda.jpg" alt="Team Member - Miral Tour" />
                </div>
                <div className="detail">
                  <h3>Iroda Baxriddinovna</h3>
                  <span>Head Manager of International partnerships</span>
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
