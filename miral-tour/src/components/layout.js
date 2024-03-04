import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/footer";
import Providers from "./Providers";
import MobileHeader from "./Mobile/header";
import TopHeader from "./TopHeader/TopHeader";
import { Analytics } from "@vercel/analytics/react";
import BackToTop from "./ToTop";
import Head from "next/head";
function Layout({ children }) {
  return (
    <>
      <Head>
        {/* <title>Discover Uzbekistan with - Miral Tour</title>
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
        /> */}
      </Head>
      <div className="layout">
        <Providers>
          <TopHeader />
          <Header />
          <MobileHeader />
          {children}
          {/* <Socials /> */}
          <BackToTop />
          <Footer />
          <Analytics />
        </Providers>
      </div>
    </>
  );
}

export default Layout;
