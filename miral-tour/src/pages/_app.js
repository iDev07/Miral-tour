// pages/_app.js
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout";
import Loader from "@/components/Loader";
import NextNProgress from "nextjs-progressbar";
import "@/styles/main.scss";
import "@/styles/globals.css";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <>
      {loading === true ? (
        <Loader />
      ) : (
        <Layout>
          <NextNProgress color="#0073db" /> <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
