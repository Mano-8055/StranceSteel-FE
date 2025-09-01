import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Became a seller/HeroSection";
import WhySellStrancesteel from "../components/Became a seller/WhySellStrancesteel";
import VerticalStepper from "../components/Became a seller/VerticalStepper";
import RegisterHero from "../components/Became a seller/RegisterHero";
import Footer from "../components/Footer";

function BecomeSeller() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem" ,color:"white"}}>
        <h2>Our Blog</h2>
        <p>
          Stay updated with the latest trends, insights, and stories from the steel industry and supply chain.
        </p>
      </main>
      <HeroSection/>
      <WhySellStrancesteel/>
      <VerticalStepper/>
      <RegisterHero/>
      <Footer />
    </>
  );
}

export default BecomeSeller;
