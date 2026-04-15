import React from "react";
import ProductDetails from "../components/ProductDetail/ProductDetails";
import TopBanner from "../components/TopBanner";
import Header from "../components/Header";
import RelatedItems from "../components/ProductDetail/RelatedItems";
import Footer from "../components/Footer/Footer";

const ProductDetailPage = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <Header></Header>
      <ProductDetails></ProductDetails>
      <RelatedItems></RelatedItems>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetailPage;
