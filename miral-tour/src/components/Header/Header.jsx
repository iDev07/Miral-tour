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
import {
  AndroidOutlined,
  AppleOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Tabs, Modal } from "antd";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ApartmentIcon from "@mui/icons-material/Apartment";
import VillaIcon from "@mui/icons-material/Villa";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import FlightIcon from "@mui/icons-material/Flight";
import CarRentalIcon from "@mui/icons-material/CarRental";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Guides from "../Services/Guides";
import Hotels from "../Services/Hotels";
import Homestays from "../Services/Homestays";
import Cabs from "../Services/Cabs";
import RentCar from "../Services/RentCar";
import Activity from "../Services/Activity";

function Header() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
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
  const defaultLang =
    typeof window !== "undefined" ? localStorage.getItem("lang") || "en" : "en";
  const [lang, setLang] = useState(defaultLang);
  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
    window.location.reload();
  };
  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchQuery(searchText);

    const filtered = tourpackages.filter(
      (tourpackage) =>
        tourpackage.title_uz.toLowerCase().includes(searchText.toLowerCase()) ||
        tourpackage.title_ru.toLowerCase().includes(searchText.toLowerCase()) ||
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
  const [ticket, setTicket] = useState(false);
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
                    <Link href={"/tourpackages"}>
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
                                : category.name_en}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li className="parent_link">
                    <Link href={"/religious-tours"}>Religious tours</Link>
                  </li>
                  <li className="parent_link">
                    <Link href={"/business-tours"}>Business tours</Link>
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
                      Uzbekistan <KeyboardArrowDownOutlinedIcon />{" "}
                    </Link>
                    <ul className="hidden_ul_about">
                      <div className="wrapper">
                        <li className="parent_link_place">
                          <Link href={`/about-uzbekistan`}>
                            About Uzbekistan
                          </Link>
                        </li>
                        <li className="parent_link_place">
                          <Link href={`/famous-people`}>Ancient Scholars</Link>
                        </li>
                        <li className="parent_link_place">
                          <Link href={`/destinations`}>Destinations</Link>
                        </li>
                        <li className="parent_link_place">
                          <Link href={`/cities`}>Cities</Link>
                        </li>
                        <li className="parent_link_place">
                          <Link href={`/visa`}>Visa</Link>
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
              <select name="lang" value={lang} onChange={handleChange}>
                {/* <option value="ru">Ру</option> */}
                <option value="en">EN</option>
                {/* <option value="uz">UZ</option> */}
              </select>
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
