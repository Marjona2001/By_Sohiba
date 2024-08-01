import React, {useState, useEffect} from 'react'
import chevron from '../../assets/images/Vector 5.svg'
import header from '../../assets/header.js'
import PhoneNumber from '../PhoneNumber/index.jsx';
import "./styled.scss";

const HeaderText = ({name,mainText}) => {

    const [url, setUrl] = useState()


    useEffect(()=>{

        header.filter(page => page.name === name).forEach(data => {setUrl(data.url) })
    },[name])

  return (
  <div className='header-img' style={{
    backgroundImage: `url(${url})`
  }} >

    <div className="content">
      <div className='text' dangerouslySetInnerHTML={{__html: mainText}}></div>
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
            </svg>Toshkent, Mirzo G`olib ko’chasi 1</div>

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
                Har kuni 10:00 - 19:00
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

export default HeaderText