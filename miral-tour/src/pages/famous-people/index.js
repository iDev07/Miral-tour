import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import { ChevronRight } from "@mui/icons-material";
import { Container } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

function FamousPeople() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/famous-peoples`)
      .then((response) => {
        setPersons(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Ancient Scholars of Uzbekistan - Miral Tour </title>
        <meta
          name="keywords"
          content="miral tour, miral tour uz, miral-tour, miral, world-miral, miral-tourism  ALL4U-TOURISM, ALL4U-TOUR, all4u-tourism, all4u-tour, tourism, travel tour, Miral Tour,tourism Uzbekistan"
        />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <div className="all_places pt_100">
            <div className="all_places_wrapper">
              <div className="intro">
                <h1>Ancient Scholars of Uzbekistan</h1>
              </div>
              <div className="places">
                {persons &&
                  persons.length &&
                  persons.map((person) => (
                    <div className="place">
                      <Link href={`/famous-people/${person.seo_url}`}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/famous-people/${person.main_image}`}
                          alt={`${person.title_en}`}
                        />
                        <div className="place_wrap">
                          <div className="content">
                            <h2>{person.title_en}</h2>
                            <p> {person.name_en}</p>
                            <p className="read_more">
                              Read more{" "}
                              <span>
                                <ChevronRight />
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default FamousPeople;
