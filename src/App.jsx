import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import TopBanner from "./components/TopBanner";
import ProductDetailPage from "./pages/ProductDetailPage";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProductSearch from "./pages/ProductSearch";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<ProductSearch />} />
          <Route path="/product-details" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
