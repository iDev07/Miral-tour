// "use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../store/features/cartSlice";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "@mui/icons-material";
import "animate.css";
export const TourPackageCard = ({ tourpackage }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const tourPackageId = tourpackage.id;

  // Initialize state from local storage or default to false
  const [isFilled, setIsFilled] = useState(false);
  const addToCart = (item) => {
    const isAlreadyInCart = cartItems.some(
      (cartItem) => cartItem.id === item.id
    );
    if (isAlreadyInCart) {
      return; // Skip adding the tour package to the cart
    }

    // Toggle the fill color
    setIsFilled(!isFilled);

    dispatch(addItem(item));
    // setButtonVisibility(false);
  };

  if (tourpackage.status !== 10) {
    // Don't render the tour package card if status is not 10
    return null;
  }

  return (
    // <div className="col">
    //   <div className="col_wrap">
    //     <div className="tour_img">
    //       <Link href={`/tourpackage/${tourpackage.id}`}>
    //         <img
    //           src={`https://admin.all4u-tour.uz/images/tour/${tourpackage.image}`}
    //           alt={tourpackage.title_en}
    //         />
    //       </Link>
    //       {/* <FlyingButton
    //         targetTop={"5%"}
    //         targetLeft={"90%"}
    //         animationDuration={1.8}
    //         flyingItemStyling={{ borderRadius: "6px", width: "15rem" }}
    //         src={`https://admin.all4u-tour.uz/images/tour/${tourpackage.image}`}
    //       > */}
    //       <button
    //         className="add_cart"
    //         id="addToCartBtn"
    //         onClick={() => addToCart(tourpackage)}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="30"
    //           height="30"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //         >
    //           <path
    //             d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
    //             fill="#0073DB"
    //           />
    //         </svg>
    //       </button>
    //       {/* </FlyingButton> */}
    //     </div>
    //     <div className="tour_name">
    //       <Link href={`/tourpackage/${tourpackage.id}`}>
    //         <h2>
    //           {i18n.language === "uz"
    //             ? tourpackage.title_uz
    //             : i18n.language === "ru"
    //             ? tourpackage.title_ru
    //             : i18n.language === "it" &&
    //               tourpackage.title_it !== null &&
    //               tourpackage.title_it !== ""
    //             ? tourpackage.title_it
    //             : tourpackage.title_en}
    //         </h2>
    //       </Link>
    //     </div>
    //     <div className="tour_details">
    //       <span className="from">{t("orderModal.from")}</span>
    //       <div className="bottom">
    //         <p>
    //           {`${tourpackage.price} $`}
    //           {/* {t("tourPackage.onPerson")} */}
    //         </p>
    //         <p>
    //           <svg
    //             width="16"
    //             height="16"
    //             viewBox="0 0 16 16"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M14.6666 8.00065C14.6666 11.6807 11.6799 14.6673 7.99992 14.6673C4.31992 14.6673 1.33325 11.6807 1.33325 8.00065C1.33325 4.32065 4.31992 1.33398 7.99992 1.33398C11.6799 1.33398 14.6666 4.32065 14.6666 8.00065Z"
    //               stroke="#4EE16E"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M10.4732 10.1192L8.40651 8.88586C8.04651 8.67253 7.75317 8.15919 7.75317 7.73919V5.00586"
    //               stroke="#4EE16E"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //           </svg>
    //           {tourpackage.days} {""}
    //           {tourpackage.days === 1
    //             ? t("tourPackage.day0")
    //             : t("tourPackage.day")}
    //           {/* {tourpackage.days} {t("tourPackage.day")} */}
    //         </p>
    //       </div>
    //       <Link
    //         className="tour_link green_btn"
    //         href={`/tourpackage/${tourpackage.id}`}
    //       >
    //         {t("cartPage.viewMore")}
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="new_col">
      <div className="new_col_wrap">
        <div className="content_wrap">
          <div className="back_tour_image">
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/tour/${tourpackage.image}`}
              alt={tourpackage.name}
            />
          </div>
          <div className="tour_content">
            <div className="tour_details">
              <div className="tour_name">
                <Link href={`/tourpackage/${tourpackage.id}`}>
                  <h3>
                    {" "}
                    {i18n.language === "uz"
                      ? tourpackage.title_uz
                      : i18n.language === "ru"
                      ? tourpackage.title_ru
                      : i18n.language === "it" &&
                        tourpackage.title_it !== null &&
                        tourpackage.title_it !== ""
                      ? tourpackage.title_it
                      : tourpackage.title_en}
                  </h3>
                </Link>
              </div>
              <div className="short_details">
                <div className="persons_and_price">
                  <div className="persons">
                    <div className="just_wrap">
                      <div className="icon_person">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.9999 17C15.6623 17 18.8649 18.5751 20.607 20.9247L18.765 21.796C17.3473 20.1157 14.8473 19 11.9999 19C9.15248 19 6.65252 20.1157 5.23479 21.796L3.39355 20.9238C5.13576 18.5747 8.33796 17 11.9999 17ZM11.9999 2C14.7613 2 16.9999 4.23858 16.9999 7V10C16.9999 12.6888 14.8776 14.8818 12.2168 14.9954L11.9999 15C9.23847 15 6.9999 12.7614 6.9999 10V7C6.9999 4.31125 9.1222 2.11818 11.783 2.00462L11.9999 2ZM11.9999 4C10.4022 4 9.09623 5.24892 9.00499 6.82373L8.9999 7V10C8.9999 11.6569 10.343 13 11.9999 13C13.5976 13 14.9036 11.7511 14.9948 10.1763L14.9999 10V7C14.9999 5.34315 13.6567 4 11.9999 4Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="start_price">
                        <p className="price">
                          {t("orderModal.from")} {`${tourpackage.price} $`}
                        </p>
                      </div>
                      <div>{""}/</div>
                      <div className="day">
                        {""}
                        <p>
                          {tourpackage.days}{" "}
                          {tourpackage.days === 1
                            ? t("tourPackage.day0")
                            : t("tourPackage.day")}
                        </p>
                      </div>
                    </div>
                    <p className="">
                      <Link
                        className="read_more"
                        href={`/tourpackage/${tourpackage.id}`}
                      >
                        {t("business.formBtn")}
                        <span>
                          <ChevronRight />
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="add_to_wishlist">
              <button
                className="add_cart"
                id="addToCartBtn"
                onClick={() => addToCart(tourpackage)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill={isFilled ? "red" : "#fff"}
                >
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
