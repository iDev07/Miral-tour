import React from "react";
import { Container } from "@mui/material";
import { Button, Select, Table } from "antd";
import Head from "next/head";
function Visa() {
  const dataSource1 = [
    {
      key: "1",
      name: "Albania",
      name2: "Algeria",
      name3: "Bahrain",
      name4: "Bhutan",
    },
    {
      key: "2",
      name: "Venezuela",
      name2: "Vietnam",
      name3: "Gabonese",
      name4: "Guyana",
    },
    {
      key: "3",
      name: "Equatorial Guinea",
      name2: "South Africa",
      name3: "Qatar",
      name4: "Colombia",
    },
    {
      key: "4",
      name: "Bhutan",
      name2: "Kuwait",
      name3: "Lebanese",
      name4: "Mauritius",
    },
    {
      key: "5",
      name: "Macedonia",
      name2: "Maldives",
      name3: "Morocco",
      name4: "Nauru",
    },
    {
      key: "6",
      name: "UAE",
      name2: "Oman",
      name3: "Palau",
      name4: "Peru",
    },
    {
      key: "7",
      name: "Saudi Arabia",
      name2: "Seychelles",
      name3: "USA",
      name4: "Suriname",
    },
    {
      key: "8",
      name: "Thailand",
      name2: "Tunisia",
      name3: "Turkmenistan",
      name4: "Uruguay",
    },
    {
      key: "9",
      name: "Fiji",
      name2: "Philippines",
      name3: "Sri Lanka",
      name4: "Ecuador",
    },
  ];

  const columns1 = [
    {
      title: "List of countries",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "List of countries",
      dataIndex: "name2",
      key: "name2",
    },
    {
      title: "List of countries",
      dataIndex: "name3",
      key: "name3",
    },
    {
      title: "List of countries",
      dataIndex: "name4",
      key: "name4",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Uzbekistan visa; transit visa; e-visa, visa-free entry to Uzbekistan
        </title>
        <meta
          name="description"
          content="To enter the Republic of Uzbekistan for tourism purposes, a valid passport and visa are required unless you are from a country with a visa-free travel agreement with Uzbekistan. You can pay for the visa to Uzbekistan in US dollars, euros, or any other currency. "
        />
        <link rel="icon" href="/img/mini_logo.png" />
        <meta name="author" content="Miral Tour" />
        <meta
          name="keywords"
          content="visa uzbekista, visa of uzbekistan, e-visa, tranzit visa, miral tour, miral tour uz, miral-tour, miral, world-miral, miral-tourism  ALL4U-TOURISM, ALL4U-TOUR, all4u-tourism, all4u-tour, tourism, travel tour, Miral Tour,tourism Uzbekistan"
        />
        <meta property="og:title" content="Miral Tour" />
        <meta
          property="og:description"
          content="To enter the Republic of Uzbekistan for tourism purposes, a valid passport and visa are required unless you are from a country with a visa-free travel agreement with Uzbekistan. You can pay for the visa to Uzbekistan in US dollars, euros, or any other currency. "
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
          content="To enter the Republic of Uzbekistan for tourism purposes, a valid passport and visa are required unless you are from a country with a visa-free travel agreement with Uzbekistan. You can pay for the visa to Uzbekistan in US dollars, euros, or any other currency. "
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
      <div className="Visa pt_70">
        <div className="visa_wrapper">
          <div className="background_section">
            <div className="background_wrapper">
              <Container>
                <div className="content_grid">
                  <div className="intro">
                    <h1>
                      We will clarify the type of visa required for your trip!!!
                    </h1>
                    <p>choose your travel itinerary and leave the rest to us</p>
                  </div>
                </div>
                <div className="check_visa">
                  <div className="this_wrap">
                    <div className="top_section">
                      <button className="green_btn">Country</button>
                    </div>
                    <div className="module_visa">
                      <div className="client_country">
                        <div className="title">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_3913_5729)">
                              <path
                                d="M20.6191 8.45C19.5691 3.83 15.5391 1.75 11.9991 1.75C11.9991 1.75 11.9991 1.75 11.9891 1.75C8.45912 1.75 4.41912 3.82 3.36912 8.44C2.19912 13.6 5.35912 17.97 8.21912 20.72C9.27912 21.74 10.6391 22.25 11.9991 22.25C13.3591 22.25 14.7191 21.74 15.7691 20.72C18.6291 17.97 21.7891 13.61 20.6191 8.45ZM11.9991 13.46C10.2591 13.46 8.84912 12.05 8.84912 10.31C8.84912 8.57 10.2591 7.16 11.9991 7.16C13.7391 7.16 15.1491 8.57 15.1491 10.31C15.1491 12.05 13.7391 13.46 11.9991 13.46Z"
                                fill="#101010"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_3913_5729">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <p> Select your country of residence</p>
                        </div>
                        <Select
                          options={[
                            {
                              value: 1,
                              label: (
                                <p>
                                  <svg
                                    width="54"
                                    height="44"
                                    viewBox="0 0 54 44"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g filter="url(#filter0_d_3913_5761)">
                                      <g clip-path="url(#clip0_3913_5761)">
                                        <rect
                                          x="12"
                                          y="12"
                                          width="30"
                                          height="20"
                                          rx="4"
                                          fill="white"
                                        />
                                        <path
                                          d="M42 12H12V22H42V12Z"
                                          fill="white"
                                        />
                                        <path
                                          d="M42 22H12V32H42V22Z"
                                          fill="#D52B1E"
                                        />
                                        <path
                                          d="M42 18.667H12V25.3337H42V18.667Z"
                                          fill="#0039A6"
                                        />
                                      </g>
                                    </g>
                                    <defs>
                                      <filter
                                        id="filter0_d_3913_5761"
                                        x="0"
                                        y="0"
                                        width="54"
                                        height="44"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                      >
                                        <feFlood
                                          flood-opacity="0"
                                          result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                          in="SourceAlpha"
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                          result="hardAlpha"
                                        />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="6" />
                                        <feComposite
                                          in2="hardAlpha"
                                          operator="out"
                                        />
                                        <feColorMatrix
                                          type="matrix"
                                          values="0 0 0 0 0.716667 0 0 0 0 0.716667 0 0 0 0 0.716667 0 0 0 0.32 0"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in2="BackgroundImageFix"
                                          result="effect1_dropShadow_3913_5761"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in="SourceGraphic"
                                          in2="effect1_dropShadow_3913_5761"
                                          result="shape"
                                        />
                                      </filter>
                                      <clipPath id="clip0_3913_5761">
                                        <rect
                                          x="12"
                                          y="12"
                                          width="30"
                                          height="20"
                                          rx="4"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>{" "}
                                  Russia
                                </p>
                              ),
                            },
                            {
                              value: 2,
                              label: <p>China</p>,
                            },
                            {
                              value: 3,
                              label: <p>Russia</p>,
                            },
                          ]}
                        />
                      </div>
                      <div className="visiting_country">
                        <div className="title">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_3913_5726)">
                              <path
                                d="M8.88003 4.59973C8.08003 1.13973 2.87002 1.12973 2.07002 4.59973C1.60002 6.62973 2.89003 8.34973 4.01003 9.41973C4.83003 10.1897 6.12003 10.1897 6.94003 9.41973C8.06003 8.34973 9.34003 6.62973 8.88003 4.59973ZM5.51003 6.19973C4.96003 6.19973 4.51003 5.74973 4.51003 5.19973C4.51003 4.64973 4.95003 4.19973 5.50003 4.19973H5.51003C6.07003 4.19973 6.51003 4.64973 6.51003 5.19973C6.51003 5.74973 6.07003 6.19973 5.51003 6.19973Z"
                                fill="#101010"
                              />
                              <path
                                d="M21.91 16.5997C21.11 13.1397 15.88 13.1297 15.07 16.5997C14.6 18.6297 15.89 20.3497 17.02 21.4197C17.84 22.1897 19.14 22.1897 19.96 21.4197C21.09 20.3497 22.38 18.6297 21.91 16.5997ZM18.53 18.1997C17.98 18.1997 17.53 17.7497 17.53 17.1997C17.53 16.6497 17.97 16.1997 18.52 16.1997H18.53C19.08 16.1997 19.53 16.6497 19.53 17.1997C19.53 17.7497 19.08 18.1997 18.53 18.1997Z"
                                fill="#101010"
                              />
                              <path
                                d="M11.9995 19.75H9.31945C8.15945 19.75 7.14945 19.05 6.74945 17.97C6.33945 16.89 6.63945 15.7 7.50945 14.93L15.4995 7.94C15.9795 7.52 15.9895 6.95 15.8495 6.56C15.6995 6.17 15.3195 5.75 14.6795 5.75H11.9995C11.5895 5.75 11.2495 5.41 11.2495 5C11.2495 4.59 11.5895 4.25 11.9995 4.25H14.6795C15.8395 4.25 16.8495 4.95 17.2495 6.03C17.6595 7.11 17.3595 8.3 16.4895 9.07L8.49945 16.06C8.01945 16.48 8.00945 17.05 8.14945 17.44C8.29945 17.83 8.67945 18.25 9.31945 18.25H11.9995C12.4095 18.25 12.7495 18.59 12.7495 19C12.7495 19.41 12.4095 19.75 11.9995 19.75Z"
                                fill="#101010"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_3913_5726">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <p> Select your country of residence</p>
                        </div>
                        <Select
                          options={[
                            {
                              value: 1,
                              label: (
                                <p>
                                  <svg
                                    width="54"
                                    height="44"
                                    viewBox="0 0 54 44"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g filter="url(#filter0_d_3913_5761)">
                                      <g clip-path="url(#clip0_3913_5761)">
                                        <rect
                                          x="12"
                                          y="12"
                                          width="30"
                                          height="20"
                                          rx="4"
                                          fill="white"
                                        />
                                        <path
                                          d="M42 12H12V22H42V12Z"
                                          fill="white"
                                        />
                                        <path
                                          d="M42 22H12V32H42V22Z"
                                          fill="#D52B1E"
                                        />
                                        <path
                                          d="M42 18.667H12V25.3337H42V18.667Z"
                                          fill="#0039A6"
                                        />
                                      </g>
                                    </g>
                                    <defs>
                                      <filter
                                        id="filter0_d_3913_5761"
                                        x="0"
                                        y="0"
                                        width="54"
                                        height="44"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                      >
                                        <feFlood
                                          flood-opacity="0"
                                          result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                          in="SourceAlpha"
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                          result="hardAlpha"
                                        />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="6" />
                                        <feComposite
                                          in2="hardAlpha"
                                          operator="out"
                                        />
                                        <feColorMatrix
                                          type="matrix"
                                          values="0 0 0 0 0.716667 0 0 0 0 0.716667 0 0 0 0 0.716667 0 0 0 0.32 0"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in2="BackgroundImageFix"
                                          result="effect1_dropShadow_3913_5761"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in="SourceGraphic"
                                          in2="effect1_dropShadow_3913_5761"
                                          result="shape"
                                        />
                                      </filter>
                                      <clipPath id="clip0_3913_5761">
                                        <rect
                                          x="12"
                                          y="12"
                                          width="30"
                                          height="20"
                                          rx="4"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>{" "}
                                  Russia
                                </p>
                              ),
                            },
                          ]}
                        />
                      </div>
                      <div className="check_function">
                        <button>
                          <p>Check visa type</p>
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.75 25C19.9632 25 25 19.9632 25 13.75C25 7.5368 19.9632 2.5 13.75 2.5C7.5368 2.5 2.5 7.5368 2.5 13.75C2.5 19.9632 7.5368 25 13.75 25Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M23.6625 25.862C24.325 27.862 25.8375 28.062 27 26.312C28.0625 24.712 27.3625 23.3995 25.4375 23.3995C24.0125 23.387 23.2125 24.4995 23.6625 25.862Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <Container>
            <div className="types_wrapper">
              <div className="visa_countries">
                <h2>Transit visa to Uzbekistan</h2>
                <p>
                  To enter the Uzbekistan for tourism purposes, a valid passport
                  and visa are required unless you are from a country with a
                  visa-free travel agreement with Uzbekistan. You can pay for
                  the visa to Uzbekistan in US dollars, euros, or any other
                  currency. The validity of a tourist visa lasts for 30 days.
                  There are three different ways to obtain a permit to
                  Uzbekistan in addition to visa-free entry, which is detailed
                  below.
                </p>
                <p>
                  If there is an air ticket to a third country, citizens of 36
                  countries can stay in Uzbekistan without a visa for no more
                  than five days.
                </p>
                <p>
                  <div className="first">
                    <Table
                      dataSource={dataSource1}
                      columns={columns1}
                      pagination={false}
                    />
                  </div>
                </p>
                <h2>Electronic visa to Uzbekistan</h2>
                <div className="e_visa">
                  <p>
                    {" "}
                    From July 15, 2018, a system for processing and issuing
                    electronic entry visas for staying in Uzbekistan for tourist
                    purposes was introduced.
                  </p>
                  <p>
                    The system of issuing electronic visas to Uzbekistan allows
                    you to obtain an entry tourist visa to Uzbekistan online
                    without visiting the embassy or consulate of the Republic of
                    Uzbekistan.
                  </p>
                  <p>Electronic visa is issued for a period of 30 days.</p>
                  <p>
                    Electronic visa is valid for 90 days from the date of issue.
                  </p>
                  <p>
                    Electronic visa to Uzbekistan is considered and issued
                    within two business days, excluding the day of application
                    for a visa.
                  </p>
                  <p>
                    The issued electronic visa will be sent to the e-mail
                    address indicated when submitting the application on the web
                    portal “<a href="e-visa.gov.uz">e-visa.gov.uz</a>”.
                  </p>
                  <p>
                    An application for an electronic visa must be submitted at
                    least three business days before the planned date of travel
                    to Uzbekistan.
                  </p>
                  <b> Cost of an electronic entry visa:</b>
                  <ul>
                    <b>
                      <li>Single entry visa - 50 US dollars per person</li>
                    </b>
                    <b>
                      <li>Double entry visa - 75 US dollars per person</li>
                    </b>
                    <b>
                      <li>Multiple entry visa - 90 US dollars per person</li>
                    </b>
                  </ul>
                  <p>Payment is made by credit cards online.</p>
                  <p>
                    If an electronic visa is refused, the amount paid will not
                    be refunded.
                  </p>
                  <p>
                    An electronic visa is not stuck in the travel document
                    (passport). The issued electronic visa in paper or
                    electronic form will be the basis for crossing the border.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Visa;
