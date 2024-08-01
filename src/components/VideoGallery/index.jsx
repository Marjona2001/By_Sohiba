import React, {useEffect, useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { instaMedia} from '../../redux/slice/instaSlice'
import { Swiper, 
    SwiperSlide
 } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

const VideoGallery = () => {
    const data = useSelector(data => data.insta.instaMedias.videos) 

    // console.log(data);
    const {t} = useTranslation();
    const [active, setActive] = useState(false);
    const videos = useRef()
    const [urlVideos, setUrlVideos] = useState();

    const dispatch = useDispatch()
    
    useEffect(()=>{      
        dispatch(instaMedia())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const popUp = (url) => {
        setActive(true);
        setUrlVideos(url)
        document.body.style.overflow = 'hidden'
    }
    
    const closePopup = () => {
        if(active) {
            setActive(!active)
            document.body.style.overflow = 'unset'
        }
    } 
  return (
    <div className='video-gallery'>
        <h1>{t('weddings_page.videogallery.head_text')}</h1>
        <Swiper
        
            slidesPerView={5}
            spaceBetween={14}
            slidesPerGroup={2}
            loop={true}    
            modules={[ Autoplay, Pagination, Navigation]}    
            autoplay={{
                delay: 3600,
                disableOnInteraction: false,
            }}
            navigation
            pagination={{ 
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className  +'">' + ([index + 1]) + "</span>";
                },
            }}
            className="video-swiper"
            breakpoints={{
                1500: {
                    minWidth: 1500,
                    slidesPerView: 5
                },
                1405: {
                    minWidth: 1405,
                },
                1360: {
                    minWidth: 1360,
                },
                1300: {
                    minWidth: 1300,
                    slidesPerView: 5
                },
                1200: {
                    minWidth: 1200,
                    slidesPerView: 5
                },
                1025: {
                    minWidth: 1025,
                    slidesPerView: 4
                },
                964: {
                    minWidth: 964,
                    slidesPerView: 4
                },
                708: {
                    minWidth: 708,
                    slidesPerView: 3
                },
                426: {
                    minWidth: 426,
                    slidesPerView: 2
                },
                320: {
                    minWidth: 320,
                    slidesPerView: 2
                }
            }}
            >
                {
                    data?.map( (post, i) =>(
                        i < 10 &&
                        <SwiperSlide key={post.id}>
                        <video className='insta-video' src={post.media_url} onClick={() => popUp(post.media_url)} alt=""/>
                        <div className="overlay"><span className='open-video'  onClick={() => popUp(post.media_url)} > &#9658; </span></div>       
                        </SwiperSlide>
                    ))
            }
            
        </Swiper>
        <div className={`popup ${active ? 'd-block' : 'd-none'}`}  onClick={closePopup}>
            <video className={active ? 'd-block' : 'd-none'}  muted={true} ref={videos} src={urlVideos} alt="" controls/>
        </div>
    </div>
  )
}

export default VideoGallery