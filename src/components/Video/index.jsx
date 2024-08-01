import React, { useState, } from 'react'
import videoBG from '../../assets/video/home-alt.mp4'
import play from '../../assets/images/Frame 94.svg'
import chevron from '../../assets/images/Vector 5.svg'
import { useRef } from 'react'
import PhoneNumber from '../PhoneNumber'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { togglePopUp } from '../../redux/slice/popUpSlice'



const Video = () => {
  const [display, setDisplay] = useState(false)
  const {t} = useTranslation()

  const dispatch = useDispatch()


  const video = useRef()

  

const endedVideo = () => {
  setDisplay(false)
}


const popUp = () => {
  video.current.play()

  setDisplay(true)
}

const closeVideo = () => {
  
  const currentTime = video.current.currentTime
  if(currentTime !== 0 ){
    video.current.currentTime = 0
  }
  setDisplay(false)
}

  return (
    <div className='header-video'>

      {/* <PopUpFrom /> */}
      
    <video className='videoBg' src={videoBG} 
    autoPlay={true} loop={true} muted={true} />
    <div className="video" onClick={closeVideo}>
    <span className={display ? 'close' : 'd-none'} 
    onClick={ closeVideo }> &#10006; </span>

    <video 
    ref={video}
    className={display ? 'fullVideo' : 'd-none'}  
    onEnded={()=> display ? endedVideo() : ''}
    src={videoBG} />

    </div>

      <div className="content">
          <div className='text'>
            {t('home_page.header.home_header_text')}
          </div>
          <button className="consultation" onClick={()=> dispatch(togglePopUp(true))} >
            {t('home_page.header.header_btn')}
          <span className="bg-hover"></span>
          </button>
          <button onClick={popUp} className="show_video">
            {t('home_page.header.header_video_btn')} <img src={play} className='play-icon' alt="" />
          </button>
          <div className="md-d-none sm-d-none bottom">

              <div className="location">
              <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" fill="currentColor" 
                className="bi bi-geo-alt icon" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 
                3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 
                1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 
                7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 
                2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 
                0-6 3 3 0 0 0 0 6z"/>
              </svg>
            {t('home_page.header.header_address')}</div>

              <div className="mous">
              <svg xmlns="http://www.w3.org/2000/svg" 
                  width="16" height="16" 
                  fill="currentColor" className="bi bi-mouse mous-icon" 
                  viewBox="0 0 16 16">
                  <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 
                  0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 
                  1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 
                  0 0 0-5-5z"/>
              </svg>
              
              <img src={chevron} className="chevron-icon" alt="" />

              </div>

                <div className="time">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" 
                  height="16" fill="currentColor" className="bi bi-clock icon clock-icon" 
                  viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 
                  2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 
                  1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                  {t('home_page.header.header_work_time')}
                </div>

          </div>
          <div className="d-none md-bottom">

            <PhoneNumber text={'+998 97 101 88-80'} number={'+998971018880'}
            styleName={'s-sm-d-none phoneNumber'}/>

              <div className="md-d-none mous">
              <svg xmlns="http://www.w3.org/2000/svg" 
                  width="16" height="16" 
                  fill="currentColor" className="bi bi-mouse mous-icon" 
                  viewBox="0 0 16 16">
                  <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 
                  0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 
                  1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 
                  0 0 0-5-5z"/>
              </svg>
              
              <img src={chevron} className="chevron-icon" alt="" />

              </div>
              <div className="sm-d-none location">
              <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" fill="currentColor" 
                className="bi bi-geo-alt icon" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 
                3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 
                1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 
                7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 
                2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 
                0-6 3 3 0 0 0 0 6z"/>
              </svg>Toshkent, Mirzo G`olib ko’chasi 1</div>

                <div className="sm-d-none time">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" 
                  height="16" fill="currentColor" className="bi bi-clock icon clock-icon" 
                  viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 
                  2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 
                  1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                  Har kuni 10:00 - 19:00
                </div>

          </div>
      </div>
    </div>
  )
}

export default Video