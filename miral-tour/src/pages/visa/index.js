import React from "react";
import { Container } from "@mui/material";
import { Table } from "antd";
import Head from "next/head";
function Visa() {
  const dataSource = [
    {
      key: "1",
      name: "Albania",
    },
    {
      key: "2",
      name: "Algeria",
    },
    {
      key: "3",
      name: "Bahrain",
    },
    {
      key: "4",
      name: "Bhutan",
    },
    {
      key: "5",
      name: "Venezuela",
    },
    {
      key: "6",
      name: "Vietnam",
    },
    {
      key: "7",
      name: "Republic of Gabonese",
    },
    {
      key: "8",
      name: "Guyana",
    },
    {
      key: "9",
      name: "India",
    },
    {
      key: "10",
      name: "Qatar",
    },
    {
      key: "11",
      name: "Colombia",
    },
    {
      key: "12",
      name: "Kuwait",
    },
    {
      key: "13",
      name: "Lebanese Republic",
    },
    {
      key: "14",
      name: "Mauritius",
    },
    {
      key: "15",
      name: "Macedonia",
    },
    {
      key: "16",
      name: "Republic of Maldives",
    },
    {
      key: "17",
      name: "Morocco",
    },
    {
      key: "18",
      name: "Nauru",
    },
  ];

  const columns = [
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
                    <a href="#contactus">Contact us</a>
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
                  To enter the Republic of Uzbekistan for tourism purposes, a
                  valid passport and visa are required unless you are from a
                  country with a visa-free travel agreement with Uzbekistan. You
                  can pay for the visa to Uzbekistan in US dollars, euros, or
                  any other currency. The validity of a tourist visa lasts for
                  30 days. There are three different ways to obtain a permit to
                  Uzbekistan in addition to visa-free entry, which is detailed
                  below.
                </p>
                <p>
                  <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                  />
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Visa;
