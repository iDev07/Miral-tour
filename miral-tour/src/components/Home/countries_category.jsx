import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
function Countries_category() {
  const { t } = useTranslation();
  return (
    <div className="countries_category category">
      <div className="countries_wrapper">
        <Container maxWidth="lg">
          <div className="this_wrap">
            <div className="intro">
              <h1>{t("countries.foreignCountries")}</h1>
            </div>
            <div className="countries_wrap">
              <div className="left_section">
                <div className="first_country">
                  <Link href={"/"}>
                    <img src="/img/tashkent.jpg" alt="Tour to Tashkent" />
                    <h2>{t("countries.country2")}</h2>
                  </Link>
                </div>
                <div className="second_country">
                  <Link href={"/"}>
                    <img src="/img/samarqand.webp" alt="Tour to Samarkand " />
                    <h2>{t("countries.country3")}</h2>
                  </Link>
                </div>
              </div>
              <div className="right_section">
                <div className="third_country">
                  <Link href={"/"}>
                    <img src="/img/krgyzstan.jpg" alt="Tour to Krgyzstan" />
                    <h2>{t("countries.country1")}</h2>
                  </Link>
                </div>
                <div className="four_five_countries">
                  <div className="left_country">
                    <Link href={"/"}>
                      <img src="/img/country4.png" alt="Tour to Kazakhstan" />
                      <h2>{t("countries.country4")}</h2>
                    </Link>
                  </div>
                  <div className="right_country">
                    <Link href={"/"}>
                      <img
                        src="/img/tadjikistan.jpg"
                        height={330}
                        alt="Tour to Tadjikistan"
                      />
                      <h2>{t("countries.country5")}</h2>
                    </Link>
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

export default Countries_category;
