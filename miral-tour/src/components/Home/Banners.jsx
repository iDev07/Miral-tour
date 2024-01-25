import React from "react";
import Link from "next/link";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
function Banners() {
  return (
    <div className="Banners">
      <div className="banners_wrap">
        <Container>
          <div className="sliders">
            <div className="swiper_slides">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper_banner">
                    <div className="swiper_banner_wrap">
                      <div className="sw_banner_image">
                        <img
                          src="img/banner1.jpg"
                          alt="Turbotour - Banner Samarqand"
                        />
                      </div>
                      <div className="banner_content">
                        <div className="if_bottom">
                          <div className="title">
                            {/* <h2>Silk Road tour in Uzbekistan</h2> */}
                          </div>
                          <div className="read_more">
                            <Link href="">Read more</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper_banner">
                    <div className="swiper_banner_wrap">
                      <Link href={""}>
                        <div className="sw_banner_image">
                          <img
                            src="https://admin.all4u-tour.uz/images/tour/%D0%A1%D0%B5%D0%BC%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9%20%D1%82%D1%83%D1%80%20%D0%B2%20%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD.jpg"
                            alt="Turbotour - Banner Samarqand"
                          />
                        </div>
                      </Link>
                      <div className="banner_content">
                        <div className="if_bottom">
                          <div className="title">
                            <h2>Do you know about Tashkent?</h2>
                          </div>
                          <div className="read_more">
                            <Link href="/cities/tashkent">Read more</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="swiper_banner">
                    <div className="swiper_banner_wrap">
                      <div className="sw_banner_image">
                        <img
                          src="https://admin.all4u-tour.uz/images/tour/%D0%A2%D1%83%D1%80%20%D0%B2%20%D0%A4%D0%B5%D1%80%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D1%83%D1%8E%20%D0%B4%D0%BE%D0%BB%D0%B8%D0%BD%D1%83.jpeg"
                          alt="Turbotour - Banner Samarqand"
                        />
                      </div>
                      <div className="banner_content">
                        <div className="if_bottom">
                          <div className="title">
                            <h2>Do you know about Valley Fergana?</h2>
                          </div>
                          <div className="read_more">
                            <Link href="">Read more</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="small_banners">
              <div className="banner">
                <div className="banner_wrap">
                  <div className="banner_image">
                    <a href="">
                      <img src="img/small_b_1.webp" alt="Turbotour" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="banner">
                <div className="banner_wrap">
                  <div className="banner_image">
                    <a href="">
                      <img src="img/samarqand.webp" alt="Turbotour" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Banners;
