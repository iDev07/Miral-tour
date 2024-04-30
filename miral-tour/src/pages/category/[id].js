import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TourPackageCard } from "@/components/TourPackage/TourPackageCard";

function Category() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [tourpackages, setTourPackages] = useState([]);
  useEffect(() => {
    // Fetch both tour packages and categories data
    axios
      .all([
        axios.get("https://api.all4u-tour.uz/tourpackages"),
        axios.get("https://api.all4u-tour.uz/categories"),
      ])
      .then(
        axios.spread((tourPackagesResponse, categoriesResponse) => {
          setTourPackages(tourPackagesResponse.data);
          setCategories(categoriesResponse.data);
          setLoading(false);
        })
      )
      .catch((error) => {
        console.error("An error occurred:", error);
        setLoading(false);
      });
  }, []);
  // console.log(tourpackages);
  // console.log(categories);
  const category = categories.find(
    (category) => category.id === parseInt(id),
    10
  );
  const filteredTourPackages = tourpackages.filter(
    (tourpackage) => tourpackage.category_id === parseInt(id, 10)
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Head>
            <title>
              {" "}
              {i18n.language === "uz"
                ? category.name_uz
                : i18n.language === "ru"
                ? category.name_ru
                : i18n.language === "it" &&
                  category.name_it !== null &&
                  category.name_it !== ""
                ? category.name_it
                : category.name_en}
            </title>
          </Head>
          <div className="category_page pt_100">
            <div className="category_page_wrapper">
              <Container maxWidth="lg">
                <div className="this_wrap">
                  <div className="intro">
                    <h1>
                      {i18n.language === "uz"
                        ? category.name_uz
                        : i18n.language === "ru"
                        ? category.name_ru
                        : i18n.language === "it" &&
                          category.name_it !== null &&
                          category.name_it !== ""
                        ? category.name_it
                        : category.name_en}
                    </h1>
                  </div>
                  <div className="category_page_wrap">
                    <div className="tour_packages">
                      <div className="this_wrapper">
                        {filteredTourPackages.map((tourpackage) => (
                          <TourPackageCard
                            key={tourpackage.id}
                            tourpackage={tourpackage}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Category;
