import React, { useState, useEffect } from "react";
import Head from "next/head";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "react-image-gallery/styles/css/image-gallery.css";
import "animate.css";

import axios from "axios";
// export const getStaticPaths = async () => {
//   const response = await axios.get(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/cities`
//   );
//   const cities = response.data;

//   const paths = cities.map((city) => ({
//     params: { seo_url: city.seo_url },
//   }));

//   return { paths, fallback: true };
// };

// export const getStaticProps = async ({ params }) => {
//   const response = await axios.get(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/cities`
//   );
//   const cities = response.data;

//   const city = params ? cities.find((c) => c.seo_url === params.seo_url) : null;

//   return {
//     props: {
//       city,
//     },
//     revalidate: 1,
//   };
// };

function Destinations({}) {
  const { t, i18n } = useTranslation();
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/famous-peoples`)
      .then((response) => {
        setPersons(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setLoading(false);
      });
  }, []);
  const router = useRouter();
  const { seo_url } = router.query;
  const person = persons.find((persons) => persons.seo_url === seo_url);
  if (!person) {
    return <Loader />;
  }
  const background_image = `${process.env.NEXT_PUBLIC_IMAGE_URL}/famous-people/${person.main_image}`;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Head>
            <title>
              {" "}
              {i18n.language === "uz"
                ? person.title_uz
                : i18n.language === "ru"
                ? person.title_ru
                : i18n.language === "it" &&
                  person.title_it !== null &&
                  person.title_it !== ""
                ? person.title_it
                : person.title_en}
            </title>
            <meta
              name="description"
              content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. Book now and create lasting memories!"
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
              content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. Book now and create lasting memories!"
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
              content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. Book now and create lasting memories!"
            />
            <meta
              property="twitter:image"
              content="https://admin.all4u-tour.uz/images/logo/seo_logo1.png"
            />
            <meta
              name="msapplication-TileImage"
              content="https://admin.all4u-tour.uz/images/logo/seo_logo1.png"
            />
          </Head>
          <div className="city_about pt_70">
            <div className="city_wrapper">
              <div
                className="city_background"
                style={{
                  background: `url(${background_image})`,
                }}
              >
                <div className="backround_wrapper">
                  <div className="name_city">
                    <h1 className="animate__animated animate__fadeInLeft">
                      {i18n.language === "uz"
                        ? person.title_uz
                        : i18n.language === "ru"
                        ? person.title_ru
                        : i18n.language === "it" &&
                          person.title_it !== null &&
                          person.title_it !== ""
                        ? person.title_it
                        : i18n.language === "tr" &&
                          person.title_tr !== null &&
                          person.title_tr !== ""
                        ? person.title_tr
                        : person.title_en}
                    </h1>
                  </div>
                </div>
              </div>
              <Container>
                <div className="content_boxes">
                  <div className="left_content_box">
                    <div
                      className="rich_editor"
                      dangerouslySetInnerHTML={{
                        __html:
                          i18n.language === "uz"
                            ? person.content_uz
                            : i18n.language === "ru"
                            ? person.content_ru
                            : i18n.language === "it" &&
                              person.content_it !== null &&
                              person.content_it !== ""
                            ? person.content_it
                            : i18n.language === "tr" &&
                              person.content_tr !== null &&
                              person.content_tr !== ""
                            ? person.content_tr
                            : person.content_en,
                      }}
                    ></div>
                  </div>
                  <div className="right_sidebar"></div>
                </div>
              </Container>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Destinations;
