"use client";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Tourpackage() {
  return (
    <div className="tourpackage pt_100">
      <div className="tourpakage_wrapper">
        <Container maxWidth="lg">
          <div className="this_wrapper">
            <div className="tourpackage_name">
              <h1>Religious tour to Uzbekistan</h1>
            </div>
            <div className="tourpackage_wrap">
              <div className="tour_images">
                <Swiper
                  spaceBetween={300}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  loop={true}
                  autoplay={{
                    delay: 5500,
                    disableOnInteraction: true,
                  }}
                  loopFillGroupWithBlank={true}
                  breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    "@1.00": {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    "@1.50": {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src="/img/tourpackage_inner.png"
                      alt="Religious tour to Uzbekistan"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/img/tourpackage_inner.png"
                      alt="Religious tour to Uzbekistan"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/img/tourpackage_inner.png"
                      alt="Religious tour to Uzbekistan"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="tour_details">
                <div className="timetable">
                  <h2>Tour itinerary</h2>
                  <div className="details_back">
                    <p>lorem ipsum dolor sit ishlamayaptiyu bly**** </p>
                  </div>
                </div>
                <div className="price">
                  <div className="price_iclude">
                    <h2>Price include</h2>
                    <ul>
                      <li>Aviatickets</li>
                      <li>Aviatickets</li>
                      <li>Aviatickets</li>
                      <li>Aviatickets</li>
                    </ul>
                  </div>
                  <div className="price_not_include">
                    <h2>Price not include</h2>
                    <ul>
                      <li>Aviatickets</li>
                      <li>Aviatickets</li>
                      <li>Aviatickets</li>
                      <li>Aviatickets</li>
                      <li>Aviatickets</li>
                    </ul>
                  </div>
                  <div className="order_book">
                    <button>Order now!</button>
                    <button type="button">Book now!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Tourpackage;
