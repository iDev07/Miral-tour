import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../store/store";
import { removeItem } from "../../../store/features/cartSlice";
function Cart() {
  const cartQuantity = useAppSelector((state) => state.cart.quantity);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const removeInCart = (item) => {
    dispatch(removeItem(item));
  };
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("cartPage.title")}</title>
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
        <meta
          name="google-site-verification"
          content="ENubd6T2CL6tApHlrZSjdjbBRFqwr-zdfEQaJmb-gBw"
        />
      </Head>
      <div className="cart pt_100">
        <div className="wrapper_cart">
          <Container maxWidth="lg">
            <div className="this_wrap">
              <div className="intro">
                <h1>{t("cartPage.title")}</h1>
              </div>
              {cartQuantity === 0 && (
                <div className="your_cart_empty">
                  <div className="wrapper">
                    <h3>{t("cartPage.empty")}</h3>
                    <img src="/img/cart_empty.png" alt="ALL4U Tourism Cart" />
                    <p>
                      {" "}
                      <Link href={"/"}>{t("cartPage.goHome")}</Link>
                    </p>
                  </div>
                </div>
              )}
              <div className="cart_wrap">
                {cart.map((item) => (
                  <div className="col" key={item.id}>
                    <div className="col_wrapper">
                      <div className="left_box">
                        <Link href={`/tourpackage/${item.id}`}>
                          <img
                            src={`https://admin.all4u-tour.uz/images/tour/${item.image}`}
                            alt={item.title_en || "No image available"}
                          />
                        </Link>
                      </div>
                      <div className="right_box">
                        <div className="tour_name">
                          <h2>
                            {" "}
                            {i18n.language === "uz"
                              ? item.title_uz
                              : i18n.language === "ru"
                              ? item.title_ru
                              : item.title_en}
                          </h2>
                        </div>
                        <div className="tour_details">
                          <ul>
                            <li>
                              {item.days} {""}
                              {t("tourPackage.day")}{" "}
                            </li>
                            <li></li>
                            <li>
                              {/* {`${item.price}`} */}
                              {t("priceC")}
                              {/* {t("tourPackage.onPerson")} */}
                            </li>
                          </ul>
                          <div className="remove">
                            <button onClick={() => removeInCart(item)}>
                              {t("cartPage.remove")}
                            </button>
                          </div>
                          <div className="tour_link">
                            <p>
                              <Link href={`/tourpackage/${item.id}`}>
                                {t("cartPage.viewMore")}
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Cart;
