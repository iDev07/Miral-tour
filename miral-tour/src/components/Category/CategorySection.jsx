import Link from "next/link";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TourPackageCard } from "../TourPackage/TourPackageCard";
export const CategorySection = ({ category, id, tourpackages }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const filteredTourPackages = tourpackages.filter(
    (tourpackage) => tourpackage.category_id === parseInt(id, 10)
  );
  // console.log(category);
  return (
    <div className="religious_category category">
      <div className="religious_wrapper">
        <Container maxWidth="lg">
          <div className="this_wrap">
            <div className="intro">
              <h1 suppressHydrationWarning>
                {i18n.language === "uz"
                  ? category.name_uz
                  : i18n.language === "ru"
                  ? category.name_ru
                  : category.name_en}
              </h1>
            </div>
            <div className="tour_packages">
              <div className="this_wrapper">
                <TourPackageCard
                  key={filteredTourPackages[0].id}
                  tourpackage={filteredTourPackages[0]}
                />
                <TourPackageCard
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
