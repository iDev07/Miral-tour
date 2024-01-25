"use client";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../store/features/cartSlice";
import { useTranslation } from "react-i18next";

export const TourPackageCard = ({ tourpackage }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const addToCart = (item) => {
    const isAlreadyInCart = cartItems.some(
      (cartItem) => cartItem.id === item.id
    );
    if (isAlreadyInCart) {
      return; // Skip adding the tour package to the cart
    }
    dispatch(addItem(item));
    // setButtonVisibility(false);
  };

  return (
    <div className="col">
      <div className="col_wrap">
        <div className="tour_img">
          <Link href={`/tourpackage/${tourpackage.id}`}>
            <img
              src={`https://admin.all4u-tour.uz/images/tour/${tourpackage.image}`}
              alt={tourpackage.title_en}
            />
          </Link>
          {/* <button
            className="add_cart"
            id="addToCartBtn"
            onClick={() => addToCart(tourpackage)}
          >
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
          </button> */}
        </div>
        <div className="tour_name">
          <Link href={`/tourpackage/${tourpackage.id}`}>
            <h2>
              {i18n.language === "uz"
                ? tourpackage.title_uz
                : i18n.language === "ru"
                ? tourpackage.title_ru
                : tourpackage.title_en}
            </h2>
          </Link>
        </div>
        <div className="tour_details">
          <p>
            {t("priceC")}
            {/* {`${tourpackage.price}`}
            {t("tourPackage.onPerson")} */}
          </p>
          <p>
            {tourpackage.days} {""}
            {t("tourPackage.day")}
          </p>
        </div>
      </div>
    </div>
  );
};
