import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Button } from "antd";
function Guides() {
  return (
    <div className="guides">
      <div className="guides_filter">We can add Filter for guides</div>
      <div className="guides_wrapper">
        <div className="guide">
          <div className="guide_wrapper">
            <div className="guide_image">
              <img src="img/guide1.jpg" alt="Guide Tourism" />
            </div>
            <div className="guide_about">
              <div className="guide_name">
                <h3>Iroda Baxriddinovna</h3>
                <span className="is_from">Tashkent, Uzbekistan</span>
              </div>
              <div className="description">
                <p className="guide_slogan">
                  <i>
                    Travelling is not just places, it is living in dreams with
                    open eyes.
                  </i>
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
                  <span>Русский</span>
                  <span>English</span>
                  <span>Italian</span>
                  <span>Uzbek(native)</span>
                </p>
              </div>
              <div className="guide_price">
                <div className="price_wrapper">
                  <div className="read_more">
                    <Button>Add to cart</Button>
                  </div>
                  <div className="price">
                    <p>$ 12/h</p>
                    {/* <Button>Book</Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="guide">
          <div className="guide_wrapper">
            <div className="guide_image">
              <img src="img/guide2.jpg" alt="Guide Tourism" />
            </div>
            <div className="guide_about">
              <div className="guide_name">
                <h3>Mels Hakimov</h3>
                <span className="is_from">Tashkent, Uzbekistan</span>
              </div>
              <div className="description">
                <p className="guide_slogan">
                  <i>
                    Travelling is not just places, it is living in dreams with
                    open eyes.
                  </i>
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
                  <span>Русский</span>
                  <span>English</span>
                  <span>Italian</span>
                  <span>Uzbek(native)</span>
                </p>
              </div>
              <div className="guide_price">
                <div className="price_wrapper">
                  <div className="read_more">
                    <Button>Read more</Button>
                  </div>
                  <div className="price">
                    <p>$ 12/h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="guide">
              <div className="guide_wrapper">
                <div className="guide_image">
                  <img src="img/guide1.jpg" alt="Guide Tourism" />
                </div>
                <div className="guide_about">
                  <div className="guide_name">
                    <h3>Iroda Baxriddinovna</h3>
                    <span className="is_from">Tashkent, Uzbekistan</span>
                  </div>
                  <div className="description">
                    <p className="guide_slogan">
                      <i>
                        Travelling is not just places, it is living in dreams
                        with open eyes.
                      </i>
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
                      <span>Русский</span>
                      <span>English</span>
                      <span>Italian</span>
                      <span>Uzbek(native)</span>
                    </p>
                  </div>
                  <div className="guide_price">
                    <div className="price_wrapper">
                      <div className="read_more">
                        <Button>Read more</Button>
                      </div>
                      <div className="price">
                        <p>$ 12/h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
      </div>
    </div>
  );
}

export default Guides;
