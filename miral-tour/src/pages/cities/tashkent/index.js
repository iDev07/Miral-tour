import Head from "next/head";
import React from "react";
import ImageGallery from "react-image-gallery";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "react-image-gallery/styles/css/image-gallery.css";
import "animate.css";
import { Button } from "antd";
import Link from "next/link";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function Tashkent() {
  const background_image =
    "https://uzbekistan.travel/storage/app/uploads/public/5eb/309/161/thumb_754_1920_0_0_0_auto.jpg";
  return (
    <>
      <Head>
        <title>Tashkent</title>
      </Head>
      <div className="city_about">
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
                  Tashkent
                </h1>
              </div>
            </div>
          </div>
          <Container>
            <div className="content_boxes">
              <div className="left_content_box">
                <section>
                  <div className="city_about">
                    <div className="title">
                      <h1 className="title_section">
                        Tashkent – The modern metropolis
                      </h1>
                    </div>
                    <div className="description_section">
                      <p>
                        Tashkent is the capital of Uzbekistan and also the
                        largest city in Central Asia.
                      </p>
                    </div>
                    <div className="description_section">
                      For many years, Tashkent has been the most important
                      business and cultural center of the country, attracting
                      tourists and businessmen from various countries of the
                      world.
                    </div>
                    <div className="description_image">
                      <img
                        src="https://uzbekistan.travel/storage/app/media/citys/5e53c06ca0049049451193.jpg"
                        alt="Tashkent Uzbekistan Turbo Tour"
                      />
                    </div>
                  </div>
                </section>
                <section>
                  <div className="city_attractions">
                    <h1 className="title_section">Popular landmarks</h1>
                    <div className="attractions_description">
                      <p className="description_section">
                        Tashkent has a large list of attractions. It will take
                        several days to visit all of them. <br /> ✔️ Wide
                        avenues, green alleys, fountains and eco-parks for
                        leisurely walks;
                        <br /> ✔️ Unique artifacts about the history and culture
                        of the peoples of Central Asia in the numerous museums
                        of the city; <br /> ✔️ Majestic architectural ensembles,
                        mosques and minarets; <br /> ✔️ Theaters and galleries
                        for every taste. Here everyone can create his or her own
                        itinerary through the top attractions of the city!
                      </p>
                    </div>
                    <div className="attractions_slider">
                      <div className="silder_wrapper">
                        <Swiper
                          spaceBetween={50}
                          slidesPerView={3}
                          slidesPerGroup={1}
                          loop={true}
                          navigation={true}
                          modules={[Navigation]}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <div
                              className="slide"
                              style={{
                                background: `url(https://uzbekistan.travel/storage/app/uploads/public/5e9/ea1/3d1/thumb_690_600_0_0_0_auto.jpg)`,
                              }}
                            >
                              <Link href={"/places/"}>
                                <div className="slide_wrapper">
                                  <div className="name_attraction">
                                    <h3>National Library of Uzbekistan</h3>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div
                              className="slide"
                              style={{
                                background: `url(https://uzbekistan.travel/storage/app/uploads/public/5e9/ea1/3d1/thumb_690_600_0_0_0_auto.jpg)`,
                              }}
                            >
                              <Link href={"/places/"}>
                                <div className="slide_wrapper">
                                  <div className="name_attraction">
                                    <h3>National Library of Uzbekistan</h3>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div
                              className="slide"
                              style={{
                                background: `url(https://uzbekistan.travel/storage/app/uploads/public/5e9/ea1/3d1/thumb_690_600_0_0_0_auto.jpg)`,
                              }}
                            >
                              <Link href={"/places/"}>
                                <div className="slide_wrapper">
                                  <div className="name_attraction">
                                    <h3>National Library of Uzbekistan</h3>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div
                              className="slide"
                              style={{
                                background: `url(https://uzbekistan.travel/storage/app/uploads/public/5e9/ea1/3d1/thumb_690_600_0_0_0_auto.jpg)`,
                              }}
                            >
                              <Link href={"/places/"}>
                                <div className="slide_wrapper">
                                  <div className="name_attraction">
                                    <h3>National Library of Uzbekistan</h3>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="city_photo360">
                    <div className="photo360_wrapper">
                      <h1 className="title_section">Photo 360</h1>
                      <iframe
                        src="https://momento360.com/e/u/b84ed8e07d1e43dcaeec74d89ca3232b?utm_campaign=embed&amp;utm_source=other&amp;heading=-4.927999999999997&amp;pitch=-0.6159999999999997&amp;field-of-view=77"
                        width="100%"
                        height="600"
                        frameborder="0"
                        allowfullscreen="allowfullscreen"
                      ></iframe>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="city_video">
                    <div className="video_wrapper">
                      <h1 className="title_section">Video about city</h1>
                      <iframe
                        width="1090"
                        height="480"
                        src="https://www.youtube.com/embed/P8fcfqagsC0"
                        title="Invest in Tashkent"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="city_gallery">
                    <div className="gallery_wrapper">
                      <h1 className="title_section">Photo gallery</h1>
                      <ImageGallery items={images} />
                    </div>
                  </div>
                </section>

                <section>
                  <div className="city_climate">
                    <div className="climate_wrapper">
                      <h1 className="title_section">Climate 🌡</h1>
                      <p className="description_section">
                        Most time of the summer in Tashkent is hot, so do not
                        forget about sunscreen and hats! Winter is mostly mild
                        and snowless, but do not neglect warm things, it is so
                        cool in the evening that you want to wear a scarf!
                      </p>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="city_gifts">
                    <div className="climate_wrapper">
                      <h1 className="title_section">Gifts and souvenirs 🛍</h1>
                      <p className="description_section">
                        Walking along the streets of Tashkent, you can find many
                        memorable things, ranging from small trinkets to huge
                        memorable souvenirs. Most of the souvenir workshops are
                        located in old madrassas and at Chorsu Bazaar. There you
                        can find absolutely everything: crafts carved from wood,
                        pottery, national clothes, and even knives and daggers
                        forged in local forges.
                      </p>
                      <div className="images_section">
                        <div className="images_wrapper">
                          <div className="image">
                            <img
                              src="https://uzbekistan.travel/storage/app/media/uploaded-files/UZB_2454.jpg"
                              alt="Gifts Turbo Tour"
                            />
                            <img
                              src="https://uzbekistan.travel/storage/app/media/uploaded-files/DSC_1562.jpg"
                              alt="Gifts Turbo Tour"
                            />
                            <img
                              src="https://uzbekistan.travel/storage/app/media/fed/cropped-images/B52I5336-0-0-0-0-1583734875.jpg"
                              alt="Gifts Turbo Tour"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="buy_gifts">
                        <Button>Buy souvenirs and gifts online</Button>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="city_cuisine">
                    <div className="cuisine_wrapper">
                      <h1 className="title_section">Сuisine 🍽</h1>
                      <p className="description_section">
                        Tashkent restaurants with their variety and the level of
                        service can surprise any gourmet. In the city, you can
                        find not only national cuisine, which in Tashkent
                        differs in taste from the identical dishes in the other
                        parts of the country, but also the best representatives
                        of the foreign gastronomic industry. In Tashkent, you
                        can try Uyghur, Korean, Chinese, Japanese, European and
                        even molecular cuisine. However, the most delicious
                        cuisine is naturally Uzbek! Did you know that in
                        December 2016 pilaf was included in the UNESCO
                        Intangible Heritage List? Now you know it! Come to see
                        and taste the most delicious food in the world! You can
                        read more about the national cuisine of Uzbekistan at
                        this link.
                      </p>
                      <div className="images_section">
                        <div className="images_wrapper">
                          <div className="image">
                            <img
                              src="https://uzbekistan.travel/storage/app/media/uploaded-files/osh.jpg"
                              alt="Gifts Turbo Tour"
                            />
                            <img
                              src="https://uzbekistan.travel/storage/app/media/uploaded-files/shashlik.jpg"
                              alt="Gifts Turbo Tour"
                            />
                            <img
                              src="https://uzbekistan.travel/storage/app/media/fed/cropped-images/photo9-0-0-0-0-1583736103.jpg"
                              alt="Gifts Turbo Tour"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="buy_gifts">
                        <Button>Buy souvenirs and gifts online</Button>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="city_photo_zones">
                    <div className="photo_zones_wrapper">
                      <h1 className="title_section">Photo zones 🙋‍♂️</h1>
                      <p className="description_section">
                        An integral part of every trip is photography! In this
                        section, we introduce you the most beautiful places in
                        this city, where you can make the best shots. P.S. Do
                        not forget that during the visit the religious sights of
                        Uzbekistan, women are advisable to cover the exposed
                        parts of the body (shoulders, back and legs). Such
                        attractions will be marked with ☪✝✡☦
                      </p>
                      <div className="zone">
                        <img
                          className="zone_image"
                          src="https://uzbekistan.travel/storage/app/media/uploaded-files/mm.jpg"
                          alt="Photo Zones Uzbekistan Turbo Tour Tashkent"
                        />
                        <p className="description_section">
                          ☪️ The Minor Mosque was built in 2014 and immediately
                          fell in love with all residents and guests of the
                          capital. It is made of white marble and is located in
                          a picturesque place.
                        </p>
                      </div>
                      <div className="zone">
                        <img
                          className="zone_image"
                          src="https://uzbekistan.travel/storage/app/media/uploaded-files/mm.jpg"
                          alt="Photo Zones Uzbekistan Turbo Tour Tashkent"
                        />
                        <p className="description_section">
                          ☪️ The Minor Mosque was built in 2014 and immediately
                          fell in love with all residents and guests of the
                          capital. It is made of white marble and is located in
                          a picturesque place.
                        </p>
                      </div>
                      <div className="zone">
                        <img
                          className="zone_image"
                          src="https://uzbekistan.travel/storage/app/media/uploaded-files/mm.jpg"
                          alt="Photo Zones Uzbekistan Turbo Tour Tashkent"
                        />
                        <p className="description_section">
                          ☪️ The Minor Mosque was built in 2014 and immediately
                          fell in love with all residents and guests of the
                          capital. It is made of white marble and is located in
                          a picturesque place.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="city_history">
                    <div className="history_wrapper">
                      <h1 className="title_section">History 🏺</h1>
                      <p className="description_section">
                        Tashkent is the capital of Uzbekistan and, concurrently,
                        the largest city in Central Asia. In 2008, the
                        archaeologists announced that the city is already 2,200
                        years old. One of the first mentions of the city was
                        found in the chronicles written in the II century BC. In
                        the ancient Chinese sources, Tashkent was called “Shi”,
                        which means stone, and in the early Middle Ages, Shash
                        or Chach
                      </p>
                      <div className="history_place">
                        <img
                          src="https://uzbekistan.travel/storage/app/media/uploaded-files/kukaldosh.jpg"
                          alt="Historical Place Tashkent Uzbekistan Turbo Tour"
                        />
                        <p className="description_section">
                          The scientists concluded that the Turkic tribes who
                          settled on this territory later borrowed the name, as
                          “tash” in the Turkic languages also translated as
                          stone. Due to its favorable location, the city was
                          considered one of the main points on the Silk Road.
                          Nowadays, Tashkent is a modern metropolis and
                          perfectly combines medieval buildings and modern
                          business centres in its architecture. The city has all
                          the conditions for a wonderful pastime. Here long-term
                          history and modern lifestyle are merged. There are two
                          international airports and two railway stations in
                          Tashkent. One of the main modern attractions of the
                          city is the metro. It was opened in 1977 and was the
                          first and the only in Central Asia. Each station has
                          its own unique design and unique architecture.
                        </p>
                      </div>
                      <div className="history_place">
                        <img
                          src="https://uzbekistan.travel/storage/app/media/uploaded-files/metro.jpg"
                          alt="Historical Place Tashkent Uzbekistan Turbo Tour"
                        />
                        <p className="description_section">
                          In Tashkent, you can see historical monuments and
                          modern mosques, stroll through the oriental bazaars,
                          get acquainted with the thousand-year history and
                          culture of the people in the capital’s museums, and,
                          of course, relax in the parks, restaurants and
                          nightlife of the city
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="right_sidebar"></div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Tashkent;
