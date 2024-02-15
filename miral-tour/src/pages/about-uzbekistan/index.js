import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
  const firstSection = [
    {
      key: 1,
      label: "Geographical Overview",
      children: (
        <p>
          Uzbekistan is strategically located in Central Asia, bordered by
          Kazakhstan to the north, Kyrgyzstan to the northeast, Tajikistan to
          the southeast, Afghanistan to the south, and Turkmenistan to the
          southwest. This landlocked nation is known for its diverse landscapes,
          ranging from the vast Kyzylkum Desert to the majestic Tian Shan
          mountain range.
        </p>
      ),
    },
    {
      key: 2,
      label: "Historical Significance",
      children: (
        <p>
          As one of the oldest inhabited regions on Earth, Uzbekistan boasts a
          historical legacy dating back thousands of years. Archaeological
          evidence reveals that it served as a cradle for human civilization,
          with traces of habitation dating back to the early Paleolithic era.
          The region witnessed the presence of Neanderthals and flourished with
          the masterian culture, leaving an indelible mark on its storied past.
        </p>
      ),
    },
    {
      key: 3,
      label: "Cultural Heritage",
      children: (
        <p>
          Uzbekistan is a treasure trove of cultural wonders, where ancient
          traditions seamlessly blend with modern life. From the bustling
          markets of Tashkent to the timeless beauty of Samarkand's Registan
          Square, every corner of this country whispers stories of bygone eras.
          The vibrant customs, traditional clothing, and lively music and dance
          forms create a rich cultural mosaic, inviting visitors to immerse
          themselves in the tapestry of Uzbekistan's heritage. Prepare to be
          captivated by the allure of Uzbekistan – a nation that invites you to
          explore its history, indulge in its traditions, and experience the
          warmth of its hospitality. Your journey through time and culture
          begins here!
        </p>
      ),
    },
  ];
  const secondSection = [
    {
      key: 1,
      label: "Overview of Archaeological Findings",
      children: (
        <p>
          The early Paleolithic era left an indelible mark on Uzbekistan, with
          archaeological findings revealing it as one of the oldest human
          habitats. Excavations in the Baysun-Tau mountains have unearthed
          dwellings that date back to this ancient period. Tools and artifacts
          from Samarkand further attest to the region's significance as a cradle
          of human civilization during the Paleolithic era.
        </p>
      ),
    },
    {
      key: 2,
      label: "Neanderthal and Masterian Cultures",
      children: (
        <p>
          As we traverse through the annals of time, evidence points to the
          presence of Neanderthals in Uzbekistan during the late Paleolithic
          era. The Teshik-Tash cave stands as a testament to their existence,
          adorned with masterian culture artifacts. This era not only signifies
          human survival but also the evolution of distinct cultures that have
          left an enduring imprint on Uzbekistan's heritage.
        </p>
      ),
    },
    {
      key: 3,
      label: "Impact of Past Empires",
      children: (
        <p>
          Uzbekistan's history is a tale woven with the threads of mighty
          empires that rose and fell, shaping the destiny of the region. From
          the conquests of Alexander the Great to the Silk Road's influence,
          each era brought new cultural, economic, and architectural influences.
          The empires of Timur and the Silk Road trade routes left an
          everlasting impact, contributing to the vibrant tapestry of
          Uzbekistan's history. As we explore the echoes of the past, we unravel
          the layers of time that have molded Uzbekistan into the culturally
          rich and historically significant nation it is today. Join us in a
          journey through time, where the past speaks to the present, inviting
          you to witness the enduring legacy of Uzbekistan's historical marvels.
        </p>
      ),
    },
  ];
  const thirdSection = [
    {
      key: 1,
      label: "Traditional Clothing",
      children: (
        <p>
          Uzbekistan's rich cultural diversity is eloquently expressed through
          its traditional clothing. Men often don the distinctive Uzbek chapans,
          while women grace the streets in the vibrant and intricately
          embroidered dresses known as Atlas and Adras. These garments are not
          just attire; they are a living testament to the artistic craftsmanship
          passed down through generations.
        </p>
      ),
    },
    {
      key: 2,
      label: "Music and Dance",
      children: (
        <p>
          The soul-stirring melodies of traditional Uzbek music reverberate
          through the air during celebrations and gatherings. Experience the
          rhythmic movements of traditional dances like "Lazgi" and "Beshiktoi"
          that showcase the grace and storytelling embedded in Uzbek culture.
          These artistic expressions are more than performances; they are a
          celebration of life and community.
        </p>
      ),
    },
    {
      key: 3,
      label: "Hospitality",
      children: (
        <p>
          Uzbekistan is renowned for its warm hospitality, where guests are
          treated with utmost respect and generosity. It is customary to welcome
          visitors with open arms, often accompanied by traditional sweets and
          green tea. The concept of "Mehmondo'stlik" (hospitality) is deeply
          ingrained in Uzbek culture, creating an atmosphere of warmth and
          camaraderie.
        </p>
      ),
    },
    {
      key: 4,
      label: "Plov - A Culinary Tradition",
      children: (
        <p>
          Plov, a savory rice dish cooked with meat, vegetables, and aromatic
          spices, is not just a meal but a cultural institution in Uzbekistan.
          The preparation of plov is a communal affair, often involving family
          and friends. This culinary tradition symbolizes unity and the joy of
          shared moments around a table.
        </p>
      ),
    },
    {
      key: 6,
      label: "Navruz",
      children: (
        <p>
          Navruz, the Persian New Year, is a festival celebrated with exuberance
          and joy across Uzbekistan. Witness the country come alive with vibrant
          street processions, traditional performances, and the iconic "Sumalak"
          preparation. Navruz symbolizes the renewal of nature, and the
          festivities are a testament to the resilience and spirit of the Uzbek
          people.
        </p>
      ),
    },
    {
      key: 7,
      label: "Navruz",
      children: (
        <p>
          Celebrate the Silk and Spice Festival, a homage to Uzbekistan's
          historical role as a vital point on the Silk Road. The event showcases
          traditional crafts, vibrant performances, and the richness of
          Uzbekistan's cultural diversity. It's a sensory feast that transports
          visitors back in time while celebrating the present.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Uzbekistan</title>
      </Head>
      <div className="uzbekistan pt_70">
        <div className="uzbekistan_wrapper">
          <div className="background_section">
            <div className="this_wrapper">
              <Container>
                <div className="content">
                  <div className="wrap">
                    <h1>
                      Uzbekistan Unveiled: Navigating Timeless Traditions and
                      Rich Historical Tapestry
                    </h1>
                    <p>
                      Discover the heart of the Silk Road, enjoy Uzbek cuisine,
                      embrace hospitable people and experience an unforgettable
                      journey like you have never experienced before.
                    </p>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <Container>
            <div className="all_content">
              <div className="wrapper">
                <div className="sections">
                  <div className="section culture">
                    <h2>Culture Uzbekistan</h2>
                    <p>
                      Welcome to Uzbekistan, a captivating country nestled in
                      the heart of Central Asia. Let's embark on a journey
                      through this enchanting country, where history and culture
                      converge in a seamless tapestry.
                    </p>
                    <div className="sub_informations">
                      <div className="col">
                        <Collapse
                          items={firstSection}
                          defaultActiveKey={["1"]}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="you_tube_video">
                  <h2>Video about Uzbekistan</h2>
                  <iframe
                    width="100%"
                    height="600"
                    src="https://www.youtube.com/embed/xlKxZweINyE"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                  ></iframe>
                </div>

                <div className="sections">
                  <div className="section culture">
                    <h2> Historical Marvels: Echoes of the Past</h2>
                    <p>
                      Delve into the fascinating archaeological tapestry of
                      Uzbekistan, where each layer unveils echoes of the past,
                      shaping the nation's rich history.
                    </p>
                    <div className="sub_informations">
                      <div className="col">
                        <Collapse
                          items={secondSection}
                          defaultActiveKey={["1"]}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sections">
                  <div className="section culture">
                    <h2>Cultural Heritage: Vibrant Traditions and Customs</h2>
                    <p>
                      Immerse yourself in the kaleidoscope of Uzbekistan's
                      cultural heritage, where age-old traditions blend
                      seamlessly with the vibrancy of contemporary life.
                    </p>
                    <div className="sub_informations">
                      <div className="col">
                        <Collapse
                          items={thirdSection}
                          defaultActiveKey={["1"]}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sections">
                  <div className="section cities">
                    <h2>Uzbekistan cities</h2>
                    <div className="cities_wrapper">
                      <div className="slider">
                        <Swiper
                          spaceBetween={20}
                          slidesPerView={3}
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
                              slidesPerView: 3,
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
                                <div className="city" key={city.id}>
                                  <div className="city_wrap">
                                    <Link href={`/cities/${city.seo_url}`}>
                                      <div className="city_image">
                                        <img
                                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/city/${city.main_image}`}
                                          alt={`${city.name_en}`}
                                        />
                                      </div>
                                      <div className="city_name">
                                        <h3>{city.name_en}</h3>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </div>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hot_tours"></div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      ;
    </>
  );
}

export default AboutUzbekistan;
