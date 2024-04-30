import Link from "next/link";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TourPackageCard } from "../TourPackage/TourPackageCard";
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
                  : category.name_en}
              </h1>
            </div>
            <div className="tour_packages">
              <div className="this_wrapper">
                {filteredTourPackages &&
                  filteredTourPackages.length &&
                  filteredTourPackages
                    .slice(0, 8)
                    .map((tourpackage) => (
                      <TourPackageCard
                        key={tourpackage.id}
                        tourpackage={tourpackage}
                      />
                    ))}
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
