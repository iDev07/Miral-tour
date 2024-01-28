import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/footer";
import Providers from "./Providers";
import MobileHeader from "./Mobile/header";
import TopHeader from "./TopHeader/TopHeader";
import Socials from "./Socials/Socials";
import BackToTop from "./ToTop";

function Layout({ children }) {
  return (
    <div>
      <Providers>
        <TopHeader />
        <Header />
        <MobileHeader />
        {children}
        <Socials />
        <BackToTop />
        <Footer />
      </Providers>
    </div>
  );
}

export default Layout;
