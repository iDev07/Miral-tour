import Loader from "@/components/Loader";
import { ChevronRight } from "@mui/icons-material";
import { Container } from "@mui/material";
import { Select } from "antd";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .all([
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/cities`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/destinations`),
      ])
      .then(
        axios.spread((citiesResponse, destinationsResponse) => {
          setLoading(false);
          setCities(citiesResponse.data);
          setDestinations(destinationsResponse.data);
        })
      )
      .catch((error) => {
        console.error("An error occurred:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Uzbekistan destinations and regions Miral Tour Uzbekistan</title>
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <div className="all_places_destinations pt_100">
            <div className="all_places_wrapper">
              <div className="intro">
                <div className="title">
                  <h1>Uzbekistan destinations and regions</h1>
                </div>
                <div className="sort"></div>
              </div>
              <div className="places">
                {destinations &&
                  destinations.length &&
                  destinations.map((destination) => (
                    <div className="place">
                      <Link href={`/destinations/${destination.seo_url}`}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/destination/${destination.main_image}`}
                          alt={`${destination.title_en}`}
                        />
                        <div className="place_wrap">
                          <div className="content">
                            <h2>{destination.title_en}</h2>
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

export default Destinations;
