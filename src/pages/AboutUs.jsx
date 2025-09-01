import React from "react";
import Navbar from "../components/Navbar";
import AboutStrancesteel from "../components/About/AboutStrancesteel";
import StrancesteelEdge from "../components/About/StrancesteelEdge";
import StrancesteelInnovation from "../components/About/StrancesteelInnovation";
// import DynamicCircleFrame from "../components/About/RotatingCircleImage";
import StrancesteelBuyerHero from "../components/About/StrancesteelBuyerHero";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      <Navbar />
      
      <main style={{ padding: "2rem",color:"white" }}>
        <h2>This is the About Us page</h2>
        <p>
          Welcome to Strance Steels! We are India's most trusted steel supply
          network, connecting buyers directly to mills with transparency and
          efficiency.
        </p>
      </main>
      <AboutStrancesteel/>
      <StrancesteelEdge/>
      <StrancesteelInnovation/>
      {/* <DynamicCircleFrame/> */}
      <StrancesteelBuyerHero/>
      <Footer />
    </>
  );
}

export default AboutUs;

