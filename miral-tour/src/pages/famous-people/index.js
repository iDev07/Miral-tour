import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import { ChevronRight } from "@mui/icons-material";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

function FamousPeople() {
  const { t, i18n } = useTranslation();
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/famous-peoples`)
      .then((response) => {
        setPersons(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Head>
        <title>{t("famousPeoplePage.title")}</title>
        <meta
          name="keywords"
          content="miral tour, miral tour uz, miral-tour, miral, world-miral, miral-tourism  ALL4U-TOURISM, ALL4U-TOUR, all4u-tourism, all4u-tour, tourism, travel tour, Miral Tour,tourism Uzbekistan"
        />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <div className="all_places pt_100">
            <div className="all_places_wrapper">
              <div className="intro">
                <h1>{t("famousPeoplePage.title")}</h1>
              </div>
              <div className="places">
                {persons.length === 0 ? (
                  <Loader />
                ) : (
                  persons &&
                  persons.length &&
                  persons.map((person) => (
                    <div className="place">
                      <Link href={`/famous-people/${person.seo_url}`}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/famous-people/${person.main_image}`}
                          alt={`${person.title_en}`}
                        />
                        <div className="place_wrap">
                          <div className="content">
                            <h2>
                              {" "}
                              {i18n.language === "uz"
                                ? person.title_uz
                                : i18n.language === "ru"
                                ? person.title_ru
                                : i18n.language === "it" &&
                                  person.title_it !== null &&
                                  person.title_it !== ""
                                ? person.title_it
                                : person.title_en}
                            </h2>
                            <p>
                              {" "}
                              {i18n.language === "uz"
                                ? person.name_uz
                                : i18n.language === "ru"
                                ? person.name_ru
                                : i18n.language === "it" &&
                                  person.name_it !== null &&
                                  person.name_it !== ""
                                ? person.name_it
                                : person.name_en}
                            </p>
                            <p className="read_more">
                              {t("business.formBtn")}
                              <span>
                                <ChevronRight />
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default FamousPeople;
