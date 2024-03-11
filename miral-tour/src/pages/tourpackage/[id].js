"use client";
import countryList from "react-select-country-list";
import React, { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import Loader from "@/components/Loader";
import axios from "axios";
import { Container } from "@mui/material";
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
  const options = useMemo(() => {
    const fetchData = () => countryList().getData();
    return fetchData();
  }, []);
  const [value, setValue] = useState();
  const changeHandler = (value) => {
    setValue(value);
  };
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
  // function findCountry() {
  //   // Check if country has already been retrieved
  //   if (!country) {
  //     let timeoutId;
  //     // Create a promise for geolocation with a timeout
  //     const geolocationPromise = new Promise((resolve, reject) => {
  //       navigator.geolocation.getCurrentPosition(resolve, reject);
  //       timeoutId = setTimeout(() => {
  //         reject(new Error("Geolocation request timed out"));
  //       }, 60000); // 60 seconds timeout
  //     });

  //     geolocationPromise
  //       .then((position) => {
  //         clearTimeout(timeoutId); // Clear the timeout
  //         const { latitude, longitude } = position.coords;
  //         const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  //         fetch(url)
  //           .then((res) => res.json())
  //           .then((data) => {
  //             setCountry(data.address.country);
  //             setDefaultCountry({ value: 0, label: data.address.country });
  //             setLoading(false);
  //           })
  //           .catch(() => {
  //             console.log("Error Fetching API");
  //           });
  //       })
  //       .catch((error) => {
  //         console.error(error.message); // Handle timeout or other errors
  //         setLoading(false);
  //       });
  //   }
  // }
  // if (!country) {
  //   findCountry();
  // }
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
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6663 14.167H1.33301C1.05967 14.167 0.833008 14.3937 0.833008 14.667C0.833008 14.9403 1.05967 15.167 1.33301 15.167H14.6663C14.9397 15.167 15.1663 14.9403 15.1663 14.667C15.1663 14.3937 14.9397 14.167 14.6663 14.167Z"
                    fill="#8F8CFF"
                  />
                  <path
                    d="M11.3333 1.33301H4.66667C2.66667 1.33301 2 2.52634 2 3.99967V14.6663H14V3.99967C14 2.52634 13.3333 1.33301 11.3333 1.33301ZM6.66667 11.4997H4.66667C4.39333 11.4997 4.16667 11.273 4.16667 10.9997C4.16667 10.7263 4.39333 10.4997 4.66667 10.4997H6.66667C6.94 10.4997 7.16667 10.7263 7.16667 10.9997C7.16667 11.273 6.94 11.4997 6.66667 11.4997ZM6.66667 8.49967H4.66667C4.39333 8.49967 4.16667 8.27301 4.16667 7.99967C4.16667 7.72634 4.39333 7.49967 4.66667 7.49967H6.66667C6.94 7.49967 7.16667 7.72634 7.16667 7.99967C7.16667 8.27301 6.94 8.49967 6.66667 8.49967ZM6.66667 5.49967H4.66667C4.39333 5.49967 4.16667 5.27301 4.16667 4.99967C4.16667 4.72634 4.39333 4.49967 4.66667 4.49967H6.66667C6.94 4.49967 7.16667 4.72634 7.16667 4.99967C7.16667 5.27301 6.94 5.49967 6.66667 5.49967ZM11.3333 11.4997H9.33333C9.06 11.4997 8.83333 11.273 8.83333 10.9997C8.83333 10.7263 9.06 10.4997 9.33333 10.4997H11.3333C11.6067 10.4997 11.8333 10.7263 11.8333 10.9997C11.8333 11.273 11.6067 11.4997 11.3333 11.4997ZM11.3333 8.49967H9.33333C9.06 8.49967 8.83333 8.27301 8.83333 7.99967C8.83333 7.72634 9.06 7.49967 9.33333 7.49967H11.3333C11.6067 7.49967 11.8333 7.72634 11.8333 7.99967C11.8333 8.27301 11.6067 8.49967 11.3333 8.49967ZM11.3333 5.49967H9.33333C9.06 5.49967 8.83333 5.27301 8.83333 4.99967C8.83333 4.72634 9.06 4.49967 9.33333 4.49967H11.3333C11.6067 4.49967 11.8333 4.72634 11.8333 4.99967C11.8333 5.27301 11.6067 5.49967 11.3333 5.49967Z"
                    fill="#8F8CFF"
                  />
                </svg>
                <span>Accomadition 3*</span>
              </p>

              <p className="item_wrapper">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="16" height="16" fill="white" />
                  <path
                    d="M14.5 5.33339C14.5 5.60672 14.2733 5.83339 14 5.83339H2C1.72667 5.83339 1.5 5.60672 1.5 5.33339C1.5 5.06005 1.72667 4.83339 2 4.83339H2.68L2.93333 3.62672C3.17333 2.46005 3.67333 1.38672 5.66 1.38672H10.34C12.3267 1.38672 12.8267 2.46005 13.0667 3.62672L13.32 4.83339H14C14.2733 4.83339 14.5 5.06005 14.5 5.33339Z"
                    fill="#DADE24"
                  />
                  <path
                    d="M14.7864 9.10634C14.6864 8.00634 14.3931 6.83301 12.2531 6.83301H3.7464C1.6064 6.83301 1.31973 8.00634 1.21307 9.10634L0.839732 13.1663C0.793065 13.673 0.959732 14.1797 1.3064 14.5597C1.65973 14.9463 2.15973 15.1663 2.69307 15.1663H3.9464C5.0264 15.1663 5.23307 14.5463 5.3664 14.1397L5.49973 13.7397C5.65307 13.2797 5.69306 13.1663 6.29307 13.1663H9.7064C10.3064 13.1663 10.3264 13.233 10.4997 13.7397L10.6331 14.1397C10.7664 14.5463 10.9731 15.1663 12.0531 15.1663H13.3064C13.8331 15.1663 14.3397 14.9463 14.6931 14.5597C15.0397 14.1797 15.2064 13.673 15.1597 13.1663L14.7864 9.10634ZM5.99973 10.4997H3.99973C3.7264 10.4997 3.49973 10.273 3.49973 9.99967C3.49973 9.72634 3.7264 9.49967 3.99973 9.49967H5.99973C6.27307 9.49967 6.49973 9.72634 6.49973 9.99967C6.49973 10.273 6.27307 10.4997 5.99973 10.4997ZM11.9997 10.4997H9.99973C9.7264 10.4997 9.49973 10.273 9.49973 9.99967C9.49973 9.72634 9.7264 9.49967 9.99973 9.49967H11.9997C12.2731 9.49967 12.4997 9.72634 12.4997 9.99967C12.4997 10.273 12.2731 10.4997 11.9997 10.4997Z"
                    fill="#DADE24"
                  />
                </svg>
                <span>Econom transportation</span>
              </p>
              <p className="item_wrapper">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6468 11.9997V12.6663C14.6468 13.7663 14.6468 14.6663 12.6468 14.6663H3.31348C1.31348 14.6663 1.31348 13.7663 1.31348 12.6663V11.9997C1.31348 11.633 1.61348 11.333 1.98014 11.333H13.9801C14.3468 11.333 14.6468 11.633 14.6468 11.9997Z"
                    fill="#56D25B"
                  />
                  <path
                    d="M9.60635 3.45318C9.63969 3.31985 9.65969 3.19318 9.66635 3.05318C9.68635 2.27985 9.21302 1.59985 8.46635 1.39985C7.34635 1.09318 6.33302 1.93318 6.33302 2.99985C6.33302 3.15985 6.35302 3.30651 6.39302 3.45318C3.98635 3.96651 2.17969 6.10651 2.17969 8.66651V9.66652C2.17969 10.0332 2.47969 10.3332 2.84635 10.3332H13.1464C13.513 10.3332 13.813 10.0332 13.813 9.66652V8.66651C13.813 6.10651 12.013 3.97318 9.60635 3.45318ZM9.99969 7.83318H5.99969C5.72635 7.83318 5.49969 7.60651 5.49969 7.33318C5.49969 7.05985 5.72635 6.83318 5.99969 6.83318H9.99969C10.273 6.83318 10.4997 7.05985 10.4997 7.33318C10.4997 7.60651 10.273 7.83318 9.99969 7.83318Z"
                    fill="#56D25B"
                  />
                </svg>
                <span>Standard Meals</span>
              </p>
              <p className="item_wrapper">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.99967 1.33301C4.25301 1.33301 2.83301 2.75301 2.83301 4.49967C2.83301 6.21301 4.17301 7.59967 5.91967 7.65967C5.97301 7.65301 6.02634 7.65301 6.06634 7.65967C6.07968 7.65967 6.08634 7.65967 6.09967 7.65967C6.10634 7.65967 6.10634 7.65967 6.11301 7.65967C7.81967 7.59967 9.15968 6.21301 9.16634 4.49967C9.16634 2.75301 7.74634 1.33301 5.99967 1.33301Z"
                    fill="#E19762"
                  />
                  <path
                    d="M9.38664 9.43293C7.52664 8.19293 4.49331 8.19293 2.61997 9.43293C1.77331 9.9996 1.30664 10.7663 1.30664 11.5863C1.30664 12.4063 1.77331 13.1663 2.61331 13.7263C3.54664 14.3529 4.77331 14.6663 5.99997 14.6663C7.22664 14.6663 8.45331 14.3529 9.38664 13.7263C10.2266 13.1596 10.6933 12.3996 10.6933 11.5729C10.6866 10.7529 10.2266 9.99293 9.38664 9.43293Z"
                    fill="#E19762"
                  />
                  <path
                    d="M13.3263 4.89307C13.4329 6.18641 12.5129 7.31974 11.2396 7.47307C11.2329 7.47307 11.2329 7.47307 11.2263 7.47307H11.2062C11.1662 7.47307 11.1262 7.47307 11.0929 7.48641C10.4462 7.51974 9.85292 7.31307 9.40625 6.93307C10.0929 6.31974 10.4863 5.39974 10.4062 4.39974C10.3596 3.85974 10.1729 3.36641 9.89292 2.94641C10.1463 2.81974 10.4396 2.73974 10.7396 2.71307C12.0463 2.59974 13.2129 3.57307 13.3263 4.89307Z"
                    fill="#E19762"
                  />
                  <path
                    d="M14.6605 11.0599C14.6071 11.7066 14.1938 12.2666 13.5005 12.6466C12.8338 13.0133 11.9938 13.1866 11.1605 13.1666C11.6405 12.7333 11.9205 12.1933 11.9738 11.6199C12.0405 10.7933 11.6471 9.99994 10.8605 9.36661C10.4138 9.01327 9.89382 8.73327 9.32715 8.52661C10.8005 8.09994 12.6538 8.38661 13.7938 9.30661C14.4071 9.79994 14.7205 10.4199 14.6605 11.0599Z"
                    fill="#E19762"
                  />
                </svg>
                <span>Local guides</span>
              </p>
              <p className="item_wrapper">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="16" height="16" fill="white" />
                  <path
                    d="M12.7796 4.42668C12.493 2.98001 11.4196 2.34668 9.92631 2.34668H4.07298C2.31298 2.34668 1.13965 3.22668 1.13965 5.28001V8.71335C1.13965 10.1933 1.74631 11.06 2.74631 11.4333C2.89298 11.4867 3.05298 11.5333 3.21965 11.56C3.48631 11.62 3.77298 11.6467 4.07298 11.6467H9.93298C11.693 11.6467 12.8663 10.7667 12.8663 8.71335V5.28001C12.8663 4.96668 12.8396 4.68668 12.7796 4.42668ZM3.68632 8.00001C3.68632 8.27335 3.45965 8.50001 3.18632 8.50001C2.91298 8.50001 2.68632 8.27335 2.68632 8.00001V6.00001C2.68632 5.72668 2.91298 5.50001 3.18632 5.50001C3.45965 5.50001 3.68632 5.72668 3.68632 6.00001V8.00001ZM6.99965 8.76001C6.02631 8.76001 5.23965 7.97335 5.23965 7.00001C5.23965 6.02668 6.02631 5.24001 6.99965 5.24001C7.97298 5.24001 8.75965 6.02668 8.75965 7.00001C8.75965 7.97335 7.97298 8.76001 6.99965 8.76001ZM11.3063 8.00001C11.3063 8.27335 11.0796 8.50001 10.8063 8.50001C10.533 8.50001 10.3063 8.27335 10.3063 8.00001V6.00001C10.3063 5.72668 10.533 5.50001 10.8063 5.50001C11.0796 5.50001 11.3063 5.72668 11.3063 6.00001V8.00001Z"
                    fill="#1AC199"
                  />
                  <path
                    d="M14.8665 7.27986V10.7132C14.8665 12.7665 13.6932 13.6532 11.9265 13.6532H6.07318C5.57318 13.6532 5.12651 13.5799 4.73985 13.4332C4.42651 13.3199 4.15318 13.1532 3.93318 12.9399C3.81318 12.8265 3.90651 12.6465 4.07318 12.6465H9.92651C12.3932 12.6465 13.8598 11.1799 13.8598 8.71986V5.27986C13.8598 5.11986 14.0398 5.01986 14.1532 5.13986C14.6065 5.61986 14.8665 6.31986 14.8665 7.27986Z"
                    fill="#1AC199"
                  />
                </svg>
                <span>Entrance fees</span>
              </p>
              <p className="item_wrapper">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3337 7.99967V11.9997C13.3337 13.473 12.1403 14.6663 10.667 14.6663H5.33366C3.86033 14.6663 2.66699 13.473 2.66699 11.9997V7.99967C2.66699 7.63301 2.96699 7.33301 3.33366 7.33301H4.64699C5.01366 7.33301 5.31366 7.63301 5.31366 7.99967V10.093C5.31366 10.5863 5.58699 11.0397 6.02033 11.273C6.21366 11.3797 6.42699 11.433 6.64699 11.433C6.90033 11.433 7.15366 11.3597 7.37366 11.213L8.00699 10.7997L8.59366 11.193C9.00033 11.4663 9.52033 11.4997 9.95366 11.2663C10.3937 11.033 10.667 10.5863 10.667 10.0863V7.99967C10.667 7.63301 10.967 7.33301 11.3337 7.33301H12.667C13.0337 7.33301 13.3337 7.63301 13.3337 7.99967Z"
                    fill="#F54A4A"
                  />
                  <path
                    d="M14.3337 4.66634V5.33301C14.3337 6.06634 13.9803 6.66634 13.0003 6.66634H3.00033C1.98033 6.66634 1.66699 6.06634 1.66699 5.33301V4.66634C1.66699 3.93301 1.98033 3.33301 3.00033 3.33301H13.0003C13.9803 3.33301 14.3337 3.93301 14.3337 4.66634Z"
                    fill="#F54A4A"
                  />
                  <path
                    d="M7.76018 3.33329H4.08018C3.85352 3.08663 3.86018 2.70663 4.10018 2.46663L5.04685 1.51996C5.29352 1.27329 5.70018 1.27329 5.94685 1.51996L7.76018 3.33329Z"
                    fill="#F54A4A"
                  />
                  <path
                    d="M11.9134 3.33329H8.2334L10.0467 1.51996C10.2934 1.27329 10.7001 1.27329 10.9467 1.51996L11.8934 2.46663C12.1334 2.70663 12.1401 3.08663 11.9134 3.33329Z"
                    fill="#F54A4A"
                  />
                  <path
                    d="M9.3133 7.33301C9.67996 7.33301 9.97996 7.63301 9.97996 7.99967V10.0863C9.97996 10.6197 9.38663 10.9397 8.94663 10.6397L8.34663 10.2397C8.12663 10.093 7.83996 10.093 7.61329 10.2397L6.98663 10.653C6.54663 10.9463 5.95996 10.6263 5.95996 10.0997V7.99967C5.95996 7.63301 6.25996 7.33301 6.62663 7.33301H9.3133Z"
                    fill="#F54A4A"
                  />
                </svg>
                <span>Gifts from Miral Tour</span>
              </p>
              <p className="item_wrapper">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z"
                    stroke="#101010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.9704 14.4402C18.3404 14.6702 19.8504 14.4302 20.9104 13.7202C22.3204 12.7802 22.3204 11.2402 20.9104 10.3002C19.8404 9.59016 18.3104 9.35016 16.9404 9.59016"
                    stroke="#101010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z"
                    stroke="#101010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.00043 14.4402C5.63043 14.6702 4.12043 14.4302 3.06043 13.7202C1.65043 12.7802 1.65043 11.2402 3.06043 10.3002C4.13043 9.59016 5.66043 9.35016 7.03043 9.59016"
                    stroke="#101010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0001 14.6297C11.9401 14.6197 11.8701 14.6197 11.8101 14.6297C10.4301 14.5797 9.33008 13.4497 9.33008 12.0497C9.33008 10.6197 10.4801 9.46973 11.9101 9.46973C13.3401 9.46973 14.4901 10.6297 14.4901 12.0497C14.4801 13.4497 13.3801 14.5897 12.0001 14.6297Z"
                    stroke="#101010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.08973 17.7794C7.67973 18.7194 7.67973 20.2594 9.08973 21.1994C10.6897 22.2694 13.3097 22.2694 14.9097 21.1994C16.3197 20.2594 16.3197 18.7194 14.9097 17.7794C13.3197 16.7194 10.6897 16.7194 9.08973 17.7794Z"
                    stroke="#101010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
      formData.append("arrival_time", dateRange || "Didn't fill");
      formData.append("country_id", value || "Didn't fill");
      formData.append("number_person", personCount || 0);
      formData.append("number_child", childCount || 0);
      formData.append("type_of_group", typeGroup || 0);
      formData.append("class_tour", typeClass || 0);
      formData.append("client_firstname", nameUser || "Didn't fill");
      formData.append("client_lastname", surnameUser || "Didn't fill");
      formData.append("email", mailUser || "Didn't fill");
      formData.append("phone_number", numberUser || "Didn't fill");
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
              content="tour, tourpackage, tour package uzbekistan, travel uzbekistan, miral tour,miral-tour, miral tour uz, uzbekistan, miraltour, miral, worldmiral, turbotour, all4u-tour, tourism, tour, all4u"
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
                              options={options}
                              value={value}
                              onChange={changeHandler}
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
                              inputReadOnly
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
                        {tourpackage.map && (
                          <div className="tour_route_map">
                            <h2>Tour Route in Map</h2>
                            <div
                              className="tour_map"
                              dangerouslySetInnerHTML={{
                                __html: tourpackage.map,
                              }}
                            ></div>
                          </div>
                        )}
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
