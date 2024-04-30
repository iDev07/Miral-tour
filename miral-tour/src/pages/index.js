import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Hero from "@/components/Home/hero";
import Business_category from "@/components/Home/business_category";
import Countries_category from "@/components/Home/countries_category";
import Autorent from "@/components/Home/Autorent";
import Loader from "@/components/Loader";
import { useTranslation } from "react-i18next";
import { CategorySection } from "@/components/Category/CategorySection";
import Banners from "@/components/Home/Banners";
import Background from "@/components/Home/Background";
import Process from "@/components/Proccess/Process";
import AboutUsVideo from "@/components/Home/AboutUsVideo";
function HomePage() {
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
            setTourPackages(tourPackagesResponse.data);
            setCategories(categoriesResponse.data);
            setCities(citiesResponse.data);
            setCountriesBack(countriesResponse.data);
            setLoading(false);
          }
        )
      )
      .catch((error) => {
        console.error("An error occurred:", error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Discover Uzbekistan with - Miral Tour</title>
        <meta
          name="description"
          content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. "
        />
        <link rel="icon" href="/img/mini_logo.png" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="Miral Tour" />
        <meta
          name="keywords"
          content="miral tour, miral tour uz, miral-tour, miral, world-miral, miral-tourism  ALL4U-TOURISM, ALL4U-TOUR, all4u-tourism, all4u-tour, tourism, travel tour, Miral Tour,tourism Uzbekistan"
        />
        <meta property="og:title" content="Miral Tour" />
        <meta
          property="og:description"
          content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. Book now and create lasting memories!"
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
          content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. Book now and create lasting memories!"
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
      {categories.length === 0 ? (
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
