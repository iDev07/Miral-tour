import React, { useState, useEffect } from "react";
import Layout from "@/components/layout";
import Loader from "@/components/Loader";
import NextNProgress from "nextjs-progressbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/main.scss";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server
  }

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Layout>
          <NextNProgress color="#0073db" />
          <Component {...pageProps} />
          <SpeedInsights />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
