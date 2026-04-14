import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './pages/About'
import TopBanner from './components/TopBanner'

const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
