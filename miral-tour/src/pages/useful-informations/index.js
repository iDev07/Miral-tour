import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Head from "next/head";
import { Select, Collapse } from "antd";
function Usefuls() {
  const { t } = useTranslation();
  const [continent, setContinent] = useState(1);
  const [country, setCountry] = useState(1);
  const continentChange = (value) => {
    setContinent(value);
  };
  const countryChange = (value) => {
    setCountry(value);
  };

  const continents = [
    { label: t("continents.europe"), value: 1 },
    { label: t("continents.asia"), value: 2 },
    { label: t("continents.midEast"), value: 3 },
    { label: t("continents.nAmerica"), value: 4 },
  ];
  const euro_countries = [
    { label: t("euro_countries.russia"), value: 1 },
    { label: t("euro_countries.germany"), value: 2 },
    { label: t("euro_countries.france"), value: 3 },
    { label: t("euro_countries.uk"), value: 4 },
    { label: t("euro_countries.italy"), value: 5 },
    { label: t("euro_countries.spain"), value: 6 },
    { label: t("euro_countries.latvia"), value: 7 },
    { label: t("euro_countries.turkey"), value: 8 },
  ];

  const asia_countries = [
    { label: t("asia_countries.china"), value: 9 },
    { label: t("asia_countries.southKorea"), value: 10 },
    { label: t("asia_countries.japan"), value: 11 },
    { label: t("asia_countries.india"), value: 12 },
    { label: t("asia_countries.kazakhstan"), value: 13 },
    { label: t("asia_countries.kyrgyzstan"), value: 14 },
    { label: t("asia_countries.tajikistan"), value: 15 },
    { label: t("asia_countries.turkmenistan"), value: 16 },
    { label: t("asia_countries.malaysia"), value: 17 },
    { label: t("asia_countries.thailand"), value: 18 },
    { label: t("asia_countries.indonesia"), value: 19 },
  ];

  const middle_east_countries = [
    { label: t("middle_east_countries.uae"), value: 20 },
    { label: t("middle_east_countries.turkey"), value: 21 },
    { label: t("middle_east_countries.israel"), value: 22 },
    { label: t("middle_east_countries.saudiArabia"), value: 23 },
    { label: t("middle_east_countries.qatar"), value: 24 },
    { label: t("middle_east_countries.kuwait"), value: 25 },
    { label: t("middle_east_countries.oman"), value: 26 },
    { label: t("middle_east_countries.iran"), value: 27 },
  ];

  const north_america_countries = [
    { label: t("north_america_countries.usa"), value: 28 },
  ];

  const russia_cities = [
    { label: t("russia_cities.moscow"), value: 1 },
    { label: t("russia_cities.saintPetersburg"), value: 2 },
    { label: t("russia_cities.yekaterinburg"), value: 3 },
    { label: t("russia_cities.kazan"), value: 4 },
    { label: t("russia_cities.novosibirsk"), value: 5 },
    { label: t("russia_cities.samara"), value: 6 },
  ];

  const germany_cities = [
    { label: t("germany_cities.frankfurt"), value: 7 },
    { label: t("germany_cities.munich"), value: 8 },
  ];

  const france_cities = [{ label: t("france_cities.paris"), value: 9 }];

  const uk_cities = [{ label: t("uk_cities.london"), value: 10 }];

  const italy_cities = [{ label: t("italy_cities.milan"), value: 11 }];

  const spain_cities = [{ label: t("spain_cities.barcelona"), value: 12 }];

  const latvia_cities = [{ label: t("latvia_cities.riga"), value: 13 }];

  const turkey_cities = [
    { label: t("turkey_cities.istanbul"), value: 14 },
    { label: t("turkey_cities.ankara"), value: 15 },
  ];

  const china_cities = [
    { label: t("china_cities.beijing"), value: 16 },
    { label: t("china_cities.urumqi"), value: 17 },
  ];

  const south_korea_cities = [
    { label: t("south_korea_cities.seoul"), value: 18 },
  ];

  const japan_cities = [{ label: t("japan_cities.tokyo"), value: 19 }];

  const india_cities = [{ label: t("india_cities.delhi"), value: 20 }];

  const kazakhstan_cities = [
    { label: t("kazakhstan_cities.nurSultan"), value: 21 },
    { label: t("kazakhstan_cities.almaty"), value: 22 },
  ];

  const kyrgyzstan_cities = [
    { label: t("kyrgyzstan_cities.bishkek"), value: 23 },
  ];

  const tajikistan_cities = [
    { label: t("tajikistan_cities.dushanbe"), value: 24 },
  ];

  const turkmenistan_cities = [
    { label: t("turkmenistan_cities.ashgabat"), value: 25 },
  ];

  const malaysia_cities = [
    { label: t("malaysia_cities.kualaLumpur"), value: 26 },
  ];

  const thailand_cities = [{ label: t("thailand_cities.bangkok"), value: 27 }];

  const indonesia_cities = [
    { label: t("indonesia_cities.jakarta"), value: 28 },
  ];

  const uae_cities = [
    { label: t("uae_cities.dubai"), value: 29 },
    { label: t("uae_cities.sharjah"), value: 30 },
  ];

  const israel_cities = [{ label: t("israel_cities.telAviv"), value: 31 }];

  const saudi_arabia_cities = [
    { label: t("saudi_arabia_cities.jeddah"), value: 32 },
    { label: t("saudi_arabia_cities.riyadh"), value: 33 },
  ];

  const qatar_cities = [{ label: t("qatar_cities.doha"), value: 34 }];

  const kuwait_cities = [{ label: t("kuwait_cities.kuwaitCity"), value: 35 }];

  const oman_cities = [{ label: t("oman_cities.muscat"), value: 36 }];

  const iran_cities = [{ label: t("iran_cities.tehran"), value: 37 }];

  const usa_cities = [{ label: t("usa_cities.newYork"), value: 38 }];

  const asia_visa = [
    { id: 1, name: t("asia_visa.japan") },
    { id: 2, name: t("asia_visa.korea") },
    { id: 3, name: t("asia_visa.china") },
    { id: 4, name: t("asia_visa.malaysia") },
    { id: 5, name: t("asia_visa.india") },
    { id: 6, name: t("asia_visa.israel") },
    { id: 7, name: t("asia_visa.iran") },
    { id: 8, name: t("asia_visa.saudi_arabia") },
    { id: 9, name: t("asia_visa.uae") },
  ];

  const cis_visa = [
    { id: 1, name: t("cis_visa.russia") },
    { id: 2, name: t("cis_visa.kazakhstan") },
    { id: 3, name: t("cis_visa.kyrgyzstan") },
    { id: 4, name: t("cis_visa.tajikistan") },
    { id: 5, name: t("cis_visa.armenia") },
    { id: 6, name: t("cis_visa.belarus") },
    { id: 7, name: t("cis_visa.moldova") },
    { id: 8, name: t("cis_visa.ukraine") },
  ];

  const european_visa = [
    { id: 1, name: t("european_visa.germany") },
    { id: 2, name: t("european_visa.france") },
    { id: 3, name: t("european_visa.italy") },
    { id: 4, name: t("european_visa.spain") },
    { id: 5, name: t("european_visa.latvia") },
    { id: 6, name: t("european_visa.lithuania") },
    { id: 7, name: t("european_visa.estonia") },
    { id: 8, name: t("european_visa.switzerland") },
    { id: 9, name: t("european_visa.sweden") },
    { id: 10, name: t("european_visa.norway") },
    { id: 11, name: t("european_visa.denmark") },
    { id: 12, name: t("european_visa.netherlands") },
    { id: 13, name: t("european_visa.uk") },
  ];

  const middle_east_visa = [
    { id: 1, name: t("middle_east_visa.turkey") },
    { id: 2, name: t("middle_east_visa.qatar") },
    { id: 3, name: t("middle_east_visa.oman") },
    { id: 4, name: t("middle_east_visa.kuwait") },
  ];

  const north_america_visa = [
    { id: 1, name: t("north_america_visa.usa") },
    { id: 2, name: t("north_america_visa.canada") },
  ];

  return (
    <>
      <Head>
        <title>{t("usefulsPage.title")}</title>
      </Head>
      <div className="Usefuls pt_70">
        <div className="usefuls_wrap">
          <div className="background_section">
            <div className="background_wrapper">
              <Container>
                <div className="content_grid">
                  <div className="intro">
                    <div className="title_wrap">
                      <h1 className="wrap_spans">
                        <span className="span1">
                          {t("usefulsPage.introTitleSpan1")}
                        </span>{" "}
                        <span className="span2">
                          {t("usefulsPage.introTitleSpan2")}
                        </span>{" "}
                        <span className="span3">
                          {t("usefulsPage.introTitleSpan3")}
                        </span>
                      </h1>
                    </div>
                    <p>{t("usefulsPage.introDesc")}</p>
                    {/* <Link href="#contactus">
                      {t("usefulsPage.readMore")}
                      <ArrowOutwardIcon />{" "}
                    </Link> */}
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <Container>
            <div className="tours_thematic section">
              <div className="title">
                <div className="tag">
                  <p>{t("usefulsPage.tours")}</p>
                </div>
                <div className="text">
                  <h1>
                    {t("usefulsPage.tTitle1")} {""}
                    <span>{t("usefulsPage.tTitle2")}</span>{" "}
                    {t("usefulsPage.tTitle3")}
                  </h1>
                </div>
              </div>
              <div className="tour_cards">
                <div className="tour_cards_wrap">
                  <div className="tour_card">
                    <div className="tour_card_wrap">
                      <img
                        className="visible"
                        src="/img/thematic_1.png        "
                        alt="Miral Tour"
                      />
                      <div className="content">
                        <div className="tour_name">
                          <h2>нефритовое озеро</h2>
                        </div>
                        <div className="half_visible">
                          <div className="months">
                            <div className="month">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.1875 5.68164H12.8125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.125 5.3125V10.625C13.125 12.5 12.1875 13.75 10 13.75H5C2.8125 13.75 1.875 12.5 1.875 10.625V5.3125C1.875 3.4375 2.8125 2.1875 5 2.1875H10C12.1875 2.1875 13.125 3.4375 13.125 5.3125Z"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 8.5625H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 10.4375H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 8.5625H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 10.4375H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 8.5625H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 10.4375H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <p>September</p>
                            </div>
                            <div className="month">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.1875 5.68164H12.8125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.125 5.3125V10.625C13.125 12.5 12.1875 13.75 10 13.75H5C2.8125 13.75 1.875 12.5 1.875 10.625V5.3125C1.875 3.4375 2.8125 2.1875 5 2.1875H10C12.1875 2.1875 13.125 3.4375 13.125 5.3125Z"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 8.5625H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 10.4375H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 8.5625H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 10.4375H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 8.5625H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 10.4375H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <p>September</p>
                            </div>
                            <div className="month">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.1875 5.68164H12.8125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.125 5.3125V10.625C13.125 12.5 12.1875 13.75 10 13.75H5C2.8125 13.75 1.875 12.5 1.875 10.625V5.3125C1.875 3.4375 2.8125 2.1875 5 2.1875H10C12.1875 2.1875 13.125 3.4375 13.125 5.3125Z"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 8.5625H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 10.4375H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 8.5625H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 10.4375H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 8.5625H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 10.4375H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <p>September</p>
                            </div>
                          </div>
                          <div className="desc">
                            <p>
                              Озеро Урунгач находится в Бостанлыкском районе
                              Ташкентской области Узбекистана. Оно расположено
                              на территории Угам-Чаткальского национального
                              парка, в 160 километрах от города Ташкента.
                            </p>
                          </div>
                          <div className="read_more">
                            <Link href={"?"}>
                              Подробный <ArrowOutwardIcon />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tour_card">
                    <div className="tour_card_wrap">
                      <img
                        className="visible"
                        src="/img/thematic_1.png        "
                        alt="Miral Tour"
                      />
                      <div className="content">
                        <div className="tour_name">
                          <h2>нефритовое озеро</h2>
                        </div>
                        <div className="half_visible">
                          <div className="months">
                            <div className="month">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.1875 5.68164H12.8125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.125 5.3125V10.625C13.125 12.5 12.1875 13.75 10 13.75H5C2.8125 13.75 1.875 12.5 1.875 10.625V5.3125C1.875 3.4375 2.8125 2.1875 5 2.1875H10C12.1875 2.1875 13.125 3.4375 13.125 5.3125Z"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 8.5625H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 10.4375H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 8.5625H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 10.4375H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 8.5625H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 10.4375H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <p>September</p>
                            </div>
                            <div className="month">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.1875 5.68164H12.8125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.125 5.3125V10.625C13.125 12.5 12.1875 13.75 10 13.75H5C2.8125 13.75 1.875 12.5 1.875 10.625V5.3125C1.875 3.4375 2.8125 2.1875 5 2.1875H10C12.1875 2.1875 13.125 3.4375 13.125 5.3125Z"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 8.5625H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 10.4375H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 8.5625H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 10.4375H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 8.5625H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 10.4375H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <p>September</p>
                            </div>
                            <div className="month">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.1875 5.68164H12.8125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.125 5.3125V10.625C13.125 12.5 12.1875 13.75 10 13.75H5C2.8125 13.75 1.875 12.5 1.875 10.625V5.3125C1.875 3.4375 2.8125 2.1875 5 2.1875H10C12.1875 2.1875 13.125 3.4375 13.125 5.3125Z"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 8.5625H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 10.4375H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 8.5625H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 10.4375H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 8.5625H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 10.4375H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <p>September</p>
                            </div>
                          </div>
                          <div className="desc">
                            <p>
                              Озеро Урунгач находится в Бостанлыкском районе
                              Ташкентской области Узбекистана. Оно расположено
                              на территории Угам-Чаткальского национального
                              парка, в 160 километрах от города Ташкента.
                            </p>
                          </div>
                          <div className="read_more">
                            <Link href={"?"}>
                              Подробный <ArrowOutwardIcon />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tour_card">
                    <div className="tour_card_wrap">
                      <img
                        className="visible"
                        src="/img/thematic_1.png        "
                        alt="Miral Tour"
                      />
                      <div className="content">
                        <div className="tour_name">
                          <h2>нефритовое озеро</h2>
                        </div>
                        <div className="half_visible">
                          <div className="months">
                            <div className="month">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.1875 5.68164H12.8125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.125 5.3125V10.625C13.125 12.5 12.1875 13.75 10 13.75H5C2.8125 13.75 1.875 12.5 1.875 10.625V5.3125C1.875 3.4375 2.8125 2.1875 5 2.1875H10C12.1875 2.1875 13.125 3.4375 13.125 5.3125Z"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 8.5625H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 10.4375H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 8.5625H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 10.4375H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 8.5625H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 10.4375H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <p>September</p>
                            </div>
                            <div className="month">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.1875 5.68164H12.8125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.125 5.3125V10.625C13.125 12.5 12.1875 13.75 10 13.75H5C2.8125 13.75 1.875 12.5 1.875 10.625V5.3125C1.875 3.4375 2.8125 2.1875 5 2.1875H10C12.1875 2.1875 13.125 3.4375 13.125 5.3125Z"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 8.5625H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 10.4375H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 8.5625H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 10.4375H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 8.5625H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 10.4375H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <p>September</p>
                            </div>
                            <div className="month">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.1875 5.68164H12.8125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.125 5.3125V10.625C13.125 12.5 12.1875 13.75 10 13.75H5C2.8125 13.75 1.875 12.5 1.875 10.625V5.3125C1.875 3.4375 2.8125 2.1875 5 2.1875H10C12.1875 2.1875 13.125 3.4375 13.125 5.3125Z"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 8.5625H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 10.4375H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 8.5625H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 10.4375H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 8.5625H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 10.4375H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <p>September</p>
                            </div>
                          </div>
                          <div className="desc">
                            <p>
                              Озеро Урунгач находится в Бостанлыкском районе
                              Ташкентской области Узбекистана. Оно расположено
                              на территории Угам-Чаткальского национального
                              парка, в 160 километрах от города Ташкента.
                            </p>
                          </div>
                          <div className="read_more">
                            <Link href={"?"}>
                              Подробный <ArrowOutwardIcon />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tour_card">
                    <div className="tour_card_wrap">
                      <img
                        className="visible"
                        src="/img/thematic_1.png        "
                        alt="Miral Tour"
                      />
                      <div className="content">
                        <div className="tour_name">
                          <h2>нефритовое озеро</h2>
                        </div>
                        <div className="half_visible">
                          <div className="months">
                            <div className="month">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.1875 5.68164H12.8125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.125 5.3125V10.625C13.125 12.5 12.1875 13.75 10 13.75H5C2.8125 13.75 1.875 12.5 1.875 10.625V5.3125C1.875 3.4375 2.8125 2.1875 5 2.1875H10C12.1875 2.1875 13.125 3.4375 13.125 5.3125Z"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 8.5625H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 10.4375H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 8.5625H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 10.4375H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 8.5625H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 10.4375H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <p>September</p>
                            </div>
                            <div className="month">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.1875 5.68164H12.8125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.125 5.3125V10.625C13.125 12.5 12.1875 13.75 10 13.75H5C2.8125 13.75 1.875 12.5 1.875 10.625V5.3125C1.875 3.4375 2.8125 2.1875 5 2.1875H10C12.1875 2.1875 13.125 3.4375 13.125 5.3125Z"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 8.5625H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 10.4375H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 8.5625H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 10.4375H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 8.5625H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 10.4375H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <p>September</p>
                            </div>
                            <div className="month">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10 1.25V3.125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.1875 5.68164H12.8125"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.125 5.3125V10.625C13.125 12.5 12.1875 13.75 10 13.75H5C2.8125 13.75 1.875 12.5 1.875 10.625V5.3125C1.875 3.4375 2.8125 2.1875 5 2.1875H10C12.1875 2.1875 13.125 3.4375 13.125 5.3125Z"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  strokeMiterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 8.5625H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.80907 10.4375H9.81468"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 8.5625H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.49657 10.4375H7.50218"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 8.5625H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.18407 10.4375H5.18968"
                                  stroke="#101010"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <p>September</p>
                            </div>
                          </div>
                          <div className="desc">
                            <p>
                              Озеро Урунгач находится в Бостанлыкском районе
                              Ташкентской области Узбекистана. Оно расположено
                              на территории Угам-Чаткальского национального
                              парка, в 160 километрах от города Ташкента.
                            </p>
                          </div>
                          <div className="read_more">
                            <Link href={"?"}>
                              Подробный <ArrowOutwardIcon />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="airlines section">
              <div className="airlines_wrapper">
                <div className="left_box">
                  <div className="content">
                    <div className="title">
                      <h1>{t("usefulsPage.flights")}</h1>
                    </div>
                    <div className="plane_image">
                      <img src="/img/plane_usefu.png" alt="Miral Tour" />
                    </div>
                    <div className="description">
                      <p>{t("usefulsPage.flightsDesc")}</p>
                    </div>
                  </div>
                </div>
                <div className="right_box">
                  <div className="content">
                    <div className="title">
                      <h3>
                        {t("usefulsPage.direct1")}{" "}
                        <span>{t("usefulsPage.direct2")}</span>
                      </h3>
                      <p>{t("usefulsPage.directDesc")}</p>
                    </div>
                    <div className="countries_select">
                      <div className="continent">
                        <span className="min_title">
                          {t("usefulsPage.continent")}
                        </span>
                        <Select
                          style={{ width: "100%" }}
                          onChange={continentChange}
                          defaultValue={continents[0]}
                          options={continents}
                          className="select_this"
                        />
                      </div>
                      <div className="continent">
                        <span className="min_title">
                          {" "}
                          {t("usefulsPage.country")}
                        </span>
                        <Select
                          style={{ width: "100%" }}
                          defaultValue={euro_countries[0]}
                          onChange={countryChange}
                          options={
                            continent === 1
                              ? euro_countries
                              : continent === 2
                              ? asia_countries
                              : continent === 3
                              ? middle_east_countries
                              : north_america_countries
                          }
                        />
                      </div>
                      <div className="continent">
                        <span className="min_title">
                          {t("usefulsPage.city")}
                        </span>
                        <ul className="cities">
                          {country === 1
                            ? russia_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 2
                            ? germany_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 3
                            ? france_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 4
                            ? uk_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 5
                            ? italy_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 6
                            ? spain_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 7
                            ? latvia_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 8
                            ? turkey_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 9
                            ? china_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 10
                            ? south_korea_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 11
                            ? japan_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 12
                            ? india_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 13
                            ? kazakhstan_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 14
                            ? kyrgyzstan_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 15
                            ? tajikistan_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 16
                            ? turkmenistan_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 17
                            ? malaysia_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 18
                            ? thailand_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 19
                            ? indonesia_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 20
                            ? uae_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 21
                            ? turkey_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 22
                            ? israel_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 23
                            ? saudi_arabia_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 24
                            ? qatar_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 25
                            ? kuwait_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 26
                            ? oman_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 27
                            ? iran_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : country === 28
                            ? usa_cities.map((city) => (
                                <li key={city.value}>{city.label}</li>
                              ))
                            : null}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="visa_requiremenrts">
              <div className="visa_wrapper">
                <div className="left_box">
                  <div className="title">
                    <span className="min_title">{t("usefulsPage.visa")}</span>
                    <h1>
                      {t("usefulsPage.vTitle1")}{" "}
                      <span> {t("usefulsPage.vTitle2")}</span>{" "}
                      {t("usefulsPage.vTitle3")}
                    </h1>
                    <p>{t("usefulsPage.vTitleDesc")}</p>
                  </div>
                </div>
                <div className="right_box">
                  <div className="countries_accordion">
                    <Collapse
                      defaultActiveKey={[1]}
                      items={[
                        {
                          key: 1,
                          label: t("usefulsPage.tCis"),
                          children: (
                            <div className="this_countries">
                              {cis_visa.map((country, index) => (
                                <p key={index}>{country.name}</p>
                              ))}
                            </div>
                          ),
                        },
                      ]}
                    />
                    <Collapse
                      items={[
                        {
                          key: 2,
                          label: t("usefulsPage.tEuro"),
                          children: (
                            <div className="this_countries">
                              {european_visa.map((country, index) => (
                                <p key={index}>{country.name}</p>
                              ))}
                            </div>
                          ),
                        },
                      ]}
                    />
                    <Collapse
                      items={[
                        {
                          key: 3,
                          label: t("usefulsPage.tAsia"),
                          children: (
                            <div className="this_countries">
                              {asia_visa.map((country, index) => (
                                <p key={index}>{country.name}</p>
                              ))}
                            </div>
                          ),
                        },
                      ]}
                    />
                    <Collapse
                      items={[
                        {
                          key: 4,
                          label: t("usefulsPage.tMidEast"),
                          children: (
                            <div className="this_countries">
                              {middle_east_visa.map((country, index) => (
                                <p key={index}>{country.name}</p>
                              ))}
                            </div>
                          ),
                        },
                      ]}
                    />
                    <Collapse
                      items={[
                        {
                          key: 5,
                          label: t("usefulsPage.tAmerica"),
                          children: (
                            <div className="this_countries">
                              {north_america_visa.map((country) => (
                                <p key={country.id}>{country.name}</p>
                              ))}
                            </div>
                          ),
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="just_box">
              <div className="just_box_wrapper">
                <div className="left_box">
                  <div className="this_wrap">
                    <div className="content">
                      <div className="top">
                        <p>
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.917969 9.32879C5.03906 5.99605 10.2857 4 15.9986 4C21.7114 4 26.958 5.99605 31.0792 9.32879L28.5658 12.4407C25.1315 9.66337 20.7592 8 15.9986 8C11.2379 8 6.86564 9.66337 3.4314 12.4407L0.917969 9.32879ZM5.10702 14.5152C8.08336 12.1083 11.8726 10.6667 15.9986 10.6667C20.1246 10.6667 23.9138 12.1083 26.8902 14.5152L24.3767 17.6271C22.0872 15.7756 19.1724 14.6667 15.9986 14.6667C12.8248 14.6667 9.90995 15.7756 7.62046 17.6271L5.10702 14.5152ZM9.29609 19.7017C11.1277 18.2204 13.4595 17.3333 15.9986 17.3333C18.5376 17.3333 20.8695 18.2204 22.7011 19.7017L20.1876 22.8136C19.0428 21.8877 17.5855 21.3333 15.9986 21.3333C14.4116 21.3333 12.9543 21.8877 11.8095 22.8136L9.29609 19.7017ZM13.4851 24.8881C14.172 24.3327 15.0464 24 15.9986 24C16.9507 24 17.8251 24.3327 18.512 24.8881L15.9986 28L13.4851 24.8881Z"
                              fill="black"
                            />
                          </svg>
                        </p>
                        <h2>{t("usefulsPage.boxTitle1")}</h2>
                      </div>
                      <p className="desc">{t("usefulsPage.box1Desc1")}</p>
                      <p className="minfignya">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.5 20.5H2.5V19H4V11.5V4C4 3.44772 4.44772 3 5 3H18C18.5523 3 19 3.44772 19 4V9H21.5V19H22.5V20.5ZM17 19H20V10.5H13V19H15.5V13H17V19ZM17.5 9V4.5H5.5V19H11.5V9H17.5ZM8 11H9.5V12.5H8V11ZM8 15.5H9.5V17H8V15.5ZM8 7H9.5V8.5H8V7Z"
                            fill="black"
                          />
                        </svg>
                        <span>{t("usefulsPage.box1desc2")}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right_box">
                  <div className="this_wrap">
                    <div className="content">
                      <div className="top">
                        <p>
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.917969 9.32879C5.03906 5.99605 10.2857 4 15.9986 4C21.7114 4 26.958 5.99605 31.0792 9.32879L28.5658 12.4407C25.1315 9.66337 20.7592 8 15.9986 8C11.2379 8 6.86564 9.66337 3.4314 12.4407L0.917969 9.32879ZM5.10702 14.5152C8.08336 12.1083 11.8726 10.6667 15.9986 10.6667C20.1246 10.6667 23.9138 12.1083 26.8902 14.5152L24.3767 17.6271C22.0872 15.7756 19.1724 14.6667 15.9986 14.6667C12.8248 14.6667 9.90995 15.7756 7.62046 17.6271L5.10702 14.5152ZM9.29609 19.7017C11.1277 18.2204 13.4595 17.3333 15.9986 17.3333C18.5376 17.3333 20.8695 18.2204 22.7011 19.7017L20.1876 22.8136C19.0428 21.8877 17.5855 21.3333 15.9986 21.3333C14.4116 21.3333 12.9543 21.8877 11.8095 22.8136L9.29609 19.7017ZM13.4851 24.8881C14.172 24.3327 15.0464 24 15.9986 24C16.9507 24 17.8251 24.3327 18.512 24.8881L15.9986 28L13.4851 24.8881Z"
                              fill="black"
                            />
                          </svg>
                        </p>
                        <h2>{t("usefulsPage.boxTitle2")}</h2>
                      </div>
                      <p className="desc">{t("usefulsPage.box2Desc1")}</p>
                      <p className="desc">{t("usefulsPage.box2Desc2")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="call_requests">
              <div className="this_wrap">
                <div className="left_box">
                  <div className="content">
                    <div className="top_title">
                      <p>Контакты</p>
                    </div>
                    <div className="main_title">
                      <h1>
                        Контактная <span>информация</span>
                      </h1>
                    </div>
                    <p className="desc">
                      Если у вас возникнут дополнительные вопросы или
                      потребуется помощь, не стесняйтесь обращаться к нам. Мы
                      всегда готовы помочь вам сделать ваше путешествие по
                      Узбекистану незабываемым!
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </Container>
        </div>
      </div>
    </>
  );
}

export default Usefuls;
