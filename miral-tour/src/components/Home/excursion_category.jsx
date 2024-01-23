import Link from "next/link";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { tourpackages } from "../../../tourdata";
import { TourPackageCard } from "../TourPackage/TourPackageCard";
import { categories } from "../../../tourdata";
function Excursion_category() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const id = 2;
  const filteredTourPackages = tourpackages.filter(
    (tourpackage) => tourpackage.category_id === id
  );
  // console.log(filteredTourPackages);
  return (
    <div className="excursion_category category">
      <div className="religious_wrapper">
        <Container maxWidth="lg">
          <div className="this_wrap">
            <div className="intro">
              <h1 suppressHydrationWarning>
                {i18n.language === "uz"
                  ? categories[1].name_uz
                  : i18n.language === "ru"
                  ? categories[1].name_ru
                  : categories[1].name_en}
              </h1>
            </div>
            <div className="tour_packages">
              <div className="this_wrapper">
                <TourPackageCard tourpackage={filteredTourPackages[0]} />
                <TourPackageCard tourpackage={filteredTourPackages[1]} />
              </div>
            </div>
            <div className="more">
              <Link href={`/category/${categories[1].id}`}>
                {t("category.more")}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Excursion_category;
