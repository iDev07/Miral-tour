"use client";
import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  Modal,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
  overflow: "auto",
};

function Hero() {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  const [open, setOpen] = useState("");
  const [dayCount, setDayCount] = useState(1);
  const [personCount, setPersonCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const citiesData = [
    { value: "Tashkent" },
    { value: "Khiva" },
    { value: "Samarkand" },
    { value: "Buxoro" },
    { value: "Urgench" },
    { value: "Fergana" },
    // Add more cities here...
  ];

  const [selectedCities, setSelectedCities] = useState(["Select city"]);
  const handleCityChange = (event) => {
    const selected = event.target.value.filter(
      (city) => city !== "Select city"
    );
    setSelectedCities(selected.length === 0 ? ["Select city"] : selected);
  };
  const handleDayChange = (event) => {
    setDayCount(parseInt(event.target.value, 10));
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
  const renderSelectedCities = () => {
    if (selectedCities.length <= 3) {
      return selectedCities.join(", ");
    } else {
      return `${selectedCities.slice(0, 3).join(", ")} ...`;
    }
  };

  return (
    <div className="hero">
      <div className="collector_tourpackages">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="modal_my"
        >
          <Box sx={style}>
            <div className="intro_collector">
              <h1>{t("")}</h1>
            </div>
            <div className="collect_wrapper">
              <form action="action">
                <div className="top_form">
                  <div className="col">
                    <div className="col_wrap">
                      <div className="form_name">
                        <h3>{t("constructorForm.heading1")}</h3>
                      </div>
                      <div className="country">
                        <select name="" id="">
                          <option value="">{t("countries.country1")}</option>
                          <option value="">{t("countries.country2")}</option>
                          <option value="">{t("countries.country3")}</option>
                          <option value="">{t("countries.country4")}</option>
                          <option value="">{t("countries.country5")}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col_wrap">
                      <div className="form_name">
                        <h3>{t("constructorForm.heading2")}</h3>
                      </div>
                      <div className="visiting_cities">
                        <FormControl>
                          <Select
                            multiple
                            value={selectedCities}
                            onChange={handleCityChange}
                            renderValue={renderSelectedCities}
                          >
                            {citiesData.map((city) => (
                              <MenuItem key={city.value} value={city.value}>
                                <input
                                  type="checkbox"
                                  checked={
                                    selectedCities.indexOf(city.value) > -1
                                  }
                                />
                                {city.value}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col_wrap">
                      <div className="form_name">
                        <h3>{t("constructorForm.heading3")}</h3>
                      </div>
                      <div className="type_hotel">
                        <select>
                          <option value="">{t("constructorForm.type1")}</option>
                          <option value="">{t("constructorForm.type2")}</option>
                          <option value="">{t("constructorForm.type3")}</option>
                          <option value="">
                            {" "}
                            <option value="">
                              {t("constructorForm.type4")}
                            </option>
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col ">
                    <div className="col_wrap">
                      <div className="required_info">
                        <div className="arrival_date">
                          <h3>Arrival date: </h3>
                          <input type="date" required />
                        </div>
                        <div className="during">
                          <h3>{t("constructorForm.heading4")}</h3>
                          <div className="counter_wrapper">
                            <button
                              type="button"
                              onClick={() => decrement(setDayCount)}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={dayCount}
                              onChange={handleDayChange}
                              disabled
                            />
                            <button
                              className="increment"
                              type="button"
                              onClick={() => increment(setDayCount)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="during">
                          <h3>{t("constructorForm.heading5")}</h3>
                          <div className="counter_wrapper">
                            <button
                              type="button"
                              onClick={() => decrement(setPersonCount)}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={personCount}
                              onChange={handlePersonChange}
                              disabled
                            />
                            <button
                              type="button"
                              className="increment"
                              onClick={() => increment(setPersonCount)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="during">
                          <h3>{t("constructorForm.heading6")}</h3>
                          <div className="counter_wrapper">
                            <button
                              type="button"
                              onClick={() => decrement(setChildCount)}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={childCount}
                              onChange={handleChildChange}
                              disabled
                            />
                            <button
                              type="button"
                              className="increment"
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
                <div className="call_contacts">
                  <div className="name_client">
                    <input
                      type="text"
                      placeholder={t("constructorForm.clientName")}
                      name="name"
                      autoComplete
                    />
                  </div>
                  <div className="email_client">
                    <input
                      type="mail"
                      placeholder={t("constructorForm.clientEmail")}
                      name="email"
                      autoComplete="on"
                    />
                  </div>
                  <div className="phone_client">
                    <input
                      type="number"
                      placeholder={t("constructorForm.clientNumber")}
                      name="number"
                    />
                  </div>
                </div>
                <button className="submit_collected_tour">
                  {t("constructorForm.submitForm")}
                </button>
              </form>
            </div>
          </Box>
        </Modal>
      </div>
      <Container maxWidth="lg">
        <div className="hero_wrapper">
          <div className="this_wrap">
            <div className="intro_texts">
              <h1>{t("hero.title")}</h1>
              <p>{t("hero.subtitle1")}</p>
              <button onClick={handleOpen}>{t("hero.constructorBtn")}</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
