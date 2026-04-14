import React from "react";
import TopBanner from "../components/TopBanner";
import Header from "../components/Header";
import AddBannerScroller from "../components/HomePage/AddBannerScroller";
import BestSellers from "../components/HomePage/BestSellers";
import FeaturedProducts from "../components/HomePage/FeaturedProducts";
import FeatureHighlights from "../components/HomePage/FeatureHighlights";
import Footer from "../components/Footer/Footer";
import ExploreProducts from "../components/HomePage/ExploreProducts";
import CategoriesAccordian from "../components/HomePage/CategoriesAccordian";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <Header></Header>
      <div className="w-full flex justify-center">
        <span className="hidden xl:block ">
          <CategoriesAccordian></CategoriesAccordian>
        </span>
        <div className="px-5 max-w-6xl py-5">
          <AddBannerScroller></AddBannerScroller>
        </div>
      </div>

      <BestSellers></BestSellers>
      <FeaturedProducts></FeaturedProducts>
      <ExploreProducts></ExploreProducts>

      <FeatureHighlights></FeatureHighlights>
      <Footer></Footer>
    </div>
  );
};

export default Home;
