import React from "react";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TourPackageCard } from "@/components/TourPackage/TourPackageCard";
function Country() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const router = useRouter();
  const { id } = router.query;
  const category = categories.find(
    (category) => category.id === parseInt(id),
    10
  );
  const filteredTourPackages = tourpackages.filter(
    (tourpackage) => tourpackage.country_id === parseInt(id, 10)
  );
  console.log(filteredTourPackages);
  if (!category) {
    return <div>Category not found</div>;
  }
  return (
    <div className="category_page pt_100">
      <div className="category_page_wrapper">
        <Container maxWidth="lg">
          <div className="this_wrap">
            <div className="intro">
              <h1>
                {i18n.language === "uz"
                  ? category.name_uz
                  : i18n.language === "ru"
                  ? category.name_ru
                  : category.name_en}
              </h1>
            </div>
            <div className="category_page_wrap">
              <div className="tour_packages">
                <div className="this_wrapper">
                  {filteredTourPackages.map((tourpackage) => (
                    <TourPackageCard
                      key={tourpackage.id}
                      tourpackage={tourpackage}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Country;
