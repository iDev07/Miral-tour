import React, { useState, useEffect } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Button, Select } from "antd";
import DoneIcon from "@mui/icons-material/Done";
import { ShoppingCart } from "@mui/icons-material";
import axios from "axios";
function Guides() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const [languages, setLanguages] = useState([]);
  const [guides, setGuides] = useState([]);
  useEffect(() => {
    // Fetch both tour packages and categories data
    axios
      .all([
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/guides`),
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/languages`),
      ])
      .then(
        axios.spread((guidesRes, languagesRes) => {
          setGuides(guidesRes.data);
          setLanguages(languagesRes.data);
          //  setLoading(false);
        })
      )
      .catch((error) => {
        console.error("An error occurred:", error);
        //  setLoading(false);
      });
  }, []);
  // console.log(guides);
  // console.log(languages);
  return (
    <div className="guides">
      <div className="guides_filter">
        <div className="this_wrapper">
          <p>Filter:</p>
          <div className="filter">
            <Select
              style={{ width: "100px" }}
              value={"Select"}
              options={languages.map((language) => ({
                label: language.name_en,
                value: language.value,
              }))}
            />
          </div>
        </div>
      </div>
      <div className="guides_wrapper">
        {guides &&
          guides.length &&
          guides.map((guide) => (
            <div className="guide">
              <div className="guide_wrapper">
                <div className="guide_image">
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/guide/${guide.image}`}
                    alt="Guide Tourism"
                  />
                </div>
                <div className="guide_about">
                  <div className="guide_name">
                    <h3>{guide.name_en}</h3>
                    <span className="is_from">{guide.location_en}</span>
                  </div>
                  <div className="description">
                    <p className="guide_slogan">
                      <i>{guide.moto_en}</i>
                    </p>
                  </div>
                  <div className="guide_rating">
                    <div className="rating_wrapper">
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                    </div>
                  </div>
                  <div className="guide_languages">
                    <p>
                      {guide.languages.map((language) => (
                        <span>
                          <DoneIcon />
                          {language.language_en}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="guide_price">
                    <div className="price_wrapper">
                      <div className="add_to_cart">
                        <Button>
                          {" "}
                          Add to cart <ShoppingCart />
                        </Button>
                      </div>
                      <div className="price">
                        <p>$ {guide.price}/h</p>
                        {/* <Button>Book</Button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Guides;
