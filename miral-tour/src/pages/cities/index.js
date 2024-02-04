import { Container } from "@mui/material";
import axios from "axios";
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
    <Container>
      <div className="list_cities pt_100">
        <ul>
          {cities &&
            cities.length &&
            cities.map((city) => (
              <li>
                <Link href={`/cities/${city.seo_url}`}>{city.name_en}</Link>
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
}

export default Cities;
