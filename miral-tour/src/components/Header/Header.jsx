import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import dynamic from "next/dynamic";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import i18n from "../../../i18n";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../store/store";
import { Button, Tabs, Select } from "antd";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ApartmentIcon from "@mui/icons-material/Apartment";
import VillaIcon from "@mui/icons-material/Villa";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import FlightIcon from "@mui/icons-material/Flight";
import CarRentalIcon from "@mui/icons-material/CarRental";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import Guides from "../Services/Guides";
import Hotels from "../Services/Hotels";
import Homestays from "../Services/Homestays";
import Cabs from "../Services/Cabs";
import RentCar from "../Services/RentCar";
import Activity from "../Services/Activity";
const { Option } = Select;
const LanguageSelector = () => {
  const defaultLang =
    typeof window !== "undefined" ? localStorage.getItem("lang") || "en" : "en";
  const [lang, setLang] = useState(defaultLang);

  const handleChange = (value) => {
    setLang(value);
    localStorage.setItem("lang", value);
    i18n.changeLanguage(value);
    window.location.reload();
  };

  const languages = [
    { code: "en", name: "En", flag: "/img/flags/uk.png" },
    { code: "tr", name: "Tr", flag: "/img/flags/turkiye.png" },
    { code: "ru", name: "Ру", flag: "/img/flags/russia.png" },
    { code: "it", name: "It", flag: "/img/flags/italy.png" },
    // { code: "uz", name: "UZ", flag: "🇺🇿" },
  ];

  return (
    <Select value={lang} onChange={handleChange} style={{ width: 90 }}>
      {languages.map((language) => (
        <Option key={language.code} value={language.code}>
          <img
            src={language.flag}
            alt={language.name}
            style={{ width: "20px", marginRight: "8px", marginBottom: "-3px" }}
          />
          {language.name}
        </Option>
      ))}
    </Select>
  );
};
function Header() {
  const { t } = useTranslation();
  // const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [tourpackages, setTourPackages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);

  const router = useRouter();
  const [scroll, setScroll] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartQuantity = useAppSelector((state) => state.cart.quantity);
  // const defaultLang =
  //   typeof window !== "undefined" ? localStorage.getItem("lang") || "en" : "en";
  // const [lang, setLang] = useState(defaultLang);
  // const handleChange = (event) => {
  //   setLang(event.target.value);
  //   localStorage.setItem("lang", event.target.value);
  //   i18n.changeLanguage(event.target.value);
  //   window.location.reload();
  // };
  // console.log(defaultLang);

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchQuery(searchText);
    const filtered = tourpackages.filter(
      (tourpackage) =>
        tourpackage.title_uz.toLowerCase().includes(searchText.toLowerCase()) ||
        tourpackage.title_ru.toLowerCase().includes(searchText.toLowerCase()) ||
        // tourpackage.title_it.toLowerCase().includes(searchText.toLowerCase()) ||
        tourpackage.title_en.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPackages(filtered);
  };
  useEffect(() => {
    // Clear the search query when the user navigates to another page
    setSearchQuery("");
  }, [router.pathname]); // Listen for changes in the route
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 300) {
        setScroll("");
      } else {
        setScroll("scrolled");
      }
    });
  }
  useEffect(() => {
    // Fetch both tour packages and categories data
    axios
      .all([
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tourpackages`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/cities`),
      ])
      .then(
        axios.spread(
          (tourPackagesResponse, categoriesResponse, citiesResponse) => {
            setTourPackages(tourPackagesResponse.data);
            setCategories(categoriesResponse.data);
            setCities(citiesResponse.data);
            setLoading(false);
          }
        )
      )
      .catch((error) => {
        console.error("An error occurred:", error);
        setLoading(false);
      });
  }, []);

  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  useEffect(() => {
    // Add or remove "no-scroll" class from body based on modal visibility
    if (isDivVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup: Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isDivVisible]);
  const handleToggle = () => {
    setIsDivVisible(!isDivVisible);
    hideModal();
    setMenuOpen(!menuOpen);
  };
  const hideModal = () => {
    setIsModalVisible(false);
  };
  const items = [
    {
      key: "1",
      label: (
        <span className="services_tab_title">
          <DirectionsWalkIcon /> Guides
        </span>
      ),
      children: <Guides />,
      // icon: <DirectionsWalkIcon />,
    },
    {
      key: "2",
      label: (
        <span className="services_tab_title">
          <ApartmentIcon /> Hotels
        </span>
      ),
      children: <Hotels />,
    },
    {
      key: "3",
      label: (
        <span className="services_tab_title">
          <VillaIcon /> Homestays & Villas
        </span>
      ),
      children: <Homestays />,
    },
    {
      key: "4",
      label: (
        <span className="services_tab_title">
          <DirectionsCarFilledIcon /> Cabs
        </span>
      ),
      children: <Cabs />,
    },
    {
      key: "5",
      label: (
        <span className="services_tab_title">
          <FlightIcon /> Travel Insurance
        </span>
      ),
      children: <div className="guides"></div>,
    },
    {
      key: "6",
      label: (
        <span className="services_tab_title">
          <CarRentalIcon /> Rent Car
        </span>
      ),
      children: <RentCar />,
    },
    {
      key: "7",
      label: (
        <span className="services_tab_title">
          <LocalActivityIcon /> Activity
        </span>
      ),
      children: <Activity />,
    },
  ];

  return (
    <header className={`header  ${scroll}`}>
      <div className="header_wrapper">
        <Container maxWidth="lg">
          <div className="this_wrap">
            <div className="logo">
              <Link href={"/"}>
                <img src="/img/main_logo.png" width={200} alt="Miral Tour " />
              </Link>
            </div>
            <div className="links">
              <div className="links_wrap">
                <ul className="parent_links">
                  <li className="parent_link">
                    <Link href={"#"}>
                      {t("menu.catalog")}
                      <KeyboardArrowDownOutlinedIcon />{" "}
                    </Link>
                    <ul className="hidden_ul">
                      {categories
                        .filter((category) => category.id !== 6) // Filter out category with ID 6
                        .map((category) => (
                          <li key={category.id}>
                            <Link href={`/category/${category.id}`}>
                              {i18n.language === "uz"
                                ? category.name_uz
                                : i18n.language === "ru"
                                ? category.name_ru
                                : i18n.language === "it" &&
                                  category.name_it !== null &&
                                  category.name_it !== "" // Check if name_it is not null or empty
                                ? category.name_it
                                : i18n.language === "tr" &&
                                  category.name_tr !== null &&
                                  category.name_tr !== ""
                                ? category.name_tr
                                : category.name_en}{" "}
                              {/* If name_it is null or empty, display name_en */}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li className="parent_link">
                    <Link href={"/religious-tours"}>{t("menu.religious")}</Link>
                  </li>
                  <li className="parent_link">
                    <Link href={"/business-tours"}>{t("menu.business")}</Link>
                  </li>
                  {/* <li
                    className={`ownTripBtn ${menuOpen ? "open" : ""}`}
                    onClick={handleToggle}
                  >
                    <p>{t("menu.ownTrip")}</p>
                    <div className="ham">
                      <span className="hamburgerIcon"></span>
                      <span className="hamburgerIcon middle"></span>
                      <span className="hamburgerIcon"></span>
                    </div>
                  </li> */}
                  <li className="parent_link about_uz">
                    <Link href={"/about-uzbekistan"}>
                      {t("menu.uzb")} <KeyboardArrowDownOutlinedIcon />{" "}
                    </Link>
                    <ul className="hidden_ul_about">
                      <div className="wrapper">
                        <li className="parent_link_place">
                          <Link href={`/about-uzbekistan`}>
                            {t("menu.sub_uzb1")}
                          </Link>
                        </li>
                        <li className="parent_link_place">
                          <Link href={`/useful-informations`}>
                            {t("menu.sub_uzb6")}
                          </Link>
                        </li>
                        <li className="parent_link_place">
                          <Link href={`/famous-people`}>
                            {" "}
                            {t("menu.sub_uzb2")}
                          </Link>
                        </li>
                        <li className="parent_link_place">
                          <Link href={`/destinations`}>
                            {" "}
                            {t("menu.sub_uzb3")}
                          </Link>
                        </li>
                        <li className="parent_link_place">
                          <Link href={`/cities`}> {t("menu.sub_uzb4")}</Link>
                        </li>
                        <li className="parent_link_place">
                          <Link href={`/visa`}> {t("menu.sub_uzb5")}</Link>
                        </li>
                        {/* {cities.map((city) => (
                          <li className="parent_link_place" key={city.id}>
                            <Link href={`/cities/${city.seo_url}`}>
                              {city.name_en}
                            </Link>
                          </li>
                        ))} */}
                      </div>
                    </ul>
                  </li>
                  <li className="parent_link">
                    <Link href={"/contacts"}>{t("menu.contacts")}</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="aviasales_widget">
              <p onClick={() => setTicket(true)}>
                <AirplaneTicketIcon />
                <span>Check Fly Tickets</span>
              </p>
              <Modal
                title="Modal 1000px width"
                centered
                open={ticket}
                onCancel={() => setTicket(false)}
                width={1000}
                footer={null}
              ></Modal>
            </div> */}
            <div className="search">
              <div className="search_wrap">
                <form action="">
                  {" "}
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder={t("menu.search")}
                  />
                  <div className="search_icon"></div>
                </form>
                {searchQuery && (
                  <ul className="hidden_ul_search">
                    {filteredPackages.map((tourpackage) => (
                      <li key={tourpackage.id}>
                        <Link href={`/tourpackage/${tourpackage.id}`}>
                          {i18n.language === "uz"
                            ? tourpackage.title_uz
                            : i18n.language === "ru"
                            ? tourpackage.title_ru
                            : i18n.language === "it" &&
                              tourpackage.title_it !== null &&
                              tourpackage.title_it !== ""
                            ? tourpackage.title_it
                            : i18n.language === "tr" &&
                              tourpackage.title_tr !== null &&
                              tourpackage.title_tr !== ""
                            ? tourpackage.title_tr
                            : tourpackage.title_en}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {/* <div className="wishlist">
              <Link href={"/wishlist"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                    fill="#0073DB"
                  />
                </svg>
                <span id="qty">{cartQuantity}</span>
              </Link>
            </div> */}
            <div className="cart">
              <Link href={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                    fill="#0073DB"
                  />
                </svg>
                <span id="qty">{cartQuantity}</span>
              </Link>
            </div>
            <div className="language">
              <LanguageSelector />
            </div>
          </div>
        </Container>
      </div>
      <div className={`hiddenDiv ${isDivVisible ? "" : "hidden"}`}>
        <div className="inner_wrap">
          <div className="my_tabs">
            <Tabs defaultActiveKey="1" items={items} />
          </div>
        </div>
      </div>

      {/* Your modal component */}
    </header>
  );
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });
export const getStaticPaths = async () => {
  const paths = cities.map((city) => ({
    params: { seo_url: city.seo_url }, // Replace with the actual key for the SEO-friendly URL
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const city = cities.find((city) => city.seo_url === params.seo_url);

  if (!city) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      city,
    },
    revalidate: 1, // In seconds. Controls how often the page is re-generated.
  };
};
