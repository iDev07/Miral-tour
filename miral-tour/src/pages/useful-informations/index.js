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
    { label: "Европа", value: 1 },
    { label: "Азия", value: 2 },
    { label: "Ближний Восток:", value: 3 },
    { label: "Северная Америка", value: 4 },
  ];
  const euro_countries = [
    { label: "Россия", value: 1 },
    { label: "Германия", value: 2 },
    { label: "Франция", value: 3 },
    { label: "Великобритания", value: 4 },
    { label: "Италия", value: 5 },
    { label: "Испания", value: 6 },
    { label: "Латвия", value: 7 },
    { label: "Турция", value: 8 },
  ];
  const asia_countries = [
    { label: "Китай", value: 9 },
    { label: "Южная Корея", value: 10 },
    { label: "Япония", value: 11 },
    { label: "Индия", value: 12 },
    { label: "Казахстан", value: 13 },
    { label: "Кыргызстан", value: 14 },
    { label: "Таджикистан", value: 15 },
    { label: "Туркменистан", value: 16 },
    { label: "Малайзия", value: 17 },
    { label: "Таиланд", value: 18 },
    { label: "Индонезия", value: 19 },
  ];
  const middle_east_countries = [
    { label: "ОАЭ", value: 20 },
    { label: "Турция", value: 21 },
    { label: "Израиль", value: 22 },
    { label: "Саудовская Аравия", value: 23 },
    { label: "Катар", value: 24 },
    { label: "Кувейт", value: 25 },
    { label: "Оман", value: 26 },
    { label: "Иран", value: 27 },
  ];
  const north_america_countries = [{ label: "США", value: 28 }];

  const russia_cities = [
    { label: "Москва", value: 1 },
    { label: "Санкт-Петербург", value: 2 },
    { label: "Екатеринбург", value: 3 },
    { label: "Казань", value: 4 },
    { label: "Новосибирск", value: 5 },
    { label: "Самара", value: 6 },
  ];

  const germany_cities = [
    { label: "Франкфурт", value: 7 },
    { label: "Мюнхен", value: 8 },
  ];

  const france_cities = [{ label: "Париж", value: 9 }];

  const uk_cities = [{ label: "Лондон", value: 10 }];

  const italy_cities = [{ label: "Милан", value: 11 }];

  const spain_cities = [{ label: "Барселона", value: 12 }];

  const latvia_cities = [{ label: "Рига", value: 13 }];

  const turkey_cities = [
    { label: "Стамбул", value: 14 },
    { label: "Анкара", value: 15 },
  ];

  const china_cities = [
    { label: "Пекин", value: 16 },
    { label: "Урумчи", value: 17 },
  ];

  const south_korea_cities = [{ label: "Сеул", value: 18 }];

  const japan_cities = [{ label: "Токио", value: 19 }];

  const india_cities = [{ label: "Дели", value: 20 }];

  const kazakhstan_cities = [
    { label: "Нур-Султан", value: 21 },
    { label: "Алматы", value: 22 },
  ];

  const kyrgyzstan_cities = [{ label: "Бишкек", value: 23 }];

  const tajikistan_cities = [{ label: "Душанбе", value: 24 }];

  const turkmenistan_cities = [{ label: "Ашхабад", value: 25 }];

  const malaysia_cities = [{ label: "Куала-Лумпур", value: 26 }];

  const thailand_cities = [{ label: "Бангкок", value: 27 }];

  const indonesia_cities = [{ label: "Джакарта", value: 28 }];

  const uae_cities = [
    { label: "Дубай", value: 29 },
    { label: "Шарджа", value: 30 },
  ];

  const israel_cities = [{ label: "Тель-Авив", value: 31 }];

  const saudi_arabia_cities = [
    { label: "Джидда", value: 32 },
    { label: "Эр-Рияд", value: 33 },
  ];

  const qatar_cities = [{ label: "Доха", value: 34 }];

  const kuwait_cities = [{ label: "Эль-Кувейт", value: 35 }];

  const oman_cities = [{ label: "Маскат", value: 36 }];

  const iran_cities = [{ label: "Тегеран", value: 37 }];

  const usa_cities = [{ label: "Нью-Йорк", value: 38 }];

  const asia_visa = [
    { id: 1, name: "Япония" },
    { id: 2, name: "Корея" },
    { id: 3, name: "Китай" },
    { id: 4, name: "Малайзия" },
    { id: 5, name: "Индия" },
    { id: 6, name: "Израиль" },
    { id: 7, name: "Иран" },
    { id: 8, name: "Саудовская Аравия" },
    { id: 9, name: "ОАЭ" },
  ];

  const cis_visa = [
    { id: 1, name: "Россия" },
    { id: 2, name: "Казахстан" },
    { id: 3, name: "Кыргызстан" },
    { id: 4, name: "Таджикистан" },
    { id: 5, name: "Армения" },
    { id: 6, name: "Беларусь" },
    { id: 7, name: "Молдова" },
    { id: 8, name: "Украина" },
  ];

  const european_visa = [
    { id: 1, name: "Германия" },
    { id: 2, name: "Франция" },
    { id: 3, name: "Италия" },
    { id: 4, name: "Испания" },
    { id: 5, name: "Латвия" },
    { id: 6, name: "Литва" },
    { id: 7, name: "Эстония" },
    { id: 8, name: "Швейцария" },
    { id: 9, name: "Швеция" },
    { id: 10, name: "Норвегия" },
    { id: 11, name: "Дания" },
    { id: 12, name: "Нидерланды" },
    { id: 13, name: "Великобритания" },
  ];

  const middle_east_visa = [
    { id: 1, name: "Турция" },
    { id: 2, name: "Катар" },
    { id: 3, name: "Оман" },
    { id: 4, name: "Кувейт" },
  ];

  const north_america_visa = [
    { id: 1, name: "США" },
    { id: 2, name: "Канада" },
  ];

  return (
    <>
      <Head>
        <title>Useful information for tourists</title>
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
                          {" "}
                          Мы рады, вы рассматриваете
                        </span>{" "}
                        <span className="span2">
                          {" "}
                          возможность посетить
                        </span>{" "}
                        <span className="span3"> прекрасный Узбекистан</span>
                      </h1>
                    </div>
                    <p>
                      В этом разделе мы собрали важную информацию, которая
                      поможет вам спланировать ваше путешествие и сделать его
                      максимально комфортным
                    </p>
                    <Link href="#contactus">
                      Подробный
                      <ArrowOutwardIcon />{" "}
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <Container>
            <div className="tours_thematic section">
              <div className="title">
                <div className="tag">
                  <p>ТУРЫ</p>
                </div>
                <div className="text">
                  <h1>
                    Лучшее время для посещения Узбекистана все{" "}
                    <span>3 месяца</span> сезона.
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
                      <h1>Авиасообщение с Узбекистаном</h1>
                    </div>
                    <div className="plane_image">
                      <img src="/img/plane_usefu.png" alt="Miral Tour" />
                    </div>
                    <div className="description">
                      <p>
                        Узбекистан имеет хорошо развитое авиасообщение с
                        множеством стран мира. Ниже приведены основные
                        направления, откуда доступны прямые рейсы в Ташкент,
                        столицу Узбекистана
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right_box">
                  <div className="content">
                    <div className="title">
                      <h3>
                        Прямые рейсы в <span>Ташкент</span>
                      </h3>
                      <p>
                        Узбекистан имеет хорошо развитое авиасообщение с
                        множеством стран мира.
                      </p>
                    </div>
                    <div className="countries_select">
                      <div className="continent">
                        <span className="min_title">Континент</span>
                        <Select
                          style={{ width: "100%" }}
                          onChange={continentChange}
                          defaultValue={continents[0]}
                          options={continents}
                          className="select_this"
                        />
                      </div>
                      <div className="continent">
                        <span className="min_title">Country</span>
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
                        <span className="min_title">City</span>
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
                    <span className="min_title">Визовые требования</span>
                    <h1>
                      Узбекистан предостав-ляет <span>безвизовый</span> режим
                      для граждан многих стран.
                    </h1>
                    <p>
                      Узбекистан предоставляет безвизовый режим для граждан
                      многих стран. Вот список стран, гражданам которых не
                      требуется виза для въезда в Узбекистан:
                    </p>
                  </div>
                </div>
                <div className="right_box">
                  <div className="countries_accordion">
                    <Collapse
                      defaultActiveKey={[1]}
                      items={[
                        {
                          key: 1,
                          label: "Страны СНГ",
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
                          label: "Европейские страны",
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
                          label: "Азиатские страны",
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
                          label: "Ближний Восток",
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
                          label: "Северная Америка",
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
                        <h2>Связь и интернет</h2>
                      </div>
                      <p className="desc">
                        В Узбекистане хорошо развита мобильная связь и интернет.
                        Вы можете приобрести местную SIM-карту в аэропорту или в
                        любом крупном городе. Бесплатный Wi-Fi доступен во
                        многих кафе, ресторанах и гостиницах
                      </p>
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
                        <span>Free wifi hostel</span>
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
                        <h2>Безопасность и медицинские советы</h2>
                      </div>
                      <p className="desc">
                        Узбекистан является безопасной страной для путешествий.
                        Тем не менее, мы рекомендуем соблюдать общие меры
                        предосторожности, как и в любой другой стране. Если у
                        вас возникнут какие-либо проблемы, свяжитесь с местной
                        полицией или вашим консульством.
                      </p>
                      <p className="desc">
                        Перед поездкой убедитесь, что у вас есть медицинская
                        страховка, которая покрывает лечение за рубежом. Также
                        рекомендуется сделать
                      </p>
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
