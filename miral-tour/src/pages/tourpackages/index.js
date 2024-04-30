import { TourPackageCard } from "@/components/TourPackage/TourPackageCard";
import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Head from "next/head";
import Loader from "@/components/Loader";
function TourpackagesAll() {
  const { t } = useTranslation();
  const [tourpackages, setTourPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/tourpackages`)
      .then((res) => {
        setTourPackages(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("An occured error", error);
        setLoading(false);
      });
  });
  return (
    <>
      <Head>
        <title>{t("allTours.title")}</title>
        <meta
          name="description"
          content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey.  "
        />
        <link rel="icon" href="/img/mini_logo.png" />
        <meta name="author" content="Miral Tour" />
        <meta
          name="keywords"
          content="tour packages, tours, tours to uzbekistan, travel uzbekistan, miral tour, miral tour uz, miral-tour, miral, world-miral, miral-tourism  ALL4U-TOURISM, ALL4U-TOUR, all4u-tourism, all4u-tour, tourism, travel tour, Miral Tour,tourism Uzbekistan"
        />
        <meta property="og:title" content="Miral Tour" />
        <meta
          property="og:description"
          content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey.  "
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
          content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey.  "
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
      <div className="all_tourpackages pt_100">
        <div className="this_wrapper">
          <Container>
            <div className="intro">
              <h1>{t("menu.catalog")}</h1>
            </div>
            <div className="tours">
              {tourpackages.length === 0 ? (
                <Loader />
              ) : (
                tourpackages &&
                tourpackages.length &&
                tourpackages.map((tourpackage) => (
                  <TourPackageCard
                    key={tourpackage.id}
                    tourpackage={tourpackage}
                  />
                ))
              )}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default TourpackagesAll;
