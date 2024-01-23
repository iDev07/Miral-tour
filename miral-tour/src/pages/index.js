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
import Video from "@/components/Video/Video";
import Search from "./search";
import Banners from "@/components/Home/Banners";
import Background from "@/components/Home/Background";
import TawkToScript from "@/components/TawkScript/TawkScript";
import Socials from "@/components/Socials/Socials";
import Process from "@/components/Proccess/Process";
function HomePage() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [tourpackages, setTourPackages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch both tour packages and categories data
    axios
      .all([
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tourpackages`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/cities`),
      ])
      .then(
        axios.spread(
          (tourPackagesResponse, categoriesResponse, citiesResponse) => {
            setTourPackages(tourPackagesResponse.data);
            setCategories(categoriesResponse.data);
            setCities(citiesResponse.data);
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
        <title>Turbotour - We give emotions!</title>
        <meta
          name="description"
          content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. Book now and create lasting memories!"
        />
        <link rel="icon" href="miniT.png" />
        <meta name="author" content="World Miral" />
        <meta
          name="keywords"
          content="turbo-tour, turbotour, ALL4U-TOURISM, ALL4U-TOUR, all4u-tourism, all4u-tour,tourism, travel tour, turbotour,tourism Uzbekistan"
        />
        <meta property="og:title" content="Turbotour" />
        <meta
          property="og:description"
          content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. Book now and create lasting memories!"
        />
        <meta
          property="og:image"
          content="https://all4u-tour.uz/assets/logo/seo_logo.png"
        />
        <meta property="og:image:width" content="780" />
        <meta property="og:image:height" content="400" />
        <meta property="og:site_name" content="Turbotour" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Logo" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Turbotour" />
        <meta
          property="twitter:description"
          content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. Book now and create lasting memories!"
        />
        <meta
          property="twitter:image"
          content="https://all4u-tour.uz/assets/logo/seo_logo.png"
        />
        <meta
          name="msapplication-TileImage"
          content="https://all4u-tour.uz/assets/logo/seo_logo.png"
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
        />
      )}
      <Banners />
      <Business_category />
      <Countries_category />
      <Autorent />
      <Video />
      <Socials />
      <TawkToScript />
    </>
  );
}

export default HomePage;
