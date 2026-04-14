import React from 'react'
import TopBanner from '../components/TopBanner'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        <TopBanner></TopBanner>
        <Header></Header>
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
