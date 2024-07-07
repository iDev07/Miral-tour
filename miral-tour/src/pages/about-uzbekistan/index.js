import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronRight } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
function AboutUzbekistan() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  const { t, i18n } = useTranslation();
  const [persons, setPersons] = useState([]);
  const [cities, setCities] = useState([]);
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/famous-peoples`)
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/cities`)
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/destinations`)
      .then((response) => {
        setDestinations(response.data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);
  const onChange = (key) => {
    // console.log(key);
  };

  return (
    <>
      <Head>
        <title>{t("aboutUzb.title")}</title>
      </Head>
      <div className="uzbekistan pt_70">
        <div className="uzbekistan_wrapper">
          <div className="background_section">
            <div className="this_wrapper">
              <Container>
                <div className="content_box">
                  <div className="intro_top">
                    <h1>{t("aboutUzb.introTitle")}</h1>
                    <p>{t("aboutUzb.introDesc")}</p>
                  </div>
                  <div className="intro_bottom">
                    <div className="cols_wrapper">
                      <div className="feature" data-aos="zoom-in">
                        <div className="icon_box">
                          <img src="/img/feature1.png" alt="Miral Tour " />
                        </div>
                        <p>{t("aboutUzb.reasons")}</p>
                      </div>
                      <div className="feature" data-aos="zoom-in">
                        <div className="icon_box">
                          <img src="/img/feature2.png" alt="Miral Tour " />
                        </div>
                        <p>{t("aboutUzb.reason1")}</p>
                      </div>
                      <div className="feature" data-aos="zoom-in">
                        <div className="icon_box">
                          <img src="/img/feature3.png" alt="Miral Tour " />
                        </div>
                        <p>{t("aboutUzb.reason2")}</p>
                      </div>
                      <div className="feature" data-aos="zoom-in">
                        <div className="icon_box">
                          <img src="/img/feature4.png" alt="Miral Tour " />
                        </div>
                        <p>{t("aboutUzb.reason3")}</p>
                      </div>
                      <div className="feature" data-aos="zoom-in">
                        <div className="icon_box">
                          <img src="/img/feature5.png" alt="Miral Tour " />
                        </div>
                        <p>{t("aboutUzb.reason4")}</p>
                      </div>
                      <div className="feature" data-aos="zoom-in">
                        <div className="icon_box">
                          <img src="/img/feature6.png" alt="Miral Tour " />
                        </div>
                        <p>{t("aboutUzb.reason5")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <div className="reasons">
            <Container>
              <div className="intro">
                <h1>{t("aboutUzb.reasons")}</h1>
              </div>
              <div className="reasons_wrapper">
                <div className="reason">
                  <div className="this_wrap">
                    <div className="top">
                      <h3>{t("aboutUzb.reasonsT1")}</h3>
                    </div>
                    <p>{t("aboutUzb.reasonDesc1")}</p>
                  </div>
                </div>
                <div className="reason">
                  <div className="this_wrap">
                    <div className="top">
                      <h3>{t("aboutUzb.reasonsT2")}</h3>
                    </div>
                    <p>{t("aboutUzb.reasonDesc2")}</p>
                  </div>
                </div>
                <div className="reason">
                  <div className="this_wrap">
                    <div className="top">
                      <h3>{t("aboutUzb.reasonsT3")}</h3>
                    </div>
                    <p>{t("aboutUzb.reasonDesc3")}</p>
                  </div>
                </div>
                <div className="reason">
                  <div className="this_wrap">
                    <div className="top">
                      <h3>{t("aboutUzb.reasonsT4")}</h3>
                    </div>
                    <p>{t("aboutUzb.reasonDesc4")}</p>
                  </div>
                </div>
                <div className="reason">
                  <div className="this_wrap">
                    <div className="top">
                      <h3>{t("aboutUzb.reasonsT5")}</h3>
                    </div>
                    <p>{t("aboutUzb.reasonDesc5")}</p>
                  </div>
                </div>
              </div>
              <p className="description">{t("aboutUzb.bigDesc")}</p>
            </Container>
          </div>
          <div className="great_persons">
            <Container>
              <div className="intro">
                <h1>{t("aboutUzb.greatPeople")}</h1>
                <p className="green_btn">
                  <Link href={"/famous-people"}>{t("aboutUzb.viewAll")}</Link>
                </p>
              </div>
              <div className="this_wrapper">
                <div className="persons_slider">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    disableOnInteraction={false}
                    loopFillGroupWithBlank={true}
                    breakpoints={{
                      "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      "@1.50": {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="mySwiper_persons"
                  >
                    <div className="my_slider">
                      {persons.map((person) => (
                        <SwiperSlide>
                          <div className="place">
                            <Link href={`/famous-people/${person.seo_url}`}>
                              <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/famous-people/${person.main_image}`}
                                alt={`${person.title_en}`}
                              />
                              <div className="place_wrap">
                                <div className="content">
                                  <h2>
                                    {i18n.language === "uz"
                                      ? person.name_uz
                                      : i18n.language === "ru"
                                      ? person.name_ru
                                      : i18n.language === "it" &&
                                        person.name_it !== null &&
                                        person.name_it !== ""
                                      ? person.name_it
                                      : person.name_en}
                                  </h2>
                                  <p>
                                    {i18n.language === "uz"
                                      ? person.title_uz
                                      : i18n.language === "ru"
                                      ? person.title_ru
                                      : i18n.language === "it" &&
                                        person.title_it !== null &&
                                        person.title_it !== ""
                                      ? person.title_it
                                      : person.title_en}
                                  </p>
                                  <p className="read_more">
                                    {t("business.formBtn")}
                                    <span>
                                      <ChevronRight />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      ))}
                    </div>
                  </Swiper>
                </div>
              </div>
            </Container>
          </div>
          <div className="patterns">
            <Container>
              <div className="this_wrap">
                <div className="intro">
                  <h1>{t("aboutUzb.craftsmanship")}</h1>
                </div>
                <div className="description">
                  <p>{t("aboutUzb.craftmanshipDesc")}</p>
                </div>
                <div className="this_video">
                  <iframe
                    height="600"
                    src="https://www.youtube.com/embed/4e7J6Crmp0U?si=AbVY9PJ6Y2JqCjwW"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </Container>
          </div>
          <div className="cities">
            <Container>
              <div className="intro">
                <h1>{t("aboutUzb.ancientCities")}</h1>
                <p className="green_btn">
                  <Link href={"/cities"}>{t("aboutUzb.viewAll")}</Link>
                </p>
              </div>
              <div className="this_wrapper">
                <div className="persons_slider">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    slidesPerGroup={1}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    disableOnInteraction={false}
                    loopFillGroupWithBlank={true}
                    breakpoints={{
                      "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 30,
                      },
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="mySwiper_persons"
                  >
                    <div className="my_slider">
                      {cities.map((city) => (
                        <SwiperSlide>
                          <div className="place">
                            <Link href={`/cities/${city.seo_url}`}>
                              <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/city/${city.main_image}`}
                                alt={`${city.title_en}`}
                              />
                              <div className="place_wrap">
                                <div className="content">
                                  <h2>
                                    {" "}
                                    {i18n.language === "uz"
                                      ? city.name_uz
                                      : i18n.language === "ru"
                                      ? city.name_ru
                                      : i18n.language === "it" &&
                                        city.name_it !== null &&
                                        city.name_it !== ""
                                      ? city.name_it
                                      : city.name_en}
                                  </h2>
                                  <p>
                                    {i18n.language === "uz"
                                      ? city.title_uz
                                      : i18n.language === "ru"
                                      ? city.title_ru
                                      : i18n.language === "it" &&
                                        city.title_it !== null &&
                                        city.title_it !== ""
                                      ? city.title_it
                                      : city.title_en}
                                  </p>
                                  <p className="read_more">
                                    {t("business.formBtn")}
                                    <span>
                                      <ChevronRight />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      ))}
                    </div>
                  </Swiper>
                </div>
              </div>
            </Container>
          </div>{" "}
          <div className="destinations">
            <Container>
              <div className="intro">
                <h1>{t("aboutUzb.greatDest")}</h1>
                <p className="green_btn">
                  <Link href={"/destinations"}>{t("aboutUzb.viewAll")}</Link>
                </p>
              </div>
              <div className="this_wrapper">
                <div className="persons_slider">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    slidesPerGroup={1}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    disableOnInteraction={false}
                    loopFillGroupWithBlank={true}
                    breakpoints={{
                      "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 30,
                      },
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="mySwiper_persons"
                  >
                    <div className="my_slider">
                      {destinations.map((destination) => (
                        <SwiperSlide>
                          <div className="place">
                            <Link href={`/destinations/${destination.seo_url}`}>
                              <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/destination/${destination.main_image}`}
                                alt={`${destination.title_en}`}
                              />
                              <div className="place_wrap">
                                <div className="content">
                                  <h2>
                                    {" "}
                                    {i18n.language === "uz"
                                      ? destination.title_uz
                                      : i18n.language === "ru"
                                      ? destination.title_ru
                                      : i18n.language === "it" &&
                                        destination.title_it !== null &&
                                        destination.title_it !== ""
                                      ? destination.title_it
                                      : destination.title_en}
                                  </h2>
                                  <p>
                                    {i18n.language === "uz"
                                      ? destination.name_uz
                                      : i18n.language === "ru"
                                      ? destination.name_ru
                                      : i18n.language === "it" &&
                                        destination.name_it !== null &&
                                        destination.name_it !== ""
                                      ? destination.name_it
                                      : destination.name_en}
                                  </p>
                                  <p className="read_more">
                                    {t("business.formBtn")}
                                    <span>
                                      <ChevronRight />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      ))}
                    </div>
                  </Swiper>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default AboutUzbekistan;
