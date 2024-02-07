import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function DestinationsMain() {
  const [destinations, setDestinations] = useState([]);
  axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/destinations`)
    .then((res) => {
      setDestinations(res.data);
    })
    .catch((error) => {
      console.error("An occured error", error);
    });
  return (
    <div className="DestinationsMain pt_70">
      <ul>
        {destinations.map((destination) => (
          <Link href={`/destinations/${destination.seo_url}`}>
            {destination.title_en}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default DestinationsMain;
