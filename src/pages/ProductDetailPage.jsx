import React from "react";
import ProductDetails from "../components/ProductDetail/ProductDetails";
import TopBanner from "../components/TopBanner";
import Header from "../components/Header";

const ProductDetailPage = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <Header></Header>
      <ProductDetails></ProductDetails>
    </div>
  );
};

export default ProductDetailPage;
