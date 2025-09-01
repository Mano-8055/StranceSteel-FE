import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
// import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";
import StepsSection from "../components/StepsSection";
import BrandGrid from "../components/BrandGrid";
import HashtagsteelsEmpowering from "../components/HashtagsteelsEmpowering";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";

// Images
import tenmm from "../assets/Images/suryadev10mm.jpeg";
import eightmm from "../assets/Images/suryadev8mm.jpeg";
import sixteenmm from "../assets/Images/suryadev16mm.jpeg";

// AOS for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation speed (ms)
      once: true       // Animate only once
    });
  }, []);

  return (
    <>
      <Navbar />
      <main style={{  color:"white"}}>
        <h2>This is the About Us page</h2>
        <p>
          Welcome to Strance Steels! We are India's most trusted steel supply
          network, connecting buyers directly to mills with transparency and
          efficiency.
        </p>
      </main>

      {/* Hero / Banner */}
      <div data-aos="fade-up">
        <Banner />
      </div>

      {/* Product Grid */}
      <div data-aos="zoom-in">
        <ProductGrid />
      </div>

      {/* Steps Section */}
      <div data-aos="fade-right">
        <StepsSection />
      </div>

      {/* Brand Grid */}
      <div data-aos="fade-left">
        <BrandGrid />
      </div>

      {/* Empowering Section */}
      <div data-aos="flip-up">
        <HashtagsteelsEmpowering />
      </div>

      {/* Testimonials */}
      <div data-aos="fade-up">
        <TestimonialSection />
      </div>

      {/* Footer */}
      <div data-aos="fade">
        <Footer />
      </div>
    </>
  );
}

export default Home;
