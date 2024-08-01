import React from 'react'
import { abayas } from '../assets/utils/environments'
import Accessories from '../components/Accessories'
import Comments from '../components/Comments'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Instagram from '../components/Instagram'
import Navbar from '../components/Navbar'
import PhotoGallery from '../components/PhotoGallery'
import UnderHeader from '../components/UnderHeader'
import Shoes from '../components/Shoes'
import Catalog from '../components/Catalog'
import VideoGallery from '../components/VideoGallery'
import PopUpFrom from '../components/PopUpFrom'
import { useTranslation } from 'react-i18next'
import icon from '../assets/images/under header/blogIcon-uh.svg'

const BySohibaAbayas = () => {

  const {t} = useTranslation()
  
  const body_text = (t("abayas_boutique_page.under_header.body_text",{icon:icon}))
  const head_text = (t("abayas_boutique_page.under_header.head_text"))

  const uhText = {
    body_text,
    head_text
  }


  return (
    <div className='abayas'>
      <PopUpFrom/>
      <Navbar pageName={abayas} />
        <Header text pageName={'abayas'} 
        mainText={t("abayas_boutique_page.header")} />
        <UnderHeader page={ abayas } orderedBlog={true} text={uhText} />
        <PhotoGallery />
        <Catalog />
        <Shoes />
        <Accessories />
        <VideoGallery/>
        <Instagram/>
        <Comments />
        <Footer />
    </div>
  )
}

export default BySohibaAbayas