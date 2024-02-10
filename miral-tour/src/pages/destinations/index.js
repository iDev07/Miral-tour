import Loader from "@/components/Loader";
import { ChevronRight } from "@mui/icons-material";
import { Container } from "@mui/material";
import { Select } from "antd";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Destinations() {
  const [cities, setCities] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [cityCheck, setCityCheck] = useState(0);
  const [typeCheck, setTypeCheck] = useState(0);
  const types = [
    {
      label: "Museum",
      value: 1,
    },
    {
      label: "Hotels",
      value: 2,
    },
    {
      label: "Attractions",
      value: 3,
    },
    {
      label: "Vicinity",
      value: 4,
    },
    {
      label: "Leisure",
      value: 5,
    },
  ];
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
  const handleCityChange = (value) => {
    setCityCheck(value);
  };
  const handleTypeChange = (value) => {
    setTypeCheck(value);
  };
  // Inside your component, after the useEffect hook
  const filteredDestinations = destinations.filter((destination) => {
    // Check if the selected city is set and filter destinations accordingly
    const cityFilter = cityCheck && destination.city_id === parseInt(cityCheck);

    // Check if the selected type is set and filter destinations accordingly
    const typeFilter = typeCheck && destination.destination_type === typeCheck;

    // If both filters are true or no filters are set, include the destination
    return (!cityCheck || cityFilter) && (!typeCheck || typeFilter);
  });

  const sortedDestinations = filteredDestinations.slice().sort((a, b) => {
    // Sort based on cities and types if both are selected
    if (cityCheck && typeCheck) {
      if (a.city_id === b.city_id) {
        // If cities are the same, sort based on destination_type
        return a.destination_type - b.destination_type;
      } else {
        // Otherwise, sort based on cities
        return a.city_id - b.city_id;
      }
    }

    // Sort only based on cities if city is selected
    if (cityCheck) {
      return a.city_id - b.city_id;
    }

    // Sort only based on types if type is selected
    if (typeCheck) {
      return a.destination_type - b.destination_type;
    }

    // Default sorting (no filters applied)
    return "Not found";
  });
  console.log(filteredDestinations);
  // console.log(cityCheck);
  // console.log(typeCheck);
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
                <div className="sort">
                  <h3>Sort by: </h3>{" "}
                  <Select
                    defaultValue={{
                      value: 1,
                      label: "City",
                    }}
                    // style={{ width: 120, borderRadius: 0 }}
                    // suffixIcon={siuffix}
                    onChange={handleCityChange}
                    options={cities.map((city) => ({
                      value: city.id,
                      label: city.name_en,
                    }))}
                  />
                  <Select
                    defaultValue={{
                      value: 1,
                      label: "Type",
                    }}
                    // style={{ width: 120, borderRadius: 0 }}
                    // suffixIcon={siuffix}
                    onChange={handleTypeChange}
                    options={types}
                  />
                </div>
              </div>
              <div className="places">
                {sortedDestinations && sortedDestinations.length ? (
                  sortedDestinations.map((destination) => (
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
                  ))
                ) : (
                  <div className="not_found">
                    <p>Not found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default Destinations;
