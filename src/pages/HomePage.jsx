import React from 'react'
import Brands from '../components/Brands'
import Comments from '../components/Comments'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Instagram from '../components/Instagram'
import Navbar from '../components/Navbar'
import {home} from '../assets/utils/environments'
import PopUpFrom from '../components/PopUpFrom'


const HomePage = () => {
  return (
    <div className='home'>
      <PopUpFrom/>
        <Navbar pageName={ home } />
        <Header text={false} pageName={home} />
        <Brands /> 
        <Instagram/>
        <Comments/>
        <Footer />
    </div>
  )
}

export default HomePage;