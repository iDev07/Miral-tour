import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "animate.css";
function Banners() {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

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
                  <Link href={"/business-tours"}>
                    <div className="swiper_banner">
                      <div className="swiper_banner_wrap">
                        <div className="sw_banner_image">
                          <img src="/img/test.png" alt="Miral Tour - Banner " />
                        </div>
                        <div className="banner_content">
                          <div className="business_slide">
                            <div className="wrapper">
                              <div className="contentbox">
                                <div className="top_img">
                                  <img
                                    src="/img/logo_white.png"
                                    alt="Miral Tour - Banner "
                                  />
                                </div>
                                <div className="texts">
                                  <h1>{t("hero.titleBusiness")}</h1>
                                  <p>{t("hero.subTitleBusiness")}</p>
                                  <Link href={"/business-tours"}>
                                    {t("business.formBtn")}
                                  </Link>
                                </div>
                              </div>
                              <div className="absolute_texts"></div>
                            </div>
                          </div>
                          {/* <div className="if_bottom">
                            <div className="title">
                              <h2 className="animate_animated animate__backInUp">
                                Samarkand - Crossroads of cultures
                              </h2>
                            </div>
                            <div className="read_more">
                              <Link href="/cities/samarkand">Read more</Link>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href={"/tourpackage/1"}>
                    <div className="swiper_banner">
                      <div className="swiper_banner_wrap">
                        <div className="sw_banner_image">
                          <img
                            src="/img/banner_new.jpg"
                            alt="Miral Tour - Banner "
                          />
                        </div>
                        <div className="banner_content">
                          <div className="if_bottom">
                            <div className="title">
                              <h2 className="animate_animated animate__backInUp">
                                {/* Samarkand - Crossroads of cultures */}
                              </h2>
                            </div>
                            {/* <div className="read_more">
                              <Link href="/cities/samarkand">Read more</Link>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper_banner">
                    <div className="swiper_banner_wrap">
                      <Link href={""}>
                        <div className="sw_banner_image">
                          <img
                            src="https://admin.all4u-tour.uz/images/tour/%D0%A1%D0%B5%D0%BC%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9%20%D1%82%D1%83%D1%80%20%D0%B2%20%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD.jpg"
                            alt="Miral Tour - Banner "
                          />
                        </div>
                      </Link>
                      <div className="banner_content">
                        <div className="if_bottom">
                          <div className="title">
                            <h2>{t("hero.bannerTitle1")}</h2>
                          </div>
                          <div className="read_more">
                            <Link href="/cities/tashkent">
                              {t("business.formBtn")}
                            </Link>
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
                          alt="Miral Tour - Banner "
                        />
                      </div>
                      <div className="banner_content">
                        <div className="if_bottom">
                          <div className="title">
                            <h2>{t("hero.bannerTitle2")}</h2>
                          </div>
                          <div className="read_more">
                            <Link href="/cities/ferghana">
                              {" "}
                              {t("business.formBtn")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* <div className="small_banners">
              <div className="banner">
                <div className="banner_wrap">
                  <div className="banner_image">
                    <Link href="/tourpackage/53">
                      <img src="/img/tour53.jpg" alt="Miral Tour" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="banner">
                <div className="banner_wrap">
                  <div className="banner_image">
                    <a href="">
                      <img src="img/.webp" alt="Miral Tour" />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Banners;
