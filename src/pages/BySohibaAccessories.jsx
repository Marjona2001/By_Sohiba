import React from 'react'
import { useTranslation } from 'react-i18next'
import { accessories } from '../assets/utils/environments'
import Accessories from '../components/Accessories'
import Comments from '../components/Comments'
import Footer from '../components/Footer'
import Instagram from '../components/Instagram'
import Navbar from '../components/Navbar'
import PopUpFrom from '../components/PopUpFrom'
import UnderHeader from '../components/UnderHeader'
import VideoGallery from '../components/VideoGallery'

const BySohibaAccessories = () => {
  const {t} = useTranslation()

  
  const body_text = (t("accessories_page.under_header.body_text"))
  const head_text = (t("accessories_page.under_header.head_text"))


  const uhText = {
    body_text,
    head_text
  }
  
  return (
    <div className='accessories'>
      <PopUpFrom/>
        <Navbar pageName={accessories} />
        <UnderHeader page={ accessories } orderedBlog={true} text={uhText} />
        <Accessories />
        <VideoGallery />
        <Instagram/>
        <Comments />
        <Footer />
    </div> 
  )
}

export default BySohibaAccessories