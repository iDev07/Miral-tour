import Link from "next/link";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TourPackageCard } from "../TourPackage/TourPackageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "animate.css";
export const CategorySection = ({ category, id, tourpackages }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const filteredTourPackages = tourpackages.filter(
    (tourpackage) => tourpackage.category_id === parseInt(id, 10)
  );
  return (
    <div className="religious_category  category">
      <div className="religious_wrapper ">
        <Container maxWidth="lg">
          <div className="this_wrap">
            <div className="intro">
              <h1 suppressHydrationWarning>
                {i18n.language === "uz"
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
                  : category.name_en}
              </h1>
            </div>
            <div className="tour_packages">
              <div className="this_wrapper">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={4}
                  slidesPerGroup={1}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  disableOnInteraction={false}
                  loopFillGroupWithBlank={true}
                  breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    "@1.00": {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    "@1.50": {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                  navigation={true}
                  modules={[Navigation, Pagination]}
                  className="mySwiper_persons"
                >
                  <div className="my_slider">
                    {filteredTourPackages &&
                      filteredTourPackages.length &&
                      filteredTourPackages.slice(0, 8).map((tourpackage) => (
                        <SwiperSlide>
                          <TourPackageCard
                            key={tourpackage.id}
                            tourpackage={tourpackage}
                          />
                        </SwiperSlide>
                      ))}
                  </div>
                </Swiper>

                {/* <TourPackageCard
                  key={filteredTourPackages[0].id}
                  tourpackage={filteredTourPackages[0]}
                /> */}
                {/* <TourPackageCard
                  key={filteredTourPackages[1].id}
                  tourpackage={filteredTourPackages[1]}
                />
                <TourPackageCard
                  key={filteredTourPackages[2].id}
                  tourpackage={filteredTourPackages[2]}
                />
                <TourPackageCard
                  key={filteredTourPackages[3].id}
                  tourpackage={filteredTourPackages[3]}
                />
                <TourPackageCard
                  key={filteredTourPackages[4].id}
                  tourpackage={filteredTourPackages[4]}
                />
                <TourPackageCard
                  key={filteredTourPackages[5].id}
                  tourpackage={filteredTourPackages[5]}
                />
                <TourPackageCard
                  key={filteredTourPackages[6].id}
                  tourpackage={filteredTourPackages[6]}
                /> */}
              </div>
            </div>
            <div className="more">
              <Link href={`/category/${category.id}`}>
                {t("category.more")}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
