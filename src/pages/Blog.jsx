import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Blog() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem" ,color:"white"}}>
        <h2>Our Blog</h2>
        <p>
          Stay updated with the latest trends, insights, and stories from the steel industry and supply chain.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
