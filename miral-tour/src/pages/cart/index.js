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
