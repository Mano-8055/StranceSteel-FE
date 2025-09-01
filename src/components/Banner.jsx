import React from "react";
import "./banner.css";
import banner from "../assets/Images/Banner.jpg";

function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="banner-text">
        <h2>INDIA’S MOST TRUSTED STEEL SUPPLY NETWORK.</h2>
        <p>Direct from mills. Driven by buyers’ trust.</p>
      </div>
    </div>
  );
}

export default Banner;
