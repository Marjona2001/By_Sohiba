import React from 'react'
import Comments from '../components/Comments'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Instagram from '../components/Instagram'
import Navbar from '../components/Navbar'
import VideoGallery from '../components/VideoGallery'
import UnderHeader from '../components/UnderHeader'
import { weddings } from '../assets/utils/environments'
import Catalog from '../components/Catalog'
import PopUpFrom from '../components/PopUpFrom'
import { useTranslation } from 'react-i18next'
import logo from '../assets/images/logo.png'

const BySohibaWeddings = () => {

  const {t} = useTranslation()

  const body_text = (t("weddings_page.under_header.body_text"))
  const head_text = (t("weddings_page.under_header.head_text",
  {logo:logo}))

  const uhText = {
    body_text,
    head_text
  }



  return (
    <div className='weddings'>
      <PopUpFrom/>
        <Navbar pageName={weddings} />
        <Header text pageName={'weddings'} 
        mainText={t("weddings_page.header")}  />
        <UnderHeader page={ weddings } orderedBlog={true} text={uhText} />
        <Catalog/>
        <VideoGallery />
        <Instagram/>
        <Comments />
        <Footer />      
    </div>
  )
}

export default BySohibaWeddings