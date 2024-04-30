// "use client";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../store/features/cartSlice";
import { useTranslation } from "react-i18next";
import "animate.css";
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
  if (tourpackage.status !== 10) {
    // Don't render the tour package card if status is not 10
    return null;
  }
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
          {/* <FlyingButton
            targetTop={"5%"}
            targetLeft={"90%"}
            animationDuration={1.8}
            flyingItemStyling={{ borderRadius: "6px", width: "15rem" }}
            src={`https://admin.all4u-tour.uz/images/tour/${tourpackage.image}`}
          > */}
          <button
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
          </button>
          {/* </FlyingButton> */}
        </div>
        <div className="tour_name">
          <Link href={`/tourpackage/${tourpackage.id}`}>
            <h2>
              {i18n.language === "uz"
                ? tourpackage.title_uz
                : i18n.language === "ru"
                ? tourpackage.title_ru
                : i18n.language === "it" &&
                  tourpackage.title_it !== null &&
                  tourpackage.title_it !== ""
                ? tourpackage.title_it
                : tourpackage.title_en}
            </h2>
          </Link>
        </div>
        <div className="tour_details">
          <span className="from">{t("orderModal.from")}</span>
          <div className="bottom">
            <p>
              {`${tourpackage.price} $`}
              {/* {t("tourPackage.onPerson")} */}
            </p>
            <p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6666 8.00065C14.6666 11.6807 11.6799 14.6673 7.99992 14.6673C4.31992 14.6673 1.33325 11.6807 1.33325 8.00065C1.33325 4.32065 4.31992 1.33398 7.99992 1.33398C11.6799 1.33398 14.6666 4.32065 14.6666 8.00065Z"
                  stroke="#4EE16E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.4732 10.1192L8.40651 8.88586C8.04651 8.67253 7.75317 8.15919 7.75317 7.73919V5.00586"
                  stroke="#4EE16E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {tourpackage.days} {""}
              {t("tourPackage.day")}
            </p>
          </div>
          <Link
            className="tour_link green_btn"
            href={`/tourpackage/${tourpackage.id}`}
          >
            {t("cartPage.viewMore")}
          </Link>
        </div>
      </div>
    </div>
  );
};
