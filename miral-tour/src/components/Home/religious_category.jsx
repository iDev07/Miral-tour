"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import Loader from "../Loader";
import { TourPackageCard } from "../TourPackage/TourPackageCard";
import { categories } from "../../../tourdata";
import axios from "axios";
function Religious_category() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [tourpackages, setTourPackages] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.all4u-tour.uz/tourpackages")
      .then((response) => {
        setTourPackages(response.data);
        // console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="religious_category category">
          <div className="religious_wrapper">
            <Container maxWidth="lg">
              <div className="this_wrap">
                <div className="intro">
                  <h1 suppressHydrationWarning>
                    {i18n.language === "uz"
                      ? categories[0].name_uz
                      : i18n.language === "ru"
                      ? categories[0].name_ru
                      : categories[0].name_en}
                  </h1>
                </div>
                <div className="tour_packages">
                  <div className="this_wrapper">
                    {/* {tourpackages.map((tourpackage) => (
                  <TourPackageCard
                    key={tourpackage.id}
                    tourpackage={tourpackage}
                  />
                ))} */}
                    <TourPackageCard tourpackage={tourpackages[0]} />
                    <TourPackageCard tourpackage={tourpackages[1]} />
                    <TourPackageCard tourpackage={tourpackages[2]} />
                    <TourPackageCard tourpackage={tourpackages[3]} />
                  </div>
                </div>
                <div className="more">
                  <Link href={`/category/${categories[2].id}`}>
                    {t("category.more")}
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}

export default Religious_category;
