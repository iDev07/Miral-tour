import React, { useState, useEffect } from "react";
import Head from "next/head";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "react-image-gallery/styles/css/image-gallery.css";
import "animate.css";
import { Button } from "antd";
import Link from "next/link";
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

function City({}) {
  const [cities, setCities] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .all([
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/cities`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/destinations`),
      ])
      .then(
        axios.spread((citiesResponse, destinationsResponse) => {
          setCities(citiesResponse.data);
          setDestinations(destinationsResponse.data);
          setLoading(false);
        })
      )
      .catch((error) => {
        console.error("An error occurred:", error);
        setLoading(false);
      });
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.NEXT_PUBLIC_BASE_URL}/cities`)
  //     .then((response) => {
  //       setCities(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("An error occurred:", error);
  //       setLoading(false);
  //     });
  // }, []);

  console.log(destinations);
  const router = useRouter();
  const { seo_url } = router.query;
  const city = cities.find((city) => city.seo_url === seo_url);
  console.log(router.query);
  console.log(city);
  if (!city) {
    return <Loader />;
  }
  const background_image = `${process.env.NEXT_PUBLIC_IMAGE_URL}/city/${city.main_image}`;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Head>
            <title>{city.name_en}</title>
            <meta name="description" content={city.seo_description_en} />
            <link rel="icon" href="/miniT.png" />
            <meta name="author" content="Miral Tour" />
            <meta name="keywords" content="tourism, tour, miral" />
            <meta property="og:title" content={city.title_en} />
            <meta property="og:description" content={city.seo_description_en} />
            <meta
              property="og:image"
              content="https://admin.all4u-tour.uz/images/logo/seo_logo1.png"
            />
            <meta property="og:image:width" content="780" />
            <meta property="og:image:height" content="400" />
            <meta property="og:site_name" content={city.title_en} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:alt" content="Logo" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={city.title_en} />
            <meta
              property="twitter:description"
              content={city.seo_description_en}
            />
            <meta
              property="twitter:image"
              content="https://admin.all4u-tour.uz/images/logo/seo_logo1.png"
            />
            <meta
              name="msapplication-TileImage"
              content="https://admin.all4u-tour.uz/images/logo/seo_logo1.png"
            />
            <meta
              name="google-site-verification"
              content="ENubd6T2CL6tApHlrZSjdjbBRFqwr-zdfEQaJmb-gBw"
            />
          </Head>
          <div className="city_about pt_70">
            {/* <ul>
              {destinations.map((destination) => (
                <li>
                  <Link href={`/cities/destinations/${destination.seo_url}`}>
                    {destination.title_en}
                  </Link>
                </li>
              ))}
            </ul> */}
            <div className="city_wrapper">
              <div
                className="city_background"
                style={{
                  background: `url(${background_image})`,
                }}
              >
                <div className="backround_wrapper">
                  <div className="name_city">
                    <h1 className="animate__animated animate__fadeInUp">
                      {city.name_en}
                    </h1>
                  </div>
                </div>
              </div>
              <Container>
                <div className="content_boxes  ">
                  <div className="left_content_box">
                    <div
                      className="rich_editor"
                      dangerouslySetInnerHTML={{ __html: city.content_en }}
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

export default City;
