import React from "react";
import Navbar from "../components/Navbar";
import EnquireForm from "../components/Enquiry/EnquireForm";
import Footer from "../components/Footer";

function Enquiry() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem", color:"white"}}>
        <h2>This is the About Us page</h2>
        <p>
          Welcome to Strance Steels! We are India's most trusted steel supply
          network, connecting buyers directly to mills with transparency and
          efficiency.
        </p>
      </main>
      <EnquireForm/>
      <Footer />
    </>
  );
}

export default Enquiry;
