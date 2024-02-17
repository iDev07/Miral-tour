"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Loader from "@/components/Loader";
import axios from "axios";
import { Container, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Tabs,
  Collapse,
  Select,
  DatePicker,
  Input,
  Modal,
  Button,
  Table,
} from "antd";

function Tourpackage() {
  const [tourpackages, setTourPackages] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.all4u-tour.uz/tourpackages")
      .then((response) => {
        setTourPackages(response.data);
        // console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setLoading(false);
      });
  }, []);
  const router = useRouter();
  const { id } = router.query;
  const { RangePicker } = DatePicker;
  const tourpackage = tourpackages.find(
    (tourpackage) => tourpackage.id === parseInt(id, 10)
  );
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [nameUser, setNameUser] = useState();
  const [surnameUser, setSurNameUser] = useState();
  const [mailUser, setMailUser] = useState();
  const [numberUser, setUerNumber] = useState();
  const [dateRange, setDateRange] = useState(null);
  const [defaultCountry, setDefaultCountry] = useState({
    value: 0,
    label: "Select",
  });
  const [country, setCountry] = useState();
  const [personCount, setPersonCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [typeGroup, setTypeGroup] = useState({
    value: 0,
    label: t("constructorForm.typeOfGroup"),
  });
  const [typeClass, setTypeClass] = useState({
    value: 0,
    label: t("constructorForm.typeOfClass"),
  });
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onTabsChange = (key) => {
    // console.log(key);
  };
  const handleNameChange = (e) => {
    setNameUser(e.target.value);
  };
  const handleSurNameChange = (e) => {
    setSurNameUser(e.target.value);
  };
  const handleMailChange = (e) => {
    setMailUser(e.target.value);
  };
  const handleNumberChange = (e) => {
    setUerNumber(e.target.value);
  };
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  const handleDateChange = (dates) => {
    if (dates && dates.length === 2) {
      setDateRange(dates); // Add this line to update the dateRange state
    }
  };
  const handlePersonChange = (event) => {
    setPersonCount(parseInt(event.target.value, 10));
  };
  const handleChildChange = (event) => {
    setChildCount(parseInt(event.target.value, 10));
  };
  const increment = (setter) => {
    setter((prevValue) => prevValue + 1);
  };
  const decrement = (setter) => {
    setter((prevValue) => Math.max(0, prevValue - 1));
  };
  const handleCountryChange = (value, label) => {
    setDefaultCountry(label);
  };
  const handleGroupChange = (value, label) => {
    setTypeGroup(value);
  };
  const handleClassChange = (value, label) => {
    setTypeClass(value);
  };
  const handleValuteChange = (value) => {
    setValute(value);
  };
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error("Geolocation error:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);
  function findCountry() {
    // Check if country has already been retrieved
    if (!country) {
      let timeoutId;
      // Create a promise for geolocation with a timeout
      const geolocationPromise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
        timeoutId = setTimeout(() => {
          reject(new Error("Geolocation request timed out"));
        }, 60000); // 60 seconds timeout
      });

      geolocationPromise
        .then((position) => {
          clearTimeout(timeoutId); // Clear the timeout
          const { latitude, longitude } = position.coords;
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              setCountry(data.address.country);
              setDefaultCountry({ value: 0, label: data.address.country });
              setLoading(false);
            })
            .catch(() => {
              console.log("Error Fetching API");
            });
        })
        .catch((error) => {
          console.error(error.message); // Handle timeout or other errors
          setLoading(false);
        });
    }
  }
  if (!country) {
    findCountry();
  }
  const items = [
    {
      key: "1",
      label: t("constructorForm.typeOfClass1"),
      children: (
        <div className="econom_content">
          <div className="wrapper">
            <div className="item">
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Accomadition 3*</span>
              </p>

              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Econom transportation</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Standard Meals</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Local guides</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Entrance fees</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Gifts from Miral Tour</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Maxmimum tourists number : 15</span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: t("constructorForm.typeOfClass2"),
      children: (
        <div className="econom_content">
          <div className="wrapper">
            <div className="item">
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Accomadition 4*</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Comfort transportation</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Meals</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Guide service during trip</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Surprises</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Entrance fees</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Gifts from Miral Tour</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Maxmimum tourists number : 7</span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: t("constructorForm.typeOfClass3"),
      children: (
        <div className="econom_content">
          <div className="wrapper">
            <div className="item">
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Accomadition 5*</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Lux transportation</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Meals</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Guide service during trip</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Surprises</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Entrance fees</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Gifts from Miral Tour</span>
              </p>
              <p className="item_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#72D300"
                  />
                </svg>
                <span>Maxmimum tourists number : 3</span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "white",
    border: "1px solid transparent",
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
  };
  const countries = [
    { value: 0, label: country },
    { value: 1, label: "Indonesia" },
    { value: 2, label: "Malaysia" },
    { value: 3, label: "Singapour" },
    { value: 4, label: "UAE" },
    { value: 5, label: "China" },
    { value: 6, label: "Turkiye" },
    { value: 7, label: "Other" },
  ];
  const handleFormSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("tour_id", tourpackage.id);
      formData.append("arrival_time", dateRange);
      formData.append("country_id", defaultCountry.label);
      formData.append("number_person", personCount);
      formData.append("number_child", childCount);
      formData.append("type_of_group", typeGroup);
      formData.append("class_tour", typeClass);
      formData.append("client_firstname", nameUser);
      formData.append("client_lastname", surnameUser);
      formData.append("email", mailUser);
      formData.append("phone_number", numberUser);
      formData.append("comment", "");
      // Make the POST request using Axios
      const response = await axios.post(
        "https://api.all4u-tour.uz/requests",
        formData
      );
      // Check if the response status is 201
      if (response.status === 201) {
        setFormSubmitted(true);
        console.log("Form successfully submitted!");
      } else {
        console.error("Failed to submit form. Status:", response.status);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  if (!tourpackage) {
    return <Loader />;
  }
  const renderTableOrMessage = () => {
    if (tourpackage.prices && tourpackage.prices.length > 0) {
      const columns = [
        {
          title: "Persons",
          dataIndex: "persons",
          key: "persons",
        },
        {
          title: "Standart",
          dataIndex: "standart",
          key: "standart",
        },
        {
          title: "Comfort",
          dataIndex: "comfort",
          key: "comfort",
        },
        {
          title: "Business",
          dataIndex: "business",
          key: "business",
        },
      ];
      const prices = [];
      if (tourpackage.prices && tourpackage.prices.length > 0) {
        prices.push({
          key: "1",
          persons: "1",
          standart: tourpackage.prices[0].p_individual_econom
            ? `${tourpackage.prices[0].p_individual_econom} $`
            : "",
          comfort: tourpackage.prices[0].p_individual_standart
            ? `${tourpackage.prices[0].p_individual_standart} $`
            : "",
          business: tourpackage.prices[0].p_individual_comfort
            ? `${tourpackage.prices[0].p_individual_comfort} $`
            : "",
        });

        prices.push({
          key: "2",
          persons: "2-3",
          standart: tourpackage.prices[0].p_small_econom
            ? `${tourpackage.prices[0].p_small_econom} $`
            : "",
          comfort: tourpackage.prices[0].p_small_standart
            ? `${tourpackage.prices[0].p_small_standart} $`
            : "",
          business: tourpackage.prices[0].p_small_comfort
            ? `${tourpackage.prices[0].p_small_comfort} $`
            : "",
        });

        prices.push({
          key: "3",
          persons: "4-7",
          standart: tourpackage.prices[0].p_middle_econom
            ? `${tourpackage.prices[0].p_middle_econom} $`
            : "",
          comfort: tourpackage.prices[0].p_middle_standart
            ? `${tourpackage.prices[0].p_middle_standart} $`
            : "",
          business: tourpackage.prices[0].p_middle_comfort
            ? `${tourpackage.prices[0].p_middle_comfort} $`
            : "",
        });

        prices.push({
          key: "4",
          persons: "8-15",
          standart: tourpackage.prices[0].p_large_econom
            ? `${tourpackage.prices[0].p_large_econom} $`
            : "",
          comfort: tourpackage.prices[0].p_large_standart
            ? `${tourpackage.prices[0].p_large_standart} $`
            : "",
          business: tourpackage.prices[0].p_large_comfort
            ? `${tourpackage.prices[0].p_large_comfort} $`
            : "",
        });
        prices.push({
          key: "5",
          persons: "16 +",
          standart: tourpackage.prices[0].p_max_econom
            ? `${tourpackage.prices[0].p_max_econom} $`
            : "",
          comfort: tourpackage.prices[0].p_max_standart
            ? `${tourpackage.prices[0].p_max_standart} $`
            : "",
          business: tourpackage.prices[0].p_max_comfort
            ? `${tourpackage.prices[0].p_max_comfort} $`
            : "",
        });
        prices.push({
          key: "6",
          persons: "Single supplement",
          standart: tourpackage.prices[0].p_econom_single
            ? ` + ${tourpackage.prices[0].p_econom_single} $`
            : "",
          comfort: tourpackage.prices[0].p_standart_single
            ? ` + ${tourpackage.prices[0].p_standart_single} $`
            : "",
          business: tourpackage.prices[0].p_comfort_single
            ? ` + ${tourpackage.prices[0].p_comfort_single} $`
            : "",
        });
        prices.push({
          key: "7",
          persons: "Meal",
          standart: tourpackage.prices[0].p_econom_meal
            ? ` + ${tourpackage.prices[0].p_econom_meal} $`
            : "",
          comfort: tourpackage.prices[0].p_standart_meal
            ? ` + ${tourpackage.prices[0].p_standart_meal} $`
            : "",
          business: tourpackage.prices[0].p_comfort_meal
            ? ` + ${tourpackage.prices[0].p_comfort_meal} $`
            : "",
        });
      }
      return (
        <div className="prices">
          <h2>Prices</h2>
          <Table columns={columns} dataSource={prices} pagination={false} />
          <p>* Prices are only for tourists</p>
          <p>
            * Travel companies, please contact by mail: <br />{" "}
            <a href="mailto:miraltouruz@gmail.com">miraltouruz@gmail.com</a>
          </p>
        </div>
      );
    } else {
      return;
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Head>
            <title>
              {i18n.language === "uz"
                ? tourpackage.title_uz
                : i18n.language === "ru"
                ? tourpackage.title_ru
                : tourpackage.title_en}
            </title>
            <meta
              name="description"
              content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. Book now and create lasting memories!"
            />
            <link rel="icon" href="/img/mini_logo.png" />
            <meta name="author" content="Miral Tour" />
            <meta
              name="keywords"
              content="miral tour,miral-tour, miral tour uz, uzbekistan, miraltour, miral, worldmiral, turbotour, all4u-tour, tourism, tour, all4u"
            />
            <meta property="og:title" content="Miral Tour" />
            <meta
              property="og:description"
              content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. Book now and create lasting memories!"
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
              content="Unleash unforgettable adventures with our premier tour agency! Explore thrilling destinations, guided by experts, for a stress-free journey. Book now and create lasting memories!"
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
          <div className="tourpackage pt_100">
            <Modal
              title={
                i18n.language === "uz"
                  ? tourpackage.title_uz
                  : i18n.language === "ru"
                  ? tourpackage.title_ru
                  : tourpackage.title_en
              }
              open={isModalOpen}
              onCancel={handleCancel}
              footer={[
                <Button key="back" onClick={handleCancel}>
                  {t("orderModal.cancel")}
                </Button>,
                <Button key="submit" type="primary" onClick={handleFormSubmit}>
                  {t("orderModal.submit")}
                </Button>,
              ]}
              width={1000}
            >
              <div className="order_modal">
                <div className="order_modal_wrapper">
                  <div className="class_filter">
                    <div className="left_box_image">
                      <div className="tour_image">
                        <img
                          src={`https://admin.all4u-tour.uz/images/tour/${tourpackage.image}`}
                        />
                      </div>
                    </div>
                    <div className="right_box">
                      <div className="top_selecteds">
                        <div className="left_box">
                          <div className="country">
                            <p>{t("orderModal.from")}</p>
                            <Select
                              defaultValue={defaultCountry}
                              onChange={handleCountryChange}
                              options={countries}
                            />
                          </div>
                        </div>
                        <div className="right_box">
                          <p>{t("orderModal.to")}</p>
                          <div className="where">
                            <Select
                              value={t("constructorForm.constCountry")}
                              // options={countries}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="middle_selecteds">
                        <div className="dates">
                          <p>{t("orderModal.departureDate")}</p>
                          <div className="dates_wrapper">
                            <RangePicker
                              format="DD-MM-YYYY"
                              placeholder=""
                              // defaultValue={dateRange}
                              onChange={handleDateChange}
                            />
                          </div>
                        </div>
                        <div className="count_persons">
                          <div className="counts_wrapper">
                            <div className="people_count">
                              <p>{t("orderModal.countPeople")}</p>
                              <div className="counter_wrapper">
                                <div className="decrement">
                                  <button
                                    className="decrement_btn"
                                    onClick={() => decrement(setPersonCount)}
                                  >
                                    -
                                  </button>
                                </div>
                                <div className="value">
                                  <input
                                    type="number"
                                    value={personCount}
                                    onChange={handlePersonChange}
                                    disabled
                                  />
                                </div>
                                <div className="increment">
                                  <button
                                    className="increment_btn"
                                    onClick={() => increment(setPersonCount)}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="people_count">
                              <p>{t("orderModal.countChildren")}</p>
                              <div className="counter_wrapper childs_wrap">
                                <div className="decrement">
                                  <button
                                    className="decrement_btn"
                                    onClick={() => decrement(setChildCount)}
                                  >
                                    -
                                  </button>
                                </div>
                                <div className="value">
                                  <input
                                    type="number"
                                    value={childCount}
                                    onChange={handleChildChange}
                                    disabled
                                  />
                                </div>
                                <div className="increment">
                                  <button
                                    className="increment_btn"
                                    onClick={() => increment(setChildCount)}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bottom_selectds">
                        <div className="wrapper">
                          <div className="left_box">
                            <p>{t("orderModal.type_group")}</p>
                            <Select
                              defaultValue={{
                                value: 0,
                                label: t("constructorForm.typeOfGroup"),
                              }}
                              style={{ width: 200, borderRadius: 0 }}
                              onChange={handleGroupChange}
                              options={[
                                {
                                  value: 1,
                                  label: t("constructorForm.typeGroup1"),
                                },
                                {
                                  value: 2,
                                  label: t("constructorForm.typeGroup2"),
                                },
                                {
                                  value: 3,
                                  label: t("constructorForm.typeGroup3"),
                                },
                                {
                                  value: 4,
                                  label: t("constructorForm.typeGroup4"),
                                },
                              ]}
                            />
                          </div>
                          <div className="right_box">
                            <p>{t("orderModal.class_travel")}</p>
                            <Select
                              defaultValue={{
                                value: 0,
                                label: t("constructorForm.typeOfClass"),
                              }}
                              style={{ width: 200, borderRadius: 0 }}
                              onChange={handleClassChange}
                              options={[
                                {
                                  value: 1,
                                  label: t("constructorForm.typeOfClass1"),
                                },
                                {
                                  value: 2,
                                  label: t("constructorForm.typeOfClass2"),
                                },
                                {
                                  value: 3,
                                  label: t("constructorForm.typeOfClass3"),
                                },
                              ]}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="personal_info">
                        <form>
                          <div className="wrapper">
                            <div className="top_fields">
                              <div className="name">
                                <p
                                  className={`top_label ${
                                    isInputFocused ? "active_label" : ""
                                  }`}
                                >
                                  {t("orderModal.user_name")}
                                </p>
                                <Input
                                  placeholder={t("orderModal.name_placeholder")}
                                  onChange={handleNameChange}
                                  onFocus={handleInputFocus}
                                  required
                                />
                              </div>
                              <div className="surname">
                                <p
                                  className={`top_label ${
                                    isInputFocused ? "active_label" : ""
                                  }`}
                                >
                                  {" "}
                                  {t("orderModal.user_surname")}
                                </p>
                                <Input
                                  onChange={handleSurNameChange}
                                  placeholder={t(
                                    "orderModal.surname_placeholder"
                                  )}
                                />
                              </div>
                            </div>
                            <div className="contacts">
                              <div className="mail">
                                <p>{t("orderModal.user_mail")}</p>
                                <Input
                                  type="mail"
                                  onChange={handleMailChange}
                                  placeholder={t("orderModal.mail_placeholder")}
                                />
                              </div>
                              <div className="number">
                                <p>{t("orderModal.user_number")}</p>
                                <Input
                                  type="text"
                                  onChange={handleNumberChange}
                                  placeholder={t(
                                    "orderModal.number_placeholder"
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {formSubmitted && (
                  <div className="hidden_form_notification">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        viewBox="0 0 70 70"
                        fill="none"
                      >
                        <circle cx="35" cy="35" r="35" fill="#4ED36C" />
                        <path
                          d="M26.4268 32.6537L23.5488 40.3302V40.3308C24.2531 43.1443 25.801 45.6315 27.9923 47.5075L31.6032 46.1535C27.7678 42.7183 25.8748 37.6655 26.4268 32.6537Z"
                          fill="white"
                        />
                        <path
                          d="M22.5741 42.9287L20.3681 48.8106C20.1045 49.5131 20.7918 50.208 21.4995 49.942L26.1533 48.1971C24.5924 46.6821 23.3815 44.8766 22.5741 42.9287Z"
                          fill="white"
                        />
                        <path
                          d="M32.5968 31.9378L29.3163 28.6573C26.6566 34.657 28.4749 41.5147 33.4932 45.4451L36.9946 44.1321C33.9195 40.9565 32.2563 36.524 32.5968 31.9378Z"
                          fill="white"
                        />
                        <path
                          d="M34.3125 33.6539C34.4473 37.3831 36.0714 40.9073 38.8193 43.4472H38.8198L41.3861 42.4852C41.9855 42.2602 42.1495 41.4909 41.699 41.0403L34.3125 33.6539Z"
                          fill="white"
                        />
                        <path
                          d="M40.7301 36.4149C41.0733 36.7582 41.6297 36.7582 41.973 36.4149C45.2793 33.1086 48.4988 34.1308 48.531 34.1415C48.9914 34.2949 49.4891 34.0461 49.6427 33.5856C49.7962 33.1253 49.5473 32.6274 49.0868 32.4739C48.9135 32.4162 44.7961 31.106 40.7301 35.1721C40.3869 35.5152 40.3868 36.0718 40.7301 36.4149Z"
                          fill="white"
                        />
                        <path
                          d="M35.139 29.5789C39.2052 25.5134 37.8945 21.3957 37.8371 21.2222C37.6836 20.7617 37.1856 20.5133 36.7251 20.6668C36.2651 20.8203 36.0161 21.3177 36.1696 21.7782C36.1802 21.8105 37.2026 25.03 33.8958 28.3362C33.5547 28.6773 33.5512 29.2334 33.8958 29.5789C34.2408 29.9239 34.7968 29.9212 35.139 29.5789Z"
                          fill="white"
                        />
                        <path
                          d="M37.0016 31.4435C36.6583 31.7867 36.6583 32.3431 37.0016 32.6863C37.3416 33.0264 37.8942 33.0309 38.2392 32.6915C38.6932 32.4653 40.1024 33.3138 40.8856 32.5309C41.6604 31.7562 40.8372 30.3756 41.0428 29.8918C41.5273 29.6856 42.9073 30.5092 43.6821 29.7345C44.457 28.9597 43.6338 27.5791 43.8394 27.0952C44.3246 26.8891 45.7038 27.7127 46.4786 26.938C47.2535 26.1632 46.4303 24.7826 46.6359 24.2987C47.1182 24.0936 48.5009 24.9154 49.2752 24.1414C50.058 23.3585 49.2111 21.9467 49.4357 21.4951C49.7738 21.1515 49.7719 20.5989 49.4305 20.2574C49.0873 19.9142 48.5308 19.9142 48.1876 20.2574C47.4949 20.9501 47.6304 21.9281 47.7609 22.6272C47.0617 22.4967 46.0839 22.3612 45.3911 23.0539C44.6984 23.7466 44.834 24.7245 44.9644 25.4237C44.2653 25.2932 43.2873 25.1576 42.5946 25.8504C41.9019 26.5431 42.0375 27.521 42.168 28.2202C41.4687 28.0897 40.4908 27.9541 39.7982 28.6468C39.1055 29.3395 39.241 30.3175 39.3715 31.0166C38.6723 30.8863 37.6942 30.7507 37.0016 31.4435Z"
                          fill="white"
                        />
                        <path
                          d="M41.9749 23.9861C42.3181 23.6428 42.3181 23.0864 41.9749 22.7432C41.6317 22.4 41.0752 22.4 40.732 22.7432C40.3888 23.0864 40.3888 23.6428 40.732 23.9861C41.0752 24.3293 41.6317 24.3293 41.9749 23.9861Z"
                          fill="white"
                        />
                        <path
                          d="M47.5664 30.458C48.0517 30.458 48.4452 30.0645 48.4452 29.5791C48.4452 29.0937 48.0517 28.7003 47.5664 28.7003C47.081 28.7003 46.6875 29.0937 46.6875 29.5791C46.6875 30.0645 47.081 30.458 47.5664 30.458Z"
                          fill="white"
                        />
                        <path
                          d="M45.7027 37.6579C45.3595 38.0011 45.3595 38.5575 45.7027 38.9007C46.0459 39.244 46.6024 39.244 46.9456 38.9007C47.2888 38.5575 47.2888 38.0011 46.9456 37.6579C46.6024 37.3146 46.0459 37.3146 45.7027 37.6579Z"
                          fill="white"
                        />
                        <path
                          d="M33.2737 25.229C33.6169 24.8858 33.6169 24.3293 33.2737 23.9861C32.9305 23.6429 32.3741 23.6429 32.0309 23.9861C31.6876 24.3293 31.6876 24.8858 32.0309 25.229C32.3741 25.5722 32.9306 25.5722 33.2737 25.229Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h3>{t("orderModal.success")} </h3>
                    </div>
                    <Button onClick={handleCancel}>
                      {t("orderModal.close")}
                    </Button>
                  </div>
                )}
              </div>
            </Modal>
            <div className="tourpakage_wrapper">
              <Container maxWidth="lg">
                <div className="this_wrapper">
                  <div className="tourpackage_name">
                    <h1>
                      {i18n.language === "uz"
                        ? tourpackage.title_uz
                        : i18n.language === "ru"
                        ? tourpackage.title_ru
                        : tourpackage.title_en}
                    </h1>
                  </div>
                  <div className="tourpackage_wrap">
                    <div className="class_wrapper">
                      <div className="top_class">
                        <div className="tour_images">
                          <div className="inner">
                            <div className="tour_slider">
                              {tourpackage.images.length > 0 ? (
                                <Swiper
                                  navigation={true}
                                  modules={[Navigation]}
                                  className="mySwiper"
                                >
                                  <SwiperSlide>
                                    <div className="tour_image">
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: tourpackage.video,
                                        }}
                                      ></div>
                                    </div>
                                  </SwiperSlide>
                                  {tourpackage.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                      <div className="tour_image">
                                        <img
                                          src={`https://admin.all4u-tour.uz/images/tour/${image.image_url}`}
                                          alt={`${tourpackage.title_en}`}
                                        />
                                      </div>
                                    </SwiperSlide>
                                  ))}
                                </Swiper>
                              ) : (
                                <img
                                  src={`https://admin.all4u-tour.uz/images/tour/${tourpackage.image}`}
                                  alt={tourpackage.title_uz}
                                />
                              )}
                            </div>
                            {/* <img
                            src={`https://admin.all4u-tour.uz/images/tour/${tourpackage.image}`}
                            alt={tourpackage.title_uz}
                          /> */}
                          </div>
                        </div>
                      </div>
                      <div className="classes">
                        <div className="classes_content">
                          <Tabs
                            onChange={onTabsChange}
                            defaultActiveKey="1"
                            items={items}
                          />
                        </div>
                        <div className="booking">
                          <button onClick={showModal}>
                            {t("orderModal.viewMore")}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="tour_details">
                      <div className="timetable">
                        <h2>{t("tourPackage.itinerary")}</h2>
                        <div className="details_back">
                          <Collapse
                            defaultActiveKey={[1]}
                            items={tourpackage.steps.map((steps, index) => ({
                              key: steps.id,
                              label: (
                                <p className="step_day">
                                  <span>
                                    {index + 1} - {t("tourPackage.day")}
                                  </span>
                                  {i18n.language === "uz"
                                    ? steps.name_uz
                                    : i18n.language === "ru"
                                    ? steps.name_ru
                                    : steps.name_en}
                                </p>
                              ),
                              children: (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      i18n.language === "uz"
                                        ? steps.description_uz
                                        : i18n.language === "ru"
                                        ? steps.description_ru
                                        : steps.description_en,
                                  }}
                                ></div>
                              ),
                            }))}
                          />
                        </div>
                        {renderTableOrMessage()}
                      </div>
                      <div className="price">
                        <div className="price_iclude">
                          <h2>{t("tourPackage.include")}</h2>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                i18n.language === "uz"
                                  ? tourpackage.include_uz
                                  : i18n.language === "ru"
                                  ? tourpackage.include_ru
                                  : tourpackage.include_en,
                            }}
                          ></div>
                        </div>
                        <div className="price_not_include">
                          <h2>{t("tourPackage.notInlcuded")}</h2>
                          <div
                            className="notInlcludeData"
                            dangerouslySetInnerHTML={{
                              __html:
                                i18n.language === "uz"
                                  ? tourpackage.not_include_uz
                                  : i18n.language === "ru"
                                  ? tourpackage.not_include_ru
                                  : tourpackage.not_include_en,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Tourpackage;
