import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";

function BusinessTours() {
  return (
    <>
      <Head>
        <title>Business Tours</title>
      </Head>
      <div className="business_tours">
        <div className="business_tours_wrapper">
          <div className="background_section">
            <div className="background_wrapper">
              <Container>
                <div className="content_grid">
                  <div className="intro">
                    <p>
                      Uzbekistan is a country of oriental flavor, ready to offer
                      a lot, and we are ready to fill your visit with a unique
                      combination of productivity and relaxation.
                    </p>
                    <h2>Entrust your trip to us!</h2>
                  </div>
                  <div className="consultant">
                    <img src="img/consultant.png" />
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <div className="serrvices">
            <Container>
              <div className="services_wrapper">
                <div className="intro">
                  <h1>Business trips to Uzbekistan</h1>
                  <p>
                    Welcome to Miral Tour, we are pleased to offer you business
                    tours, where we provide comprehensive information about
                    exciting business tours and tourist destinations. Uzbekistan
                    is a country known for its rich history, culture and
                    beautiful architecture, making it a popular destination for
                    business travelers. Whether you are a business professional
                    looking for networking opportunities, attending conferences
                    or exploring new markets, Uzbekistan has much to offer and
                    our business tours offer a unique combination of
                    productivity and relaxation.
                  </p>
                </div>
                <div className="description_section"></div>
                <div className="services_grid">
                  <div className="mycol">
                    <div className="mycol_wrapper">
                      <div className="hidden_description">
                        <p>
                          We meticulously craft tailored schedules aligned with
                          your business goals, ensuring a seamless blend of
                          meetings, site visits, and networking opportunities
                          for a productive and efficient business tour.
                        </p>
                      </div>
                      <div className="imagebox">
                        <img
                          src="https://www.worldmiral.com/images/carer1.png"
                          alt="Miral Tour - Business Tours"
                        />
                      </div>
                      <div className="content_shows">
                        <h3>Itinerary Planning</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessTours;
