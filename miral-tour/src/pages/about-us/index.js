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
                  <h2 className="subtitle">Our Vision</h2>
                  <p>
                    <b>Is a world where:</b>
                  </p>
                  <p>
                    {" "}
                    Tourism dollars support the development of local livelihoods
                    as well as benefit and protect local environment and
                    culture. Travelers and locals behave respectfully towards
                    each other and are able to exchange information and services
                    that mutually benefit both parties. All travelers and tour
                    operators are educated about how to make responsible choices
                    in travel and where they give their money. Tours are
                    designed around local needs, and local communities take
                    ownership over tourism in their home areas. Both travelers
                    and global communities recognize their own ability to be a
                    part of enacting the changes they want to see in the world
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
                    Offer educational tours thatinspire people to explore and
                    connect with each other across cultures and borders. Our
                    voyages with insight to the history and culture will
                    demonstrate that everything we do may improve or degrade our
                    world. We, as travelers and hosts,are global citizens. We
                    should awake our power to enact the changes we want to see
                    in the world. Financially support the community development
                    work of our partners with remaining financially sustainable
                    as a tour operator. Serve as a model tour company in the
                    countries we operate in the field of educational tourism and
                    help improve the industry by sharing our knowledgeand
                    experience we gained along the way. Develop the mechanism to
                    design our tours basing on both input from local communities
                    and feedback from tourists.
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
