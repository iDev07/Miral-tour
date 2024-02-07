import { Container } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Cities() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/cities`)
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Uzbekistan cities and regions Miral Tour Uzbekistan</title>
      </Head>
      <Container>
        <div className="all_places pt_100">
          <div className="all_places_wrapper">
            <div className="intro">
              <h1>Uzbekistan cities and regions</h1>
            </div>
            <div className="places">
              <div className="place">
                <div className="place_wrap"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Cities;
