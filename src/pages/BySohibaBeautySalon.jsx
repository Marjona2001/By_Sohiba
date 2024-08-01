import React from 'react'
import Comments from '../components/Comments'
import Footer from '../components/Footer'
import Instagram from '../components/Instagram'
import VideoGallery from '../components/VideoGallery'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import UnderHeader from '../components/UnderHeader'
import { beautySalon } from '../assets/utils/environments'
import PhotoGallery from '../components/PhotoGallery'
import PopUpFrom from '../components/PopUpFrom'
import { useTranslation } from 'react-i18next'

const BySohibaBeautySalon = () => {

  const {t} = useTranslation()

  const body_text = (t("beauty_salon_page.under_header.body_text"))
  const head_text = (t("beauty_salon_page.under_header.head_text"))


  const uhText = {
    body_text,
    head_text
  }


  return (
    <div className='beauty_salon'>
      <PopUpFrom/>
        <Navbar pageName={beautySalon} />
        <Header text pageName={'beautySalon'} 
        mainText={t("beauty_salon_page.header")}/>
        <UnderHeader page={ beautySalon } text={uhText} />
        <VideoGallery />
        <PhotoGallery />
        <Instagram/>
        <Comments />
        <Footer />
    </div>
  )
}

export default BySohibaBeautySalon