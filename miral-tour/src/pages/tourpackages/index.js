import { TourPackageCard } from "@/components/TourPackage/TourPackageCard";
import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
function TourpackagesAll() {
  const [tourpackages, setTourPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/tourpackages`)
      .then((res) => {
        setTourPackages(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("An occured error", error);
        setLoading(false);
      });
  });
  return (
    <>
      <Head>
        <title>All Tour packages - Miral Tour</title>
      </Head>
      <div className="all_tourpackages pt_100">
        <div className="this_wrapper">
          <Container>
            <div className="intro">
              <h1>Tour packages</h1>
            </div>
            <div className="tours">
              {tourpackages &&
                tourpackages.length &&
                tourpackages.map((tourpackage) => (
                  <TourPackageCard tourpackage={tourpackage} />
                ))}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default TourpackagesAll;
