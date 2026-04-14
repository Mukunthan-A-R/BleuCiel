import React from 'react'
import TopBanner from '../components/TopBanner'
import Header from '../components/Header'
import AddBannerScroller from '../components/HomePage/AddBannerScroller'

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
