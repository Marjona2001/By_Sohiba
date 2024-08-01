import React from 'react'
import { shoes } from '../../data/catalog'
import { Swiper, 
    SwiperSlide
 } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next'

const Shoes = () => {
    const {t} = useTranslation();
  return (
    <div className='shoes component-swiper'>
        <h1>{t('abayas_boutique_page.shoes')}</h1>
        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={2}
            loop={true}    
            modules={[ Pagination, Navigation]}    
            navigation
            pagination={{ 
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className  +'">' + ([index + 1]) + "</span>";
                },
            }}
            className="content-swiper"
            breakpoints={{
                1300: {
                    minWidth: 1405,
                    slidesPerView: 5
                },
                964: {
                    minWidth: 964,
                    slidesPerView: 4
                },
                426: {
                    minWidth: 426,
                    slidesPerView: 3
                },
                320: {
                    minWidth: 320,
                    slidesPerView: 2
                }
            }}
            >
                {
                shoes.map( (img, i)  => (
                    i < 10 &&
                    <SwiperSlide key={img.id}>
                        <img src={img.pic} alt="" />
                        <img className='hover-imgs' src={img.pic2} alt="" />
                    </SwiperSlide>
                ))
            }
            
        </Swiper>
    </div>
  )
}

export default Shoes