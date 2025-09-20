import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ProductGrid from "../../components/ProductGrid"
import LandingPage from "../../components/product/ProductCard"

import ProductList from "../../components/product/ProductList"
import ProductCard from "../../components/product/ProductCard"

export default function ProductDetails(){
  return(
    <>
      <Navbar />
      <main style={{ padding: "2rem" ,color:"transparent"}}>
        <h2>Our Blog</h2>
        <p>
          Stay updated with the latest trends, insights, and stories from the steel industry and supply chain.
        </p>
      </main>
      <ProductList />
      

      
      
      <Footer />
    </>
  )
}