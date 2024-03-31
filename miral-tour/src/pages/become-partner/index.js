import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import Head from "next/head";
function BecomePartner() {
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
        <title>Become a partner</title>
      </Head>
      <div className="BecomePartner pt_100">
        <Container>
          <div className="this_wrapper">
            <div className="left_box">
              <div className="main_content">
                <div className="page_name">
                  <h1>Become Partner</h1>
                  <p className="p">
                    If you want to cooperate with us, please fill out the
                    following questions and we will contact you soon. Please
                    answer the questions accuratelyn
                  </p>
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
                          <h3>Safe travels</h3>
                        </div>
                        <div className="content">
                          <p>
                            {" "}
                            If you want to cooperate with us, please fill out
                            the following questions and we will contact you
                            soon. Please answer the questions accuratelyn
                          </p>
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
                              fill="#ffffff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <p
                                className="p"
                                ath
                                d="M18.5002 4.11031L13.5102 2.24031C12.6802 1.93031 11.3202 1.93031 10.4902 2.24031L5.50016 4.11031C4.35016 4.54031 3.41016 5.90031 3.41016 7.12031V14.5503C3.41016 15.7303 4.19016 17.2803 5.14016 17.9903L9.44016 21.2003C10.8502 22.2603 13.1702 22.2603 14.5802 21.2003L18.8802 17.9903C19.8302 17.2803 20.6102 15.7303 20.6102 14.5503V7.12031C20.5902 5.90031 19.6502 4.54031 18.5002 4.11031ZM11.9302 7.03031C13.1102 7.03031 14.0702 7.99031 14.0702 9.17031C14.0702 10.3303 13.1602 11.2603 12.0102 11.3003H11.9902H11.9702C11.9502 11.3003 11.9302 11.3003 11.9102 11.3003C10.7102 11.2603 9.81016 10.3303 9.81016 9.17031C9.80016 7.99031 10.7602 7.03031 11.9302 7.03031ZM14.1902 16.3603C13.5802 16.7603 12.7902 16.9703 12.0002 16.9703C11.2102 16.9703 10.4102 16.7703 9.81016 16.3603C9.24016 15.9803 8.93016 15.4603 8.92016 14.8903C8.92016 14.3303 9.24016 13.7903 9.81016 13.4103C11.0202 12.6103 12.9902 12.6103 14.2002 13.4103C14.7702 13.7903 15.0902 14.3103 15.0902 14.8803C15.0802 15.4403 14.7602 15.9803 14.1902 16.3603Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                          <h3>Safe travels</h3>
                        </div>
                        <div className="content">
                          <p>
                            {" "}
                            If you want to cooperate with us, please fill out
                            the following questions and we will contact you
                            soon. Please answer the questions accuratelyn
                          </p>
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
                              fill="#ffffff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <p
                                className="p"
                                ath
                                d="M18.5002 4.11031L13.5102 2.24031C12.6802 1.93031 11.3202 1.93031 10.4902 2.24031L5.50016 4.11031C4.35016 4.54031 3.41016 5.90031 3.41016 7.12031V14.5503C3.41016 15.7303 4.19016 17.2803 5.14016 17.9903L9.44016 21.2003C10.8502 22.2603 13.1702 22.2603 14.5802 21.2003L18.8802 17.9903C19.8302 17.2803 20.6102 15.7303 20.6102 14.5503V7.12031C20.5902 5.90031 19.6502 4.54031 18.5002 4.11031ZM11.9302 7.03031C13.1102 7.03031 14.0702 7.99031 14.0702 9.17031C14.0702 10.3303 13.1602 11.2603 12.0102 11.3003H11.9902H11.9702C11.9502 11.3003 11.9302 11.3003 11.9102 11.3003C10.7102 11.2603 9.81016 10.3303 9.81016 9.17031C9.80016 7.99031 10.7602 7.03031 11.9302 7.03031ZM14.1902 16.3603C13.5802 16.7603 12.7902 16.9703 12.0002 16.9703C11.2102 16.9703 10.4102 16.7703 9.81016 16.3603C9.24016 15.9803 8.93016 15.4603 8.92016 14.8903C8.92016 14.3303 9.24016 13.7903 9.81016 13.4103C11.0202 12.6103 12.9902 12.6103 14.2002 13.4103C14.7702 13.7903 15.0902 14.3103 15.0902 14.8803C15.0802 15.4403 14.7602 15.9803 14.1902 16.3603Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                          <h3>Safe travels</h3>
                        </div>
                        <div className="content">
                          <p>
                            {" "}
                            If you want to cooperate with us, please fill out
                            the following questions and we will contact you
                            soon. Please answer the questions accuratelyn
                          </p>
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
                              fill="#ffffff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <p
                                className="p"
                                ath
                                d="M18.5002 4.11031L13.5102 2.24031C12.6802 1.93031 11.3202 1.93031 10.4902 2.24031L5.50016 4.11031C4.35016 4.54031 3.41016 5.90031 3.41016 7.12031V14.5503C3.41016 15.7303 4.19016 17.2803 5.14016 17.9903L9.44016 21.2003C10.8502 22.2603 13.1702 22.2603 14.5802 21.2003L18.8802 17.9903C19.8302 17.2803 20.6102 15.7303 20.6102 14.5503V7.12031C20.5902 5.90031 19.6502 4.54031 18.5002 4.11031ZM11.9302 7.03031C13.1102 7.03031 14.0702 7.99031 14.0702 9.17031C14.0702 10.3303 13.1602 11.2603 12.0102 11.3003H11.9902H11.9702C11.9502 11.3003 11.9302 11.3003 11.9102 11.3003C10.7102 11.2603 9.81016 10.3303 9.81016 9.17031C9.80016 7.99031 10.7602 7.03031 11.9302 7.03031ZM14.1902 16.3603C13.5802 16.7603 12.7902 16.9703 12.0002 16.9703C11.2102 16.9703 10.4102 16.7703 9.81016 16.3603C9.24016 15.9803 8.93016 15.4603 8.92016 14.8903C8.92016 14.3303 9.24016 13.7903 9.81016 13.4103C11.0202 12.6103 12.9902 12.6103 14.2002 13.4103C14.7702 13.7903 15.0902 14.3103 15.0902 14.8803C15.0802 15.4403 14.7602 15.9803 14.1902 16.3603Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                          <h3>Safe travels</h3>
                        </div>
                        <div className="content">
                          <p>
                            {" "}
                            If you want to cooperate with us, please fill out
                            the following questions and we will contact you
                            soon. Please answer the questions accuratelyn
                          </p>
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
                  <h2>To be a partner</h2>
                  <p className="p">
                    Fill out the form below to become a partner with us
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="contact_wrapper" id="contactus">
                    <div className="left_box">
                      <div className="this_wrapper">
                        <div className="input">
                          <input
                            type="text"
                            placeholder="Your name *"
                            name="client_firstname"
                            value={formData.client_firstname}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="input">
                          <input
                            type="number"
                            placeholder="Phone number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="input">
                          <input
                            type="email"
                            placeholder="E-mail *"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="input">
                          <input
                            type="text"
                            placeholder="What direction do you work in? "
                            name="client_lastname"
                            value={formData.client_lastname}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="input textarea">
                          <input
                            type="text"
                            placeholder="Comment"
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                          />
                        </div>

                        <input
                          type="submit"
                          className="submit_req green_btn"
                          value={"Send"}
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
