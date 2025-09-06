import React from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all page components
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Enquiry from "./pages/Enquiry";
import Blog from "./pages/Blog";
import BecomeSeller from "./pages/BecomeSeller";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/become-seller" element={<BecomeSeller />} />
      </Routes>
    </Router>
  );
}

export default App;


// import React from "react";
// import "./app.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Import all page components
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Enquiry from "./pages/Enquiry";
// import Blog from "./pages/Blog";
// import BecomeSeller from "./pages/BecomeSeller";
// import ProductDetails from "./pages/product/ProductDetails"; // Import the new component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/enquiry" element={<Enquiry />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/become-seller" element={<BecomeSeller />} />

//         {/* This is the new route for the product details page */}
//         <Route path="/product-details/:productId" element={<ProductDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
