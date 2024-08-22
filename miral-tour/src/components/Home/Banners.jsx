import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "animate.css";
import i18n from "../../../i18n";
function Banners() {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;
  const banner_uz = "/img/banner_uz.jpg";
  const banner_ru = "/img/banner_ru.jpg";
  const banner_it = "/img/banner_it.jpg";
  const banner_tr = "/img/banner_tr.jpg";
  const banner_en = "/img/banner_en.jpg";
  return (
    <div className="Banners">
      <div className="banners_wrap">
        <Container>
          <div className="sliders">
            <div className="swiper_slides">
              <Swiper
                navigation={true}
                autoplay={false}
                speed={1200}
                modules={[Navigation, Autoplay]}
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
                  {/* <Link href={"/"}> */}
                  <div className="swiper_banner">
                    <div className="swiper_banner_wrap">
                      <Link href={"/about-uzbekistan"}>
                        <div className="sw_banner_image">
                          {i18n.language === "uz" ? (
                            <img src={banner_uz} alt="Miral Tour Banner" />
                          ) : i18n.language === "ru" ? (
                            <img src={banner_ru} alt="Miral Tour Banner" />
                          ) : i18n.language === "it" ? (
                            <img src={banner_it} alt="Miral Tour Banner" />
                          ) : i18n.language === "tr" ? (
                            <img src={banner_tr} alt="Miral Tour Banner" />
                          ) : (
                            <img src={banner_en} alt="Miral Tour Banner" />
                          )}
                        </div>
                      </Link>
                      {/* <div className="banner_content">
                          <div className="if_bottom">
                            <div className="title title_3">
                              <h2>WELCOME TO UZBEKISTAN</h2>
                            </div>
                          </div>
                        </div> */}
                    </div>
                  </div>
                  {/* </Link> */}
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
