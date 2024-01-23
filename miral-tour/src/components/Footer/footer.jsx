import React from "react";
import Link from "next/link";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <Container maxWidth="lg">
          <div className="this_wrap">
            <div className="logo">
              <a href="">
                {" "}
                <img src="/img/turbo.png" alt="ALL4U Tourism" />
              </a>
            </div>
            <div className="motto">
              <p>{t("footer.motto")}</p>
            </div>
            <div className="links">
              <div className="intro">
                <h3>{t("footer.usefulLinks")}</h3>
              </div>
              <ul>
                <li>
                  <Link href={"/team"}>{t("footer.link1")}</Link>
                </li>
                <li>
                  <Link href={"/cart"}>{t("menu.cart")}</Link>
                </li>
                <li>{/* <Link href={"/"}>Autorent</Link> */}</li>
              </ul>
            </div>
            <div className="contacts">
              <div className="intro">
                <h3>{t("footer.contacts")}</h3>
              </div>
              <div className="contacts_content">
                <ul>
                  <li>
                    <a href="tel: +998 71 230 38 83">+998 71 230 38 83</a>
                  </li>
                  <li>
                    {" "}
                    <a href="mailto:info@all4u-tour.uz ">info@turbo-tour.uz</a>
                  </li>
                  {/* <li>Tashkent, Yakkasaray dis, Khumo 57</li> */}
                </ul>
              </div>
            </div>
            <div className="payments">
              <div className="intro">
                <h3>{t("footer.paymentMethods")}</h3>
              </div>
              <div className="payment_wrap">
                <div className="col">
                  <img src="/img/payme.png" alt="ALL4U Tourism Payments" />
                </div>
                <div className="col">
                  <img src="/img/click.png" alt="ALL4U Tourism Payments" />
                </div>
                <div className="col">
                  <img src="/img/visa.png" alt="ALL4U Tourism Payments" />
                </div>
                <div className="col">
                  <img src="/img/mastercard.png" alt="ALL4U Tourism Payments" />
                </div>
              </div>
            </div>
            <div className="social_newtworks">
              <div className="intro">
                <h3>{t("footer.socialNetworks")}</h3>
              </div>
              <ul>
                <li>
                  <a href="https://t.me/turbotouruz">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1157_2674)">
                        <path
                          d="M22.5 0C10.08 0 0 10.08 0 22.5C0 34.92 10.08 45 22.5 45C34.92 45 45 34.92 45 22.5C45 10.08 34.92 0 22.5 0ZM32.94 15.3C32.6025 18.855 31.14 27.495 30.3975 31.4775C30.0825 33.165 29.4525 33.7275 28.8675 33.795C27.5625 33.9075 26.5725 32.94 25.3125 32.1075C23.3325 30.8025 22.2075 29.9925 20.295 28.7325C18.0675 27.27 19.5075 26.46 20.79 25.155C21.1275 24.8175 26.8875 19.575 27 19.1025C27.0156 19.0309 27.0135 18.9566 26.9939 18.8861C26.9743 18.8155 26.9378 18.7508 26.8875 18.6975C26.7525 18.585 26.5725 18.63 26.415 18.6525C26.2125 18.6975 23.0625 20.79 16.92 24.93C16.02 25.5375 15.21 25.8525 14.49 25.83C13.68 25.8075 12.15 25.38 11.0025 24.9975C9.585 24.5475 8.4825 24.3 8.5725 23.5125C8.6175 23.1075 9.18 22.7025 10.2375 22.275C16.8075 19.4175 21.1725 17.5275 23.355 16.6275C29.61 14.0175 30.8925 13.5675 31.7475 13.5675C31.9275 13.5675 32.355 13.6125 32.625 13.8375C32.85 14.0175 32.9175 14.265 32.94 14.445C32.9175 14.58 32.9625 14.985 32.94 15.3Z"
                          fill="#004074"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1157_2674">
                          <rect width="45" height="45" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/turbotour.uz/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1157_2678)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5C45 34.9264 34.9264 45 22.5 45C10.0736 45 0 34.9264 0 22.5ZM22.5011 10.5C19.2421 10.5 18.8331 10.5142 17.5531 10.5725C16.2756 10.631 15.4036 10.8333 14.6406 11.13C13.8513 11.4365 13.1818 11.8465 12.5148 12.5138C11.8473 13.1808 11.4372 13.8503 11.1297 14.6392C10.8323 15.4026 10.6297 16.2748 10.5723 17.5518C10.515 18.8318 10.5 19.2411 10.5 22.5001C10.5 25.7591 10.5145 26.1669 10.5725 27.4469C10.6312 28.7244 10.8335 29.5964 11.13 30.3594C11.4367 31.1487 11.8467 31.8182 12.514 32.4852C13.1808 33.1527 13.8502 33.5637 14.6391 33.8703C15.4026 34.167 16.2748 34.3692 17.5521 34.4277C18.8321 34.486 19.2409 34.5003 22.4996 34.5003C25.7589 34.5003 26.1667 34.486 27.4467 34.4277C28.7242 34.3692 29.5972 34.167 30.3608 33.8703C31.1497 33.5637 31.8182 33.1527 32.4849 32.4852C33.1524 31.8182 33.5625 31.1487 33.87 30.3597C34.165 29.5964 34.3675 28.7242 34.4275 27.4472C34.485 26.1671 34.5 25.7591 34.5 22.5001C34.5 19.2411 34.485 18.8321 34.4275 17.5521C34.3675 16.2745 34.165 15.4026 33.87 14.6395C33.5625 13.8503 33.1524 13.1808 32.4849 12.5138C31.8174 11.8462 31.1499 11.4363 30.36 11.13C29.5949 10.8333 28.7225 10.631 27.4449 10.5725C26.1649 10.5142 25.7574 10.5 22.4974 10.5H22.5011Z"
                          fill="#004074"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M21.4251 12.6632C21.7446 12.6627 22.1011 12.6632 22.5016 12.6632C25.7056 12.6632 26.0854 12.6747 27.3507 12.7322C28.5207 12.7857 29.1557 12.9812 29.5787 13.1454C30.1387 13.3629 30.538 13.6229 30.9577 14.0429C31.3777 14.4629 31.6378 14.8629 31.8557 15.423C32.02 15.8454 32.2157 16.4805 32.269 17.6505C32.3264 18.9154 32.339 19.2955 32.339 22.498C32.339 25.7005 32.3264 26.0806 32.269 27.3455C32.2154 28.5155 32.02 29.1506 31.8557 29.573C31.6382 30.1331 31.3777 30.5318 30.9577 30.9516C30.5377 31.3716 30.139 31.6316 29.5787 31.8491C29.1562 32.0141 28.5207 32.2091 27.3507 32.2626C26.0857 32.3201 25.7056 32.3326 22.5016 32.3326C19.2973 32.3326 18.9176 32.3201 17.6526 32.2626C16.4826 32.2086 15.8475 32.0131 15.4243 31.8488C14.8643 31.6313 14.4642 31.3713 14.0442 30.9513C13.6242 30.5313 13.3643 30.1323 13.1463 29.5721C12.9821 29.1496 12.7863 28.5146 12.7331 27.3446C12.6755 26.0795 12.6641 25.6996 12.6641 22.495C12.6641 19.2904 12.6755 18.9124 12.7331 17.6475C12.7865 16.4775 12.9821 15.8424 13.1463 15.4194C13.3638 14.8594 13.6242 14.4594 14.0442 14.0394C14.4642 13.6194 14.8643 13.3594 15.4243 13.1414C15.8473 12.9764 16.4826 12.7814 17.6526 12.7277C18.7596 12.6777 19.1886 12.6627 21.4251 12.6602V12.6632ZM28.9072 14.6556C28.1122 14.6556 27.4672 15.3 27.4672 16.0952C27.4672 16.8902 28.1122 17.5352 28.9072 17.5352C29.7022 17.5352 30.3472 16.8902 30.3472 16.0952C30.3472 15.3002 29.7022 14.6556 28.9072 14.6556ZM22.5016 16.3382C19.0983 16.3382 16.3391 19.0975 16.3391 22.5007C16.3391 25.904 19.0983 28.6621 22.5016 28.6621C25.9049 28.6621 28.6632 25.904 28.6632 22.5007C28.6632 19.0975 25.9049 16.3382 22.5016 16.3382Z"
                          fill="#004074"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.5 18.5C24.7091 18.5 26.5001 20.2908 26.5001 22.5C26.5001 24.7091 24.7091 26.5001 22.5 26.5001C20.2907 26.5001 18.5 24.7091 18.5 22.5C18.5 20.2908 20.2907 18.5 22.5 18.5Z"
                          fill="#004074"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1157_2678">
                          <rect width="45" height="45" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/All4U.Tourism">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1157_2676)">
                        <path
                          d="M45 22.5564C45 10.1053 34.92 0 22.5 0C10.08 0 0 10.1053 0 22.5564C0 33.4737 7.74 42.5639 18 44.6617V29.3233H13.5V22.5564H18V16.9173C18 12.5639 21.5325 9.02256 25.875 9.02256H31.5V15.7895H27C25.7625 15.7895 24.75 16.8045 24.75 18.0451V22.5564H31.5V29.3233H24.75V45C36.1125 43.8722 45 34.2632 45 22.5564Z"
                          fill="#004074"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1157_2676">
                          <rect width="45" height="45" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <h5>
              {" "}
              {t("footer.copyrights")}
              {/* <a href="https:all4u-tour.uz">ALL4U Tourism</a> Company */}
            </h5>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
