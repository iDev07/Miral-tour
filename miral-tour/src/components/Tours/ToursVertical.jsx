import React from "react";
import { TourPackageCard } from "../TourPackage/TourPackageCard";

function ToursVertical({ tourpackage }) {
  return (
    <div className="ToursVertical">
      <div className="this_wrapper">
        <TourPackageCard tourpackage={tourpackage} />
      </div>
    </div>
  );
}

export default ToursVertical;
