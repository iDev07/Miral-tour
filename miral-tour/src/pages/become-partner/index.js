import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";
function BecomePartner() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    client_firstname: "",
    client_lastname: "",
    company_name: "",
    phone_number: "",
    email: "",
    comment: "",
    direction: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = `{${process.env.NEXT_PUBLIC_BASE_URL}/business-requests`;

      const formdata = new FormData();
      formdata.append("company_name", formData.company_name);
      formdata.append("client_firstname", formData.client_firstname);
      formdata.append("client_lastname", formData.client_lastname);
      formdata.append("phone_number", formData.phone_number);
      formdata.append("email", formData.email);
      formdata.append("direction", formData.email);

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
  return (
    <>
      <Head>
        <title>{t("partnershipPage.title")}</title>
      </Head>
      <div className="BecomePartner pt_100">
        <Container>
          <div className="this_wrapper">
            <div className="left_box">
              <div className="main_content">
                <div className="page_name">
                  <h1>{t("partnershipPage.introTitle")}</h1>
                  <p className="p">{t("partnershipPage.introDesc")}</p>
                </div>
                <div className="advantages">
                  <div className="this_wrap">
                    <div className="col">
                      <div className="col_wrap">
                        <div className="top">
                          <div className="icon_back">
                            <svg
                              width="18"
                              height="20"
                              viewBox="0 0 18 20"
                              fill="#ffffff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.5002 2.11031L10.5102 0.240313C9.68016 -0.0696875 8.32016 -0.0696875 7.49016 0.240313L2.50016 2.11031C1.35016 2.54031 0.410156 3.90031 0.410156 5.12031V12.5503C0.410156 13.7303 1.19016 15.2803 2.14016 15.9903L6.44016 19.2003C7.85016 20.2603 10.1702 20.2603 11.5802 19.2003L15.8802 15.9903C16.8302 15.2803 17.6102 13.7303 17.6102 12.5503V5.12031C17.5902 3.90031 16.6502 2.54031 15.5002 2.11031ZM8.93016 5.03031C10.1102 5.03031 11.0702 5.99031 11.0702 7.17031C11.0702 8.33031 10.1602 9.26031 9.01016 9.30031H8.99016H8.97016C8.95016 9.30031 8.93016 9.30031 8.91016 9.30031C7.71016 9.26031 6.81016 8.33031 6.81016 7.17031C6.80016 5.99031 7.76016 5.03031 8.93016 5.03031ZM11.1902 14.3603C10.5802 14.7603 9.79016 14.9703 9.00016 14.9703C8.21016 14.9703 7.41016 14.7703 6.81016 14.3603C6.24016 13.9803 5.93016 13.4603 5.92016 12.8903C5.92016 12.3303 6.24016 11.7903 6.81016 11.4103C8.02016 10.6103 9.99016 10.6103 11.2002 11.4103C11.7702 11.7903 12.0902 12.3103 12.0902 12.8803C12.0802 13.4403 11.7602 13.9803 11.1902 14.3603Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                          <h3>{t("partnershipPage.advTitle1")}</h3>
                        </div>
                        <div className="content">
                          <p>{t("partnershipPage.advDesc1")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="col_wrap">
                        <div className="top">
                          <div className="icon_back">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.88 11.53C16.88 11.92 16.57 12.23 16.18 12.23C15.79 12.23 15.48 11.92 15.48 11.53V11.35L12.76 14.07C12.61 14.22 12.41 14.29 12.2 14.27C11.99 14.25 11.8 14.14 11.69 13.96L10.67 12.44L8.29 14.82C8.15 14.96 7.98 15.02 7.8 15.02C7.62 15.02 7.44 14.95 7.31 14.82C7.04 14.55 7.04 14.11 7.31 13.83L10.29 10.85C10.44 10.7 10.64 10.63 10.85 10.65C11.06 10.67 11.25 10.78 11.36 10.96L12.38 12.48L14.49 10.37H14.31C13.92 10.37 13.61 10.06 13.61 9.67C13.61 9.28 13.92 8.97 14.31 8.97H16.17C16.26 8.97 16.35 8.99 16.44 9.02C16.61 9.09 16.75 9.23 16.82 9.4C16.86 9.49 16.87 9.58 16.87 9.67V11.53H16.88Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <h3>{t("partnershipPage.advTitle1")}</h3>
                        </div>
                        <div className="content">
                          <p>{t("partnershipPage.advDesc2")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="col_wrap">
                        <div className="top">
                          <div className="icon_back">
                            <img
                              src="/img/partnership_icon.svg"
                              alt="Icon Miral Tour"
                            />
                          </div>
                          <h3>{t("partnershipPage.advTitle3")}</h3>
                        </div>
                        <div className="content">
                          <p>{t("partnershipPage.advDesc3")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="col_wrap">
                        <div className="top">
                          <div className="icon_back">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.8301 15.6402C17.5001 15.2002 18.3801 15.6802 18.3801 16.4802V17.7702C18.3801 19.0402 17.3901 20.4002 16.2001 20.8002L13.0101 21.8602C12.4501 22.0502 11.5401 22.0502 10.9901 21.8602L7.80012 20.8002C6.60012 20.4002 5.62012 19.0402 5.62012 17.7702V16.4702C5.62012 15.6802 6.50012 15.2002 7.16012 15.6302L9.22012 16.9702C10.0101 17.5002 11.0101 17.7602 12.0101 17.7602C13.0101 17.7602 14.0101 17.5002 14.8001 16.9702L16.8301 15.6402Z"
                                fill="white"
                              />
                              <path
                                d="M19.9795 6.45957L13.9895 2.52957C12.9095 1.81957 11.1295 1.81957 10.0495 2.52957L4.02953 6.45957C2.09953 7.70957 2.09953 10.5396 4.02953 11.7996L5.62953 12.8396L10.0495 15.7196C11.1295 16.4296 12.9095 16.4296 13.9895 15.7196L18.3795 12.8396L19.7495 11.9396V14.9996C19.7495 15.4096 20.0895 15.7496 20.4995 15.7496C20.9095 15.7496 21.2495 15.4096 21.2495 14.9996V10.0796C21.6495 8.78957 21.2395 7.28957 19.9795 6.45957Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <h3>{t("partnershipPage.advTitle4")}</h3>
                        </div>
                        <div className="content">
                          <p>{t("partnershipPage.advDesc4")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_box">
              <div className="form_partner">
                <div className="intro_form">
                  <h2>{t("partnershipPage.formTitle")}</h2>
                  <p className="p">{t("partnershipPage.formDesc")}</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="contact_wrapper" id="contactus">
                    <div className="left_box">
                      <div className="this_wrapper">
                        <div className="input">
                          <input
                            type="text"
                            placeholder={t("partnershipPage.nameLabel")}
                            name="client_firstname"
                            value={formData.client_firstname}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="input">
                          <input
                            type="number"
                            placeholder={t("partnershipPage.phoneLabel")}
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="input">
                          <input
                            type="email"
                            placeholder={t("partnershipPage.mailLabel")}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="input">
                          <input
                            type="text"
                            placeholder={t("partnershipPage.direcLabel")}
                            name="client_lastname"
                            value={formData.client_lastname}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="input textarea">
                          <input
                            type="text"
                            placeholder={t("partnershipPage.comment")}
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                          />
                        </div>
                        <input
                          type="submit"
                          className="submit_req green_btn"
                          value={t("partnershipPage.submit")}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default BecomePartner;
