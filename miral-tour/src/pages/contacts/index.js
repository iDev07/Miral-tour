import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
function Contacts() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("menu.contacts")}</title>
      </Head>

      <div className="contacts pt_100">
        <div className="contacts_wrapper">
          <Container maxWidth="lg">
            <div className="this_wrap">
              <div className="intro">
                <h1>{t("menu.contacts")}</h1>
              </div>
              <div className="contacts_wrap">
                <div className="left_box">
                  <div className="topphone">
                    <div className="content">
                      <h2>{t("contactsPage.callUs")}</h2>
                      <h2>{t("contactsPage.workingHours")}</h2>
                    </div>
                    <div className="num_image">
                      <img
                        src="/img/contact_number.png"
                        alt="ALL4U TOURISM Contacts"
                      />
                    </div>
                  </div>
                  <div className="socials">
                    <hr />
                    <div className="email">
                      <h3>E-mail</h3>
                      <a href="mailto: info@all4u-tour.uz">
                        info@turbo-tour.uz
                      </a>
                    </div>
                    <div className="social_links">
                      <h3>{t("footer.socialNetworks")}</h3>
                      <div className="links_wrap">
                        <div className="col">
                          <a href="htpps://instagram.com/turbotour.uz/">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="52"
                              height="54"
                              viewBox="0 0 52 54"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13 0C5.82029 0 0 5.35179 0 11.9536V35.8607C0 42.4626 5.82029 47.8143 13 47.8143H39C46.1798 47.8143 52 42.4626 52 35.8607V11.9536C52 5.35179 46.1798 0 39 0H13ZM26 15.2136C20.7784 15.2136 16.5455 19.1059 16.5455 23.9072C16.5455 28.7084 20.7784 32.6007 26 32.6007C31.2215 32.6007 35.4545 28.7084 35.4545 23.9072C35.4545 19.1059 31.2215 15.2136 26 15.2136ZM11.8182 23.9072C11.8182 16.7052 18.1676 10.8669 26 10.8669C33.8324 10.8669 40.1818 16.7052 40.1818 23.9072C40.1818 31.1091 33.8324 36.9474 26 36.9474C18.1676 36.9474 11.8182 31.1091 11.8182 23.9072ZM40.1818 6.52013C37.5709 6.52013 35.4545 8.46624 35.4545 10.8669C35.4545 13.2675 37.5709 15.2136 40.1818 15.2136C42.7927 15.2136 44.9091 13.2675 44.9091 10.8669C44.9091 8.46624 42.7927 6.52013 40.1818 6.52013Z"
                                fill="#004074"
                              />
                            </svg>
                          </a>
                        </div>

                        <div className="col">
                          <a href="https://t.me/turbotouruz">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="53"
                              height="53"
                              viewBox="0 0 53 53"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M46.9438 7.03587C47.5593 7.5594 47.8336 8.38215 47.6558 9.17124L40.0657 42.8548C39.9001 43.5895 39.3668 44.1858 38.6562 44.4309C37.9455 44.6761 37.1588 44.535 36.5771 44.058L26.6585 35.9259L22.4974 43.4315C22.0715 44.1999 21.2255 44.6354 20.3541 44.535C19.4828 44.4349 18.7575 43.8183 18.5165 42.9732L14.5426 29.0354L4.99628 27.1221C4.05706 26.9337 3.35234 26.1505 3.26254 25.1948C3.17276 24.2392 3.7192 23.3378 4.60682 22.9771L44.7256 6.67865C45.4738 6.37472 46.3284 6.51236 46.9438 7.03587ZM12.9398 24.2818L16.6898 25.0333C17.486 25.1928 18.1266 25.7848 18.3496 26.5673L21.2485 36.7346L24.1275 31.5416C24.4396 30.9788 24.9845 30.5837 25.6158 30.4627C26.2469 30.3416 26.899 30.5074 27.3964 30.9151L36.6079 38.4676L42.5115 12.268L12.9398 24.2818Z"
                                fill="#004074"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M46.6958 10.5316C47.6467 9.93168 47.9828 8.70349 47.4704 7.70154C46.9579 6.69957 45.7667 6.25564 44.7256 6.67865L4.60682 22.9773C3.7192 23.3378 3.17276 24.2392 3.26254 25.1947C3.35234 26.1505 4.05706 26.9339 4.99628 27.1221L15.8392 29.2952C16.384 29.4043 16.9498 29.2998 17.4199 29.0032L46.6958 10.5316Z"
                                fill="#004074"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M47.6559 9.17121C47.8773 8.18811 47.3952 7.18138 46.4913 6.73947C45.5875 6.29754 44.4991 6.53641 43.8621 7.31644L24.3449 31.221C23.5863 32.1498 23.7229 33.5189 24.65 34.2791L36.5772 44.0582C37.1588 44.535 37.9456 44.6762 38.6562 44.4311C39.3669 44.186 39.9001 43.5895 40.0658 42.8549L47.6559 9.17121Z"
                                fill="#004074"
                              />
                            </svg>
                          </a>
                        </div>
                        <div className="col">
                          <a href="https://www.facebook.com/All4U.Tourism">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="53"
                              height="53"
                              viewBox="0 0 53 53"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.67439 3.25977C5.6802 3.25977 3.25293 5.69214 3.25293 8.69261V43.4628C3.25293 46.4633 5.6802 48.8957 8.67439 48.8957H26.0231C26.6218 48.8957 27.1074 48.4091 27.1074 47.8091V31.5106C27.1074 30.9105 26.6218 30.424 26.0231 30.424H21.6859V24.9911H26.0231C26.6218 24.9911 27.1074 24.5046 27.1074 23.9046V17.3852C27.1074 13.7846 30.02 10.8657 33.6131 10.8657H40.1189V16.2986H37.9503C35.5549 16.2986 33.6131 18.2445 33.6131 20.6449V23.9046C33.6131 24.5046 34.0987 24.9911 34.6974 24.9911H39.7656L38.2166 30.424H34.6974C34.0987 30.424 33.6131 30.9105 33.6131 31.5106V47.8091C33.6131 48.4091 34.0987 48.8957 34.6974 48.8957H43.3717C46.3659 48.8957 48.7932 46.4633 48.7932 43.4628V8.69261C48.7932 5.69214 46.3659 3.25977 43.3717 3.25977H8.67439Z"
                                fill="#004074"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right_box">
                  <h4>{t("contactsPage.address")}</h4>
                  <iframe
                    src="https://yandex.com/map-widget/v1/?um=constructor%3Ac28422c352cca643410d317c12207d095c483a4f61e3206bd0bd1b2b06b4ca8f&amp;source=constructor"
                    width="100%"
                    height="450"
                    frameborder="0"
                  ></iframe>
                  {/* <YMaps>
                  <h1>Yakksaray</h1>
                  <Map
                    defaultState={{ center: [41.285055, 69.26239], zoom: 15 }}
                  />
                </YMaps> */}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Contacts;
