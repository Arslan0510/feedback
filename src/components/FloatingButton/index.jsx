import React from "react";
import "./style.css";

const FloatingButton = ({ icon, mainStyle, onPress }) => {
  return (
    <div className={mainStyle}>
      <button onClick={onPress} className={`fa ${icon} fa-lg my-float`} />
    </div>
  );
};

export default FloatingButton;
