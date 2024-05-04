import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import axios from "axios";
import Loader from "@/components/Loader";
import { TourPackageCard } from "@/components/TourPackage/TourPackageCard";

function ReliogiosTours() {
  const { t } = useTranslation();
  const [tourpackages, setTourpackages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/tourpackages`)
      .then((response) => {
        setTourpackages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error: ", error);
        setLoading(false);
      });
  }, []);
  const religousTours = tourpackages.filter(
    (religious) => religious.category_id === 6
  );
  return (
    <>
      <Head>
        <title>{t("religiousPage.title")}</title>
        <meta
          name="description"
          content="Uzbekistan's history is etched with the elegance and significance of Islam. As a cultural cornerstone, Islam has played a pivotal role in shaping the nation's identity. Join us in exploring the profound impact of Islam"
        />
        <link rel="icon" href="/img/mini_logo.png" />
        <meta name="author" content="Miral Tour" />
        <meta
          name="keywords"
          content="religious, religious tours, tour, tours, tourpackage, miral tour,miral-tour, miral tour uz, uzbekistan, miraltour, miral, worldmiral, turbotour, all4u-tour, tourism, tour, all4u"
        />
        <meta property="og:title" content="Miral Tour" />
        <meta
          property="og:description"
          content="Uzbekistan's history is etched with the elegance and significance of Islam. As a cultural cornerstone, Islam has played a pivotal role in shaping the nation's identity. Join us in exploring the profound impact of Islam"
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
          content="Uzbekistan's history is etched with the elegance and significance of Islam. As a cultural cornerstone, Islam has played a pivotal role in shaping the nation's identity. Join us in exploring the profound impact of Islam"
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
      <div className="ReliogiosTours pt_70">
        <div className="religious_tours">
          <div className="religious_wrapper">
            <div className="background_section">
              <div className="this_wrapper">
                <Container>
                  <div className="content">
                    <div className="wrap">
                      <div>
                        <h1>{t("religiousPage.introTitle")}</h1>
                        <p>{t("religiousPage.introDesc")}</p>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
            <Container>
              <div className="tours_box">
                <div className="intro">
                  <h2>{t("religiousPage.title")} </h2>
                </div>
                {loading ? (
                  <Loader />
                ) : (
                  <div className="this_tours">
                    {religousTours &&
                      religousTours.length &&
                      religousTours.map((tourpackage) => (
                        <TourPackageCard tourpackage={tourpackage} />
                      ))}
                  </div>
                )}
              </div>
            </Container>
            <Container>
              <div className="tours_wrap">
                <div className="content_box">
                  <div className="wrapper_section">
                    <div className="about">
                      <div className="subsections">
                        <div className="subsection">
                          <h2>{t("religiousPage.mosques")}</h2>
                          <div className="these_wrap">
                            <div className="section_wrap">
                              <div className="wrap_content">
                                <Link href={"/"}>
                                  <img
                                    src="/img/bibikhanim.jpg"
                                    alt="Bibikhanim  Mosque Uzbekistan Miral Tour"
                                  />
                                  <div className="content">
                                    <div className="hidden_texts">
                                      <h3>Bibi-Khanym Mosque</h3>
                                      <p>
                                        Bibi-Khanym Mosque – A testament to
                                        Timur's grandeur, this mosque stands as
                                        a symbol of architectural brilliance.
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="section_wrap">
                              <div className="wrap_content">
                                <Link href={"/"}>
                                  <img
                                    src="/img/kalyan.jpg"
                                    alt="Kalyan Mosque in Bukhara Uzbekistan Miral Tour"
                                  />
                                  <div className="content">
                                    <div className="hidden_texts">
                                      <h3>Kalyan Mosque</h3>
                                      <p>
                                        Kalyan Mosque in Bukhara – Witness the
                                        magnificence of one of Central Asia's
                                        oldest and holiest mosques.
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="subsection">
                        <h2>{t("religiousPage.scholars")}</h2>
                        <div className="these_wrap">
                          <div className="section_wrap">
                            <div className="wrap_content">
                              <Link href={"/"}>
                                <img
                                  src="/img/bukhariy.jpg"
                                  alt=" Imam Al-Bukhari Uzbekistan Miral Tour"
                                />
                                <div className="content">
                                  <div className="hidden_texts">
                                    <h3>Imam Al-Bukhari</h3>
                                    <p>
                                      Imam Al-Bukhari – Renowned for his
                                      compilation of hadiths, his work remains a
                                      cornerstone of Islamic scholarship.
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="section_wrap">
                            <div className="wrap_content">
                              <Link href={"/"}>
                                <img
                                  src="/img/farabi.jpg"
                                  alt="BAl-Farabi Uzbekistan Miral Tour"
                                />
                                <div className="content">
                                  <div className="hidden_texts">
                                    <h3>Al-Farabi</h3>
                                    <p>
                                      Al-Farabi – A polymath and philosopher,
                                      his contributions to Islamic philosophy
                                      resonate through the ages.
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tours"></div>
                  </div>
                  <div className="background_section second">
                    <div className="this_wrapper">
                      <Container>
                        <div className="content">
                          <div className="wrap">
                            <h1>{t("religiousPage.buddismTitle")}</h1>
                          </div>
                        </div>
                      </Container>
                    </div>
                  </div>{" "}
                  <div className="wrapper_section">
                    <div className="about">
                      <p>{t("religiousPage.buddismDesc")}</p>
                      <div className="subsections">
                        <div className="subsection">
                          <h2>{t("religiousPage.buddismCities")}</h2>
                          <div className="these_wrap">
                            <div className="section_wrap">
                              <div className="wrap_content">
                                <Link href={"/"}>
                                  <img
                                    src="/img/fayztepa.jpg"
                                    alt="Fayaztepa Buddhist Complex Uzbekistan Miral Tour"
                                  />
                                  <div className="content">
                                    <div className="hidden_texts">
                                      <h3>Fayaztepa</h3>
                                      <p>
                                        Fayaztepa – Walk among the remnants of
                                        an ancient Buddhist complex, a testament
                                        to Uzbekistan's rich spiritual
                                        diversity.
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="section_wrap">
                              <div className="wrap_content">
                                <Link href={"/"}>
                                  <img
                                    src="/img/siyavush.png"
                                    alt="Siyavush Termez Uzbekistan Miral Tour"
                                  />
                                  <div className="content">
                                    <div className="hidden_texts">
                                      <h3>Siyavush, Termez</h3>
                                      <p>
                                        Siyavush – Discover the mystical allure
                                        of Siyavush, an archaeological site
                                        where Buddhist heritage is unveiled.
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="background_section third">
                    <div className="this_wrapper">
                      <Container>
                        <div className="content">
                          <div className="wrap">
                            <h1>{t("religiousPage.christainTitle")}</h1>
                          </div>
                        </div>
                      </Container>
                    </div>
                  </div>
                  <div className="wrapper_section">
                    <div className="about">
                      <p>{t("religiousPage.christianDesc")}</p>
                      <div className="subsections">
                        <div className="subsection">
                          <h2>{t("religiousPage.christianHistory")}</h2>
                          <p>{t("religiousPage.historyDesc")}</p>
                          <div className="these_wrap">
                            <div className="section_wrap">
                              <div className="wrap_content">
                                <Link href={"/"}>
                                  <img
                                    src="/img/christian1.jpg"
                                    alt="St. Alexander Nevsky Cathedral Uzbekistan Miral Tour"
                                  />
                                  <div className="content">
                                    <div className="hidden_texts">
                                      <h3>St. Alexander Nevsky Cathedral</h3>
                                      <p>
                                        Built in the late 19th century, St.
                                        Alexander Nevsky Cathedral reflects the
                                        enduring spirit of Christianity in
                                        Uzbekistan. Originally a Russian
                                        Orthodox church
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="section_wrap">
                              <div className="wrap_content">
                                <Link href={"/"}>
                                  <img
                                    src="/img/christian2.jpg"
                                    alt="Siyavush Termez Uzbekistan Miral Tour"
                                  />
                                  <div className="content">
                                    <div className="hidden_texts">
                                      <h3>Mural of Biblical Scene</h3>
                                      <p>
                                        Mural of Biblical Scene – Explore the
                                        vibrant narratives painted on church
                                        walls, preserving stories for
                                        generations to come.
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReliogiosTours;
