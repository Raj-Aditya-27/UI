import React from "react";
import "../css/HomePage.css";
import img1 from "../images/img1.jpg";

function HomePage() {
  return (
    <div className="frame">
      <div className="left">Left</div>
      <div className="right">
        <img src={img1} alt="Happy girl with oranges" />
      </div>
    </div>
  );
}

export default HomePage;
