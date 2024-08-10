"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import countryList from "react-select-country-list";
import {
  Popover,
  Button,
  Select,
  Checkbox,
  DatePicker,
  Modal,
  Input,
} from "antd";
import { useTranslation } from "react-i18next";
import OrderModal from "../OrderModal/OrderModal";

function Hero({ tourpackages, categories, cities, countriesBack }) {
  const [value, setValue] = useState();
  const options = useMemo(() => countryList().getData(), []);
  const { t, i18n } = useTranslation();
  const [sortedTours, setSortedTours] = useState([]);
  const [dayFilter, setDayFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(null);
  const defaultCheckedList = [];
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [dateRange, setDateRange] = useState(null);
  const [loading, setLoading] = useState(true);
  const [defaultCountry, setDefaultCountry] = useState({
    value: 0,
    label: "Select",
  });
  const [country, setCountry] = useState("");
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
  const [showResults, setShowResults] = useState(false);
  const changeHandler = (value) => {
    setValue(value);
  };
  const handleButtonClick = () => {
    setShowResults(!showResults);
  };
  const [selectedCountry, setSelectedCountry] = useState();

  const handleDateChange = (dates) => {
    if (dates && dates.length === 2) {
      setDateRange(dates); // Add this line to update the dateRange state
    }
  };
  const allCities = cities.map((city) => ({
    value: city.id,
    label:
      i18n.language === "uz"
        ? city.name_uz
        : i18n.language === "ru"
        ? city.name_ru
        : i18n.language === "it"
        ? city.name_it
        : i18n.language === "tr"
        ? city.name_tr
        : city.name_en,
  }));

  const CheckboxGroup = Checkbox.Group;
  const onChange = (list) => {
    setCheckedList(list);
  };
  const [selectAll, setSelectAll] = useState(false);
  const onCheckAllChange = (e) => {
    const allCityValues = allCities.map((city) => city.value);
    setCheckedList(e.target.checked ? allCityValues : []);
    setSelectAll(e.target.checked); // Add this line to update selectAll state
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
  const updatePersonsCount = (newCount) => {
    setPersonCount(newCount);
  };
  const updateChildCount = (newCount) => {
    setChildCount(newCount);
  };
  const handleCountryChange = (value, label) => {
    setSelectedCountry(label);
  };
  const handleGroupChange = (value, label) => {
    setTypeGroup(value);
  };
  const handleClassChange = (value, label) => {
    setTypeClass(value);
  };

  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  //       },
  //       (error) => {
  //         console.error("Geolocation error:", error.message);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not available in this browser.");
  //   }
  // }, []);
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
  // console.log(country);
  // Call findCountry only if country is not already set
  // if (!country) {
  //   findCountry();
  // }
  const { RangePicker } = DatePicker;
  const content1 = (
    <div className="person_count_plus">
      <div className="wrapper_persons">
        <button className="decrement" onClick={() => decrement(setPersonCount)}>
          -
        </button>
        <input
          type="number"
          value={personCount}
          onChange={handlePersonChange}
          disabled
        />

        <button onClick={() => increment(setPersonCount)} className="increment">
          +
        </button>
      </div>
      <div className="wrapper_children">
        <h4>{t("constructorForm.heading6")}</h4>
        <button className="decrement" onClick={() => decrement(setChildCount)}>
          -
        </button>
        <input
          type="number"
          value={childCount}
          onChange={handleChildChange}
          disabled
        />
        <button className="increment" onClick={() => increment(setChildCount)}>
          +
        </button>
      </div>
    </div>
  );

  // ----------------------------------------------------------Filter ------------------------------------------------------------------
  const handleDaysChange = (value) => {
    setDayFilter(value);
  };
  const handleCategoriesFilter = (value) => {
    setCategoryFilter(value);
  };
  // Load the saved filters from localStorage on component mount
  useEffect(() => {
    const storedDayFilter = localStorage.getItem("dayFilter");
    const storedCategoryFilter = localStorage.getItem("categoryFilter");
    const storedCheckedList = JSON.parse(localStorage.getItem("checkedList"));

    setDayFilter(storedDayFilter || null);
    setCategoryFilter(storedCategoryFilter || null);
    setCheckedList(storedCheckedList || []);
  }, []);
  useEffect(() => {
    // console.log("dayFilter:", dayFilter);
    // console.log("categoryFilter:", categoryFilter);
    // console.log("checkedList:", checkedList);

    // console.log("Before filterTourPackages");
    filterTourPackages();
    // console.log("After filterTourPackages");
  }, [dayFilter, categoryFilter, checkedList]);

  const filterTourPackages = () => {
    const filteredPackages = tourpackages
      .filter((tourpackage) => {
        const dayFilterMatch = dayFilter ? tourpackage.days == dayFilter : true;
        const categoryFilterMatch = categoryFilter
          ? tourpackage.category_id == categoryFilter
          : true;
        const citiesMatch =
          checkedList.length === 0 ||
          checkedList.some((selectedCity) =>
            tourpackage.cities.some((city) => city.city_id === selectedCity)
          );

        return dayFilterMatch && categoryFilterMatch && citiesMatch;
      })
      .map((filteredPackage) => {
        const cityIdsInTourPackage = filteredPackage.cities.map(
          (city) => city.city_id
        );
        const citiesMatch =
          checkedList.length === 0 ||
          checkedList.some((selectedCity) =>
            cityIdsInTourPackage.includes(selectedCity)
          );

        return {
          id: filteredPackage.id,
          status: filteredPackage.status,
          city: citiesMatch ? cityIdsInTourPackage : null,
          days: filteredPackage.days,
          category_id: filteredPackage.category_id,
          title_uz: filteredPackage.title_uz,
          title_ru: filteredPackage.title_ru,
          title_it: filteredPackage.title_it,
          title_tr: filteredPackage.title_tr,
          title_en: filteredPackage.title_en,
          image: filteredPackage.image,
          content_uz: filteredPackage.content_uz,
          content_en: filteredPackage.content_en,
          content_ru: filteredPackage.content_ru,
          content_it: filteredPackage.content_it,
          content_tr: filteredPackage.content_tr,
          // Add more properties as needed
        };
      });

    setSortedTours(filteredPackages);
  };
  // const defaultGroup = {
  //   value: 0,
  //   label: t("constructorForm.typeOfGroup"),
  // };
  return (
    <>
      <div className="hero pt_100">
        <Container maxWidth="lg">
          <div className="hero_wrapper">
            <div className="this_wrap">
              <div className="search_module">
                <div className="module_wrapper">
                  <div className="filters">
                    <div className="top">
                      <div className="countries">
                        <div className="countries_wrapper">
                          <div className="countries_list">
                            <p className="filter_name">
                              {t("constructorForm.heading1")}
                            </p>
                            <Select
                              options={options}
                              value={value}
                              onChange={changeHandler}
                            />
                            {/* <Select
                                defaultValue={defaultCountry}
                                onChange={handleCountryChange}
                                options={countries}
                              /> */}
                          </div>
                        </div>
                      </div>
                      <div className="const_country">
                        <div className="uzbekistan">
                          <p className="filter_name">
                            {t("constructorForm.heading2")}
                          </p>
                          <b>{t("constructorForm.constCountry")}</b>
                        </div>
                      </div>
                      <div className="dates">
                        <p className="filter_name">
                          {t("constructorForm.heading3")}
                        </p>
                        <div className="dates_wrapper">
                          <RangePicker
                            // format="YYYY-MM-DD"
                            format="DD-MM-YYYY"
                            placeholder=""
                            defaultValue={""}
                            inputReadOnly
                            onChange={handleDateChange}
                          />
                        </div>
                      </div>
                      <div className="nights">
                        <p className="filter_name">
                          {t("constructorForm.heading4")}
                        </p>
                        <div className="nights_wrapper">
                          <div className="night">
                            <Select
                              defaultValue={{
                                value: 8,
                                label: "8",
                              }}
                              style={{ width: 120, borderRadius: 0 }}
                              // suffixIcon={siuffix}
                              onChange={handleDaysChange}
                              options={[
                                { value: "1", label: "1" },
                                { value: "3", label: "3" },
                                { value: "4", label: "4" },
                                { value: "7", label: "7" },
                                { value: "8", label: "8" },
                              ]}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="tourists_count">
                        <div className="tourist_count_wrapper">
                          <div className="persons">
                            <p className="filter_name">
                              {t("constructorForm.heading5")}
                            </p>
                            <div className="persoons_count">
                              <Popover
                                content={content1}
                                placement="bottom"
                                title={t("constructorForm.personsCapitalise")}
                                trigger="click"
                                style={{
                                  width: 200,
                                }}
                              >
                                <Button>
                                  {personCount}{" "}
                                  {t("constructorForm.personsSmall")}
                                </Button>
                              </Popover>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="middle">
                      {/* s */}
                      <div className="veiw_type">
                        <Select
                          defaultValue={{
                            value: 3,
                            label: t("constructorForm.typeOfTravel"),
                          }}
                          style={{ width: 200, borderRadius: 0 }}
                          // suffixIcon={null}
                          onChange={handleCategoriesFilter}
                          options={categories.map((category) => {
                            return {
                              value: category.id,
                              label:
                                i18n.language === "uz"
                                  ? category.name_uz
                                  : i18n.language === "ru"
                                  ? category.name_ru
                                  : i18n.language === "it" &&
                                    category.name_it !== null &&
                                    category.name_it !== ""
                                  ? category.name_it
                                  : i18n.language === "tr" &&
                                    category.name_tr !== null &&
                                    category.name_tr !== ""
                                  ? category.name_tr
                                  : category.name_en,
                            };
                          })}
                          //   [

                          //   {
                          //     value: categories[0].id,
                          //     label:
                          //       i18n.language === "uz"
                          //         ? categories[0].name_uz
                          //         : i18n.language === "ru"
                          //         ? categories[0].name_ru
                          //         : categories[0].name_en,
                          //   },
                          //   {
                          //     value: categories[1].id,
                          //     label:
                          //       i18n.language === "uz"
                          //         ? categories[1].name_uz
                          //         : i18n.language === "ru"
                          //         ? categories[1].name_ru
                          //         : categories[1].name_en,
                          //   },
                          //   {
                          //     value: categories[2].id,
                          //     label:
                          //       i18n.language === "uz"
                          //         ? categories[2].name_uz
                          //         : i18n.language === "ru"
                          //         ? categories[2].name_ru
                          //         : categories[2].name_en,
                          //   },
                          //   {
                          //     value: categories[3].id,
                          //     label:
                          //       i18n.language === "uz"
                          //         ? categories[3].name_uz
                          //         : i18n.language === "ru"
                          //         ? categories[3].name_ru
                          //         : categories[3].name_en,
                          //   },

                          // ]}
                        />
                      </div>
                      <div className="group_type">
                        <Select
                          // defaultValue={{
                          //   value: 0,
                          //   label: t("constructorForm.typeOfGroup"),
                          // }}
                          value={typeGroup}
                          style={{ width: 200, borderRadius: 0 }}
                          // suffixIcon={null}
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
                      <div className="tarif_type">
                        <Select
                          value={typeClass}
                          style={{ width: 200, borderRadius: 0 }}
                          // suffixIcon={null}
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
                      <div className="search_btn">
                        <button type="button" onClick={handleButtonClick}>
                          {t("constructorForm.findTourPackages")}
                        </button>
                      </div>
                    </div>

                    {/* <div className="bottom_bar">
                    <div className="currency">
                      <Select
                        defaultValue={t("constructorForm.currency")}
                        style={{
                          width: 120,
                          borderRadius: 0,
                        }}
                        // suffixIcon={null}
                        onChange={handleValuteChange}
                        options={[
                          { value: 1, label: "UZS" },
                          { value: 2, label: "USD" },
                          { value: 3, label: "EUR" },
                          { value: 4, label: "RUB" },
                        ]}
                      />
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="result">
        <Container>
          {showResults ? (
            <div className="results_wrap">
              <div className="filter_tours">
                <div className="cities_in_filter">
                  <div className="cities_wrap">
                    <h2>{t("constructorForm.cities")}</h2>
                    <Checkbox onChange={onCheckAllChange} checked={selectAll}>
                      {t("constructorForm.allCities")}
                    </Checkbox>
                    <CheckboxGroup
                      options={cities.map((city) => ({
                        label:
                          i18n.language === "uz"
                            ? city.name_uz
                            : i18n.language === "ru"
                            ? city.name_ru
                            : i18n.language === "it" &&
                              city.name_it !== null &&
                              city.name_it !== ""
                            ? city.name_it
                            : i18n.language === "tr" &&
                              city.name_tr !== null &&
                              city.name_tr !== ""
                            ? city.name_tr
                            : city.name_en,
                        value: city.id,
                      }))}
                      value={checkedList}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="result_tourpackages">
                <div className="tourpackage_card">
                  {sortedTours.length > 0 ? (
                    sortedTours.map((tourpackage) => (
                      <OrderModal
                        key={tourpackage.id}
                        country={country}
                        tourpackage={tourpackage}
                        defaultCountry={defaultCountry}
                        onCountryChange={handleCountryChange}
                        selectedDates={dateRange}
                        selectedCategory={categoryFilter}
                        persons={personCount}
                        updatePersonsCount={updatePersonsCount}
                        onPersonChange={handlePersonChange}
                        onChildChange={handleChildChange}
                        childs={childCount}
                        updateChildCount={updateChildCount}
                        type_group={typeGroup}
                        onGroupChange={handleGroupChange}
                        class_tour={typeClass}
                        onClassChange={handleClassChange}
                        // content_uz={content_uz}
                      />
                    ))
                  ) : (
                    <p className="tours_not_found">
                      {t("constructorForm.notFound")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p></p>
          )}
          {/* <div className="results_wrap">
            <div className="filter_tours">
              <div className="languages">
                <div className="languages_wrap">
                  <p>Languages</p>
                  <Checkbox onChange={onCheckAllChange} checked={selectAll}>
                    {t("constructorForm.allCities")}
                  </Checkbox>
                  <CheckboxGroup
                    options={languages.map((language) => ({
                      label: language.label,
                      value: language.value,
                    }))}
                    value={checkedList}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className="result_tourpackages">
              <div className="tourpackage_card">
                {sortedTours.map((tourpackage) => (
                  <OrderModal
                    key={tourpackage.id}
                    countries={countries}
                    country={country}
                    tourpackage={tourpackage}
                    defaultCountry={defaultCountry}
                    onCountryChange={handleCountryChange}
                    selectedDates={dateRange}
                    selectedCategory={categoryFilter}
                    persons={personCount}
                    updatePersonsCount={updatePersonsCount}
                    onPersonChange={handlePersonChange}
                    onChildChange={handleChildChange}
                    childs={childCount}
                    updateChildCount={updateChildCount}
                    type_group={typeGroup}
                    onGroupChange={handleGroupChange}
                    class_tour={typeClass}
                    onClassChange={handleClassChange}
                    // content_uz={content_uz}
                  />
                ))}
              </div>
            </div>
          </div> */}
        </Container>
      </div>
    </>
  );
}

export default Hero;
