import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function BackToTop() {
  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="backToTop">
      {BackToTopButton && (
        <button
          style={{
            position: "fixed",
            cursor: "pointer",
            bottom: "90px",
            width: "60px",
            height: "60px",
            right: "25px",
            transition: "1s",
            color: "#fff",
            fontSize: "25px",
            borderRadius: "50%",
            background: "#4ee16e",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1000",
          }}
          onClick={scrollUp}
          className="backToTopButton"
        >
          <KeyboardArrowUpIcon
            style={{
              fontSize: "35px",
            }}
          />
        </button>
      )}
    </div>
  );
}

export default BackToTop;
