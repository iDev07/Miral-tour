import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Hero from "@/components/Home/hero";
import { useRouter } from "next/router";
import Business_category from "@/components/Home/business_category";
import Countries_category from "@/components/Home/countries_category";
import Autorent from "@/components/Home/Autorent";
import Loader from "@/components/Loader";
import { useTranslation } from "react-i18next";
import { CategorySection } from "@/components/Category/CategorySection";
import Video from "@/components/Video/Video";
import Search from "./search";
import Banners from "@/components/Home/Banners";
import Background from "@/components/Home/Background";
import TawkToScript from "@/components/TawkScript/TawkScript";
import Socials from "@/components/Socials/Socials";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Process from "@/components/Proccess/Process";
import AboutUsVideo from "@/components/Home/AboutUsVideo";
function HomePage() {
  // const router = useRouter();
  // useEffect(() => {
  //   router.replace("/?v=1", undefined, { shallow: true });
  // }, []);
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [tourpackages, setTourPackages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [countriesBack, setCountriesBack] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch both tour packages and categories data
    axios
      .all([
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tourpackages`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/cities`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/countries`),
      ])
      .then(
        axios.spread(
          (
            tourPackagesResponse,
            categoriesResponse,
            citiesResponse,
            countriesResponse
          ) => {
            setLoading(false);
            setTourPackages(tourPackagesResponse.data);
            setCategories(categoriesResponse.data);
            setCities(citiesResponse.data);
            setCountriesBack(countriesResponse.data);
          }
        )
      )
      .catch((error) => {
        console.error("An error occurred:", error);
        setLoading(false);
      });
  }, []);
  // console.log(categories[0]);
  return (
    <>
      <Background />
      {/* <Process /> */}
      {loading ? (
        <Loader />
      ) : (
        <Hero
          tourpackages={tourpackages}
          categories={categories}
          cities={cities}
          countriesBack={countriesBack}
        />
      )}
      <Banners />
      {loading ? (
        <Loader />
      ) : (
        <CategorySection
          id={categories[0].id}
          tourpackages={tourpackages}
          category={categories[0]}
        />
      )}
      <Business_category />
      <Countries_category />
      <AboutUsVideo />
      <Autorent />
      {/* <Socials /> */}
      {/* <TawkToScript /> */}
    </>
  );
}

export default HomePage;
