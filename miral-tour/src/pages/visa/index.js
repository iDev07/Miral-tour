import React from "react";
import { Container } from "@mui/material";
function Visa() {
  return (
    <div className="Visa pt_100">
      <div className="visa_wrapper">
        <div className="background_section">
          <div className="background_wrapper">
            <Container>
              <div className="content_grid">
                <div className="intro">
                  <h2>
                    Uzbekistan visa; transit visa; e-visa, visa-free entry to
                    Uzbekistan.
                  </h2>
                  <p>
                    Uzbekistan is a country of oriental flavor, ready to offer a
                    lot, and we are ready to fill your visit with a unique
                    combination of productivity and relaxation.
                  </p>
                  <a href="#contactus">Contact us</a>
                </div>
                {/* <div className="consultant">
                    <img src="img/consultant.png" />
                  </div> */}
              </div>
            </Container>
          </div>
        </div>
        <div className="visa_countries"></div>
      </div>
    </div>
  );
}

export default Visa;
