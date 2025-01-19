import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
function BusinessTours() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    company_name: "",
    client_firstname: "",
    client_lastname: "",
    phone_number: "",
    email: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = process.env.NEXT_PUBLIC_BASE_URL + "/business-requests";

      const formdata = new FormData();
      formdata.append("company_name", formData.company_name);
      formdata.append("client_firstname", formData.client_firstname);
      formdata.append("client_lastname", formData.client_lastname);
      formdata.append("phone_number", formData.phone_number);
      formdata.append("email", formData.email);

      // Using axios for the POST request
      await axios.post(apiUrl, formdata);

      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending request:", error.message);
      console.error("Error details:", error.response); // Log the response details if available
      // Handle errors
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // console.log(formData);
  // console.log(formSubmitted);
  return (
    <>
      <Head>
        <title>{t("businessPage.title")}</title>
        <meta
          name="description"
          content="Welcome to Miral Tour, we are pleased to offer you business
                    tours, where we provide comprehensive information about
                    exciting business tours and tourist destinations."
        />
        <link rel="icon" href="/img/mini_logo.png" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="Miral Tour" />
        <meta
          name="keywords"
          content="miral tour, miral tour uz, miral-tour, miral, world-miral, miral-tourism  ALL4U-TOURISM, ALL4U-TOUR, all4u-tourism, all4u-tour, tourism, travel tour, Miral Tour,tourism Uzbekistan, uzbekistan tourism, tour company"
        />
        <meta property="og:title" content="Miral Tour" />
        <meta
          property="og:description"
          content="Welcome to Miral Tour, we are pleased to offer you business
                    tours, where we provide comprehensive information about
                    exciting business tours and tourist destinations."
        />
        <meta
          property="og:image"
          content="https://admin.all4u-tour.uz/images/logo/seo_logo1.png"
        />
        <meta property="og:image:width" content="780" />
        <meta property="og:image:height" content="400" />
        <meta property="og:site_name" content="Miral Tour" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Logo" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Miral Tour" />
        <meta
          property="twitter:description"
          content="Welcome to Miral Tour, we are pleased to offer you business
                    tours, where we provide comprehensive information about
                    exciting business tours and tourist destinations."
        />
        <meta
          property="twitter:image"
          content="https://admin.all4u-tour.uz/images/logo/seo_logo1.png"
        />
        <meta
          name="msapplication-TileImage"
          content="https://admin.all4u-tour.uz/images/logo/seo_logo1.png"
        />
      </Head>
      <div className="business_tours pt_70">
        <div className="business_tours_wrapper">
          <div className="background_section">
            <div className="background_wrapper">
              <Container>
                <div className="content_grid">
                  <div className="intro" data-aos="fade-right">
                    <h2>{t("businessPage.introTitle")}</h2>
                    <p>{t("businessPage.introDesc")}</p>
                    <a href="#contactus">{t("businessPage.contactus")}</a>
                  </div>
                  {/* <div className="consultant">
                    <img src="img/consultant.png" />
                  </div> */}
                </div>
              </Container>
            </div>
          </div>
          <div className="services">
            <Container>
              <div className="services_wrapper">
                <div className="intro">
                  <h1>{t("businessPage.subTitle")}</h1>
                  <p>{t("businessPage.desc1")}</p>
                  <p>{t("businessPage.desc2")}</p>
                  <p>{t("businessPage.desc3")}</p>
                </div>
                <div className="description_section">
                  <h1>{t("businessPage.servicesTitle")}</h1>
                </div>
                <div className="services_grid">
                  <div className="mycol">
                    <div className="mycol_wrapper">
                      <div className="hidden_description">
                        <p>{t("businessPage.servicesDesc1")}</p>
                      </div>
                      <div className="showed_content">
                        <div className="imagebox">
                          <img
                            src="/img/service1.png"
                            alt="Miral Tour - Business Tours"
                          />
                        </div>
                        <div className="content_shows">
                          <h3>{t("businessPage.serviceTitle1")}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mycol">
                    <div className="mycol_wrapper">
                      <div className="hidden_description">
                        <p>{t("businessPage.servicesDesc2")}</p>
                      </div>
                      <div className="showed_content">
                        <div className="imagebox">
                          <img
                            src="/img/service2.png"
                            alt="Miral Tour - Business Tours"
                          />
                        </div>
                        <div className="content_shows">
                          <h3>{t("businessPage.serviceTitle2")}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mycol">
                    <div className="mycol_wrapper">
                      <div className="hidden_description">
                        <p>{t("businessPage.servicesDesc3")}</p>
                      </div>
                      <div className="showed_content">
                        <div className="imagebox">
                          <img
                            src="/img/service3.png"
                            alt="Miral Tour - Business Tours"
                          />
                        </div>
                        <div className="content_shows">
                          <h3>{t("businessPage.serviceTitle3")}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mycol">
                    <div className="mycol_wrapper">
                      <div className="hidden_description">
                        <p>{t("businessPage.servicesDesc4")}</p>
                      </div>
                      <div className="showed_content">
                        <div className="imagebox">
                          <img
                            src="/img/service4.png"
                            alt="Miral Tour - Business Tours"
                          />
                        </div>
                        <div className="content_shows">
                          <h3>{t("businessPage.serviceTitle4")}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mycol">
                    <div className="mycol_wrapper">
                      <div className="hidden_description">
                        <p>{t("businessPage.servicesDesc5")}</p>
                      </div>
                      <div className="showed_content">
                        <div className="imagebox">
                          <img
                            src="/img/service5.png"
                            alt="Miral Tour - Business Tours"
                          />
                        </div>
                        <div className="content_shows">
                          <h3>{t("businessPage.serviceTitle5")}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mycol">
                    <div className="mycol_wrapper">
                      <div className="hidden_description">
                        <p>{t("businessPage.servicesDesc6")}</p>
                      </div>
                      <div className="showed_content">
                        <div className="imagebox">
                          <img
                            src="/img/service6.png"
                            alt="Miral Tour - Business Tours"
                          />
                        </div>
                        <div className="content_shows">
                          <h3>{t("businessPage.serviceTitle6")}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mycol">
                    <div className="mycol_wrapper">
                      <div className="hidden_description">
                        <p>{t("businessPage.servicesDesc7")}</p>
                      </div>
                      <div className="showed_content">
                        <div className="imagebox">
                          <img
                            src="/img/service7.png"
                            alt="Miral Tour - Business Tours"
                          />
                        </div>
                        <div className="content_shows">
                          <h3>{t("businessPage.serviceTitle7")}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mycol">
                    <div className="mycol_wrapper">
                      <div className="hidden_description">
                        <p>{t("businessPage.servicesDesc8")}</p>
                      </div>
                      <div className="showed_content">
                        <div className="imagebox">
                          <img
                            src="/img/service8.png"
                            alt="Miral Tour - Business Tours"
                          />
                        </div>
                        <div className="content_shows">
                          <h3>{t("businessPage.serviceTitle8")}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mycol">
                    <div className="mycol_wrapper">
                      <div className="hidden_description">
                        <p>{t("businessPage.servicesDesc9")}</p>
                      </div>
                      <div className="showed_content">
                        <div className="imagebox">
                          <img
                            src="/img/service9.png"
                            alt="Miral Tour - Business Tours"
                          />
                        </div>
                        <div className="content_shows">
                          <h3>{t("businessPage.serviceTitle9")}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mycol">
                    <div className="mycol_wrapper">
                      <div className="hidden_description">
                        <p>{t("businessPage.servicesDesc10")}</p>
                      </div>
                      <div className="showed_content">
                        <div className="imagebox">
                          <img
                            src="/img/service10.png"
                            alt="Miral Tour - Business Tours"
                          />
                        </div>
                        <div className="content_shows">
                          <h3>{t("businessPage.serviceTitle10")}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact_form">
                <form onSubmit={handleSubmit}>
                  <div className="contact_wrapper" id="contactus">
                    <div className="left_box">
                      <div className="this_wrapper">
                        <div className="input">
                          <input
                            type="text"
                            placeholder={t("businessPage.companyName")}
                            name="company_name"
                            value={formData.company_name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="input">
                          <input
                            type="text"
                            placeholder={t("businessPage.name")}
                            name="client_firstname"
                            value={formData.client_firstname}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="input">
                          <input
                            type="text"
                            placeholder={t("businessPage.surname")}
                            name="client_lastname"
                            value={formData.client_lastname}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="input">
                          <input
                            type="number"
                            placeholder={t("businessPage.phone")}
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="input">
                          <input
                            type="email"
                            placeholder={t("businessPage.email")}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="right_box">
                      <div className="this_wrapper">
                        <h2>{t("businessPage.contactus")}</h2>
                        <p>{t("businessPage.contactDesc")}</p>
                        <button type="submit">{t("businessPage.send")}</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Container>
          </div>
          {formSubmitted && (
            <div>
              <p
                className={`success-notification ${
                  formSubmitted ? "visible" : ""
                }`}
              >
                {t("businessPage.successForm")}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BusinessTours;
