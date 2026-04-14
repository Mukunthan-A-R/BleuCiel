import React from 'react'
import TopBanner from '../components/TopBanner'
import Header from '../components/Header'
import AddBannerScroller from '../components/HomePage/AddBannerScroller'
import BestSellers from '../components/HomePage/BestSellers'
import FeaturedProducts from '../components/HomePage/FeaturedProducts'
import FeatureHighlights from '../components/HomePage/FeatureHighlights'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <TopBanner></TopBanner>
        <Header></Header>
        <div className='w-full  flex items-center justify-center'>
        <div className='px-5 max-w-6xl py-5'>
        <AddBannerScroller></AddBannerScroller>
        </div>

        </div>

        <BestSellers></BestSellers>
        <FeaturedProducts></FeaturedProducts>

        <FeatureHighlights></FeatureHighlights>
        
          <Footer></Footer>
    </div>
  )
}

export default Home
