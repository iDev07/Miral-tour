import React from "react";
import styles from "./make_trip.module.scss";

const ShowHideDiv = ({ isVisible, toggleVisibility, hideModal }) => {
  const handleToggle = () => {
    toggleVisibility();
    hideModal(); // Call hideModal when the toggle button is clicked
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Visibility</button>
      <div className={`${styles.hiddenDiv} ${isVisible ? "" : styles.hidden}`}>
        {/* Your content goes here */}
        <p>This is the content that will be shown or hidden.</p>
      </div>
    </div>
  );
};

export default ShowHideDiv;
