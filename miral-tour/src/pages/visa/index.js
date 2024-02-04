import React from "react";
import { Container } from "@mui/material";
import { Table } from "antd";
import Head from "next/head";
function Visa() {
  const dataSource1 = [
    {
      key: "1",
      name: "Albania",
      name2: "Algeria",
      name3: "Bahrain",
      name4: "Bhutan",
    },
    {
      key: "2",
      name: "Venezuela",
      name2: "Vietnam",
      name3: "Gabonese",
      name4: "Guyana",
    },
    {
      key: "3",
      name: "Equatorial Guinea",
      name2: "South Africa",
      name3: "Qatar",
      name4: "Colombia",
    },
    {
      key: "4",
      name: "Bhutan",
      name2: "Kuwait",
      name3: "Lebanese",
      name4: "Mauritius",
    },
    {
      key: "5",
      name: "Macedonia",
      name2: "Maldives",
      name3: "Morocco",
      name4: "Nauru",
    },
    {
      key: "6",
      name: "UAE",
      name2: "Oman",
      name3: "Palau",
      name4: "Peru",
    },
    {
      key: "7",
      name: "Saudi Arabia",
      name2: "Seychelles",
      name3: "USA",
      name4: "Suriname",
    },
    {
      key: "8",
      name: "Thailand",
      name2: "Tunisia",
      name3: "Turkmenistan",
      name4: "Uruguay",
    },
    {
      key: "9",
      name: "Fiji",
      name2: "Philippines",
      name3: "Sri Lanka",
      name4: "Ecuador",
    },
  ];

  const columns1 = [
    {
      title: "List of countries",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "List of countries",
      dataIndex: "name2",
      key: "name2",
    },
    {
      title: "List of countries",
      dataIndex: "name3",
      key: "name3",
    },
    {
      title: "List of countries",
      dataIndex: "name4",
      key: "name4",
    },
  ];

  return (
    <>
      <Head>
        <title>Visa to Uzbekistan</title>
      </Head>
      <div className="Visa pt_70">
        <div className="visa_wrapper">
          <div className="background_section">
            <div className="background_wrapper">
              <Container>
                <div className="content_grid">
                  <div className="intro">
                    <h2>
                      Uzbekistan visa; transit visa; e-visa, visa-free entry to
                      Uzbekistan.
                    </h2>
                    <p>
                      Uzbekistan is a country of oriental flavor, ready to offer
                      a lot, and we are ready to fill your visit with a unique
                      combination of productivity and relaxation.
                    </p>
                  </div>
                  {/* <div className="consultant">
                    <img src="img/consultant.png" />
                  </div> */}
                </div>
              </Container>
            </div>
          </div>
          <Container>
            <div className="types_wrapper">
              <div className="visa_countries">
                <h2>Transit visa to Uzbekistan</h2>
                <p>
                  To enter the Uzbekistan for tourism purposes, a valid passport
                  and visa are required unless you are from a country with a
                  visa-free travel agreement with Uzbekistan. You can pay for
                  the visa to Uzbekistan in US dollars, euros, or any other
                  currency. The validity of a tourist visa lasts for 30 days.
                  There are three different ways to obtain a permit to
                  Uzbekistan in addition to visa-free entry, which is detailed
                  below.
                </p>
                <p>
                  If there is an air ticket to a third country, citizens of 36
                  countries can stay in Uzbekistan without a visa for no more
                  than five days.
                </p>
                <p>
                  <div className="first">
                    <Table
                      dataSource={dataSource1}
                      columns={columns1}
                      pagination={false}
                    />
                  </div>
                </p>
                <h2>Electronic visa to Uzbekistan</h2>
                <div className="e_visa">
                  <p>
                    {" "}
                    From July 15, 2018, a system for processing and issuing
                    electronic entry visas for staying in Uzbekistan for tourist
                    purposes was introduced.
                  </p>
                  <p>
                    The system of issuing electronic visas to Uzbekistan allows
                    you to obtain an entry tourist visa to Uzbekistan online
                    without visiting the embassy or consulate of the Republic of
                    Uzbekistan.
                  </p>
                  <p>Electronic visa is issued for a period of 30 days.</p>
                  <p>
                    Electronic visa is valid for 90 days from the date of issue.
                  </p>
                  <p>
                    Electronic visa to Uzbekistan is considered and issued
                    within two business days, excluding the day of application
                    for a visa.
                  </p>
                  <p>
                    The issued electronic visa will be sent to the e-mail
                    address indicated when submitting the application on the web
                    portal “<a href="e-visa.gov.uz">e-visa.gov.uz</a>”.
                  </p>
                  <p>
                    An application for an electronic visa must be submitted at
                    least three business days before the planned date of travel
                    to Uzbekistan.
                  </p>
                  <b> Cost of an electronic entry visa:</b>
                  <ul>
                    <b>
                      <li>Single entry visa - 20 US dollars per person</li>
                    </b>
                    <b>
                      <li>Double entry visa - 35 US dollars per person</li>
                    </b>
                    <b>
                      <li>Multiple entry visa - 50 US dollars per person</li>
                    </b>
                  </ul>
                  <p>Payment is made by credit cards online.</p>
                  <p>
                    If an electronic visa is refused, the amount paid will not
                    be refunded.
                  </p>
                  <p>
                    An electronic visa is not stuck in the travel document
                    (passport). The issued electronic visa in paper or
                    electronic form will be the basis for crossing the border.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Visa;
