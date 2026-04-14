import React from 'react'
import TopBanner from '../components/TopBanner'
import Header from '../components/Header'
import AddBannerScroller from '../components/HomePage/AddBannerScroller'

const Home = () => {
  return (
    <div>
        <TopBanner></TopBanner>
        <Header></Header>
        <div className='px-5'>
        <AddBannerScroller></AddBannerScroller>
        </div>
        <p>
            home page
        </p>
            <h1 class="text-3xl font-bold underline">
            Hello world!
            </h1>
    </div>
  )
}

export default Home
