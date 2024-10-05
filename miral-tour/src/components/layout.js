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
