import Loader from "@/components/Loader";
import { ChevronRight } from "@mui/icons-material";
import { Container } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Cities() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/cities`)
      .then((response) => {
        setCities(response.data);
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
        <title>Uzbekistan cities and regions Miral Tour Uzbekistan</title>
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <div className="all_places pt_100">
            <div className="all_places_wrapper">
              <div className="intro">
                <h1>Uzbekistan cities and regions</h1>
              </div>
              <div className="places">
                {cities &&
                  cities.length &&
                  cities.map((city) => (
                    <div className="place">
                      <Link href={`/cities/${city.seo_url}`}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/city/${city.main_image}`}
                          alt={`${city.title_en}`}
                        />
                        <div className="place_wrap">
                          <div className="content">
                            <h2>{city.name_en}</h2>
                            <p>{city.title_en}</p>
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

export default Cities;
