import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Loader from "@/components/Loader";
import { ChevronRight } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "animate.css";
import { Collapse } from "antd";
import axios from "axios";
import Link from "next/link";
function AboutUzbekistan() {
  const [cities, setCities] = useState([]);
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
  const onChange = (key) => {
    // console.log(key);
  };

  return (
    <>
      <Head>
        <title>Uzbekistan - Miral Tour</title>
      </Head>
      <div className="uzbekistan pt_70">
        <div className="uzbekistan_wrapper">
          <div className="background_section">
            <div className="this_wrapper">
              <Container>
                <div className="content_box">
                  <div className="intro_top">
                    <h1>Welcome to Uzbekistan</h1>
                    <p>
                      A country located in the central part of Central Asia. The
                      capital is the city of Tashkent. The state language is
                      Uzbek. Its area is 448,978 km². Currently, the total
                      population of the country is more than 36 million.
                      Currency - soum. The territory of the Republic of
                      Uzbekistan consists of 12 regions, the city of Tashkent
                      and the Republic of Karakalpakstan. It is also an
                      independent, democratic, secular and constitutional state.
                    </p>
                  </div>
                  <div className="intro_bottom">
                    <div className="cols_wrapper">
                      <div className="feature">
                        <div className="icon_box">
                          <img src="/img/feature1.png" alt="Miral Tour " />
                        </div>
                        <p>Our five reasons to visit Uzbekistan</p>
                      </div>
                      <div className="feature">
                        <div className="icon_box">
                          <img src="/img/feature2.png" alt="Miral Tour " />
                        </div>
                        <p>Craftsmanship</p>
                      </div>
                      <div className="feature">
                        <div className="icon_box">
                          <img src="/img/feature3.png" alt="Miral Tour " />
                        </div>
                        <p>Ancient historical monuments</p>
                      </div>
                      <div className="feature">
                        <div className="icon_box">
                          <img src="/img/feature4.png" alt="Miral Tour " />
                        </div>
                        <p>National delicious foods</p>
                      </div>
                      <div className="feature">
                        <div className="icon_box">
                          <img src="/img/feature5.png" alt="Miral Tour " />
                        </div>
                        <p>Great personalities of Uzbekistan</p>
                      </div>
                      <div className="feature">
                        <div className="icon_box">
                          <img src="/img/feature6.png" alt="Miral Tour " />
                        </div>
                        <p>Nature of Uzbekistan</p>
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
                <h1>Our five reasons to visit Uzbekistan</h1>
              </div>
              <div className="reasons_wrapper">
                <div className="reason">
                  <div className="this_wrap">
                    <div className="top">
                      <h3>Architecture</h3>
                    </div>
                    <p>
                      Ancient archaeological remains impressive Islamic
                      monyments and stark Soviet buildings sit together with one
                      another in Uzbekistanaconstant remiender of the nation’s
                      vibrant and indeed lengthy history
                    </p>
                  </div>
                </div>
                <div className="reason">
                  <div className="this_wrap">
                    <div className="top">
                      <h3>Architecture</h3>
                    </div>
                    <p>
                      Ancient archaeological remains impressive Islamic
                      monyments and stark Soviet buildings sit together with one
                      another in Uzbekistanaconstant remiender of the nation’s
                      vibrant and indeed lengthy history
                    </p>
                  </div>
                </div>
                <div className="reason">
                  <div className="this_wrap">
                    <div className="top">
                      <h3>Architecture</h3>
                    </div>
                    <p>
                      Ancient archaeological remains impressive Islamic
                      monyments and stark Soviet buildings sit together with one
                      another in Uzbekistanaconstant remiender of the nation’s
                      vibrant and indeed lengthy history
                    </p>
                  </div>
                </div>
                <div className="reason">
                  <div className="this_wrap">
                    <div className="top">
                      <h3>Architecture</h3>
                    </div>
                    <p>
                      Ancient archaeological remains impressive Islamic
                      monyments and stark Soviet buildings sit together with one
                      another in Uzbekistanaconstant remiender of the nation’s
                      vibrant and indeed lengthy history
                    </p>
                  </div>
                </div>
                <div className="reason">
                  <div className="this_wrap">
                    <div className="top">
                      <h3>Architecture</h3>
                    </div>
                    <p>
                      Ancient archaeological remains impressive Islamic
                      monyments and stark Soviet buildings sit together with one
                      another in Uzbekistanaconstant remiender of the nation’s
                      vibrant and indeed lengthy history
                    </p>
                  </div>
                </div>
              </div>
              <p className="description">
                Republic of Uzbekistan, is a country located in Central Asia. It
                is surrounded by five countries: Kazakhstan to
                the north, Kyrgyzstan to the northeast, Tajikistan to
                the southeast, Afghanistan to the south, and Turkmenistan to
                the southwest, making it one of only two doubly
                landlocked countries on Earth, along with Liechtenstein.
                Uzbekistan is part of the Turkic world, as well as a member of
                the Organization of Turkic States. Uzbek is the majority
                language, while Russian is widely spoken and
                understood. Islam is the predominant religion, and most Uzbeks
                are Sunni Muslims. The first recorded settlers in the land of
                what is modern Uzbekistan were Eastern Iranian nomads, known
                as Scythians, who founded kingdoms in Khwarazm, Bactria,
                and Sogdia in the 8th–6th centuries BC, as well
                as Fergana and Margiana in the 3rd century BC – 6th century
                AD. The area was incorporated into the Achaemenid Empire and,
                after a period of Greco-Bactrian rule, was ruled by the Parthian
                Empire and later by the Sasanian Empire, until the Muslim
                conquest of Persia in the seventh century. The early Muslim
                conquests and the subsequent Samanid Empire converted most of
                the people into adherents of Islam. During this period, cities
                began to grow rich from the Silk Road, and became a center of
                the Islamic Golden Age. The local Khwarazmian dynasty was
                destroyed by the Mongol invasion in the 13th century, leading to
                a dominance by Turkic peoples. Timur (Tamerlane) in the 14th
                century established the Timurid Empire. Its capital was
                Samarkand, which became a centre of science under the rule
                of Ulugh Beg, giving birth to the Timurid Renaissance. The
                territories of the Timurid dynasty were conquered by Uzbek
                Shaybanids in the 16th century. Conquests by
                Emperor Babur towards the east led to the foundation of
                the Mughal Empire in India. All of Central Asia was gradually
                incorporated into the Russian Empire during the 19th century,
                with Tashkent becoming the political center of Russian
                Turkestan. In 1924, national delimitation created the Uzbek
                Soviet Socialist Republic as a republic of the Soviet Union. It
                declared independence as the Republic of Uzbekistan in 1991.
              </p>
            </Container>
          </div>
          <div className="great_persons">
            <div className="this_wrapper">
              <div className="persons_slider">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={4}
                  slidesPerGroup={1}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
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
                      spaceBetween: 50,
                    },
                  }}
                  navigation={true}
                  modules={[Autoplay, Navigation, Pagination]}
                  className="mySwiper_cities"
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
                                <h2>{city.name_en}</h2>
                                <p>{city.title_en}</p>
                                <p className="read_more">
                                  Read more{" "}
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
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default AboutUzbekistan;
