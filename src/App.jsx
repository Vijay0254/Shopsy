import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import LoweNav from './Components/LoweNav'
import Hero from './Components/Hero'
import Products from './Components/Products'
import Bestproducts from './Components/Bestproducts'
import Banner from './Components/Banner'
import Subscribe from './Components/Subscribe'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import Popup from './Components/Popup'

const App = () => {
  const [orderPopup,setorderPopup] = useState(false)
  return (
    <>
      <Navbar orderPopup={orderPopup} setorderPopup={setorderPopup} />
      <LoweNav />
      <Hero orderPopup={orderPopup} setorderPopup={setorderPopup} />
      <Products />
      <Bestproducts orderPopup={orderPopup} setorderPopup={setorderPopup} />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setorderPopup={setorderPopup} />
    </>
  )
}

export default App