import React from 'react'
import image1 from '../../assets/images/image_1.png'
import image2 from '../../assets/images/image_2.png'
import image3 from '../../assets/images/image_3.png'
import image4 from '../../assets/images/image_4.png'
import { useTranslation } from 'react-i18next'


const PhotoGallery = () => {
  const {t} = useTranslation();
  return (
    <div className='photo_gallery'>
        <h1>{t('abayas_boutique_page.photogallery')}</h1>
        <div className="images">
            <img src={image1} alt="abayas" />
            <img src={image2} alt="abayas" />
            <img src={image3} alt="abayas" />
            <img src={image4} alt="abayas" />
        </div>
    </div>
  )
}

export default PhotoGallery