import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import TopBanner from "./components/TopBanner";
import ProductDetailPage from "./pages/ProductDetailPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product-details" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
