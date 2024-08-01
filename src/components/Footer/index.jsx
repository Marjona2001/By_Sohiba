import React, {useState} from 'react';
import Location from '../Location';
import PhoneNumber from '../PhoneNumber';
import WorkTime from '../WorkTime';
import Messanger from '../Messanger';
import logo from '../../assets/images/logo.png'
import { useTranslation } from 'react-i18next';


const Footer = () => {
  
    const [showContents, setShowContents] = useState(1);
    const {t} = useTranslation()
    const handleTab = (e) => {
      setShowContents(e);
    }

  return (
    <div className='footer'>
      <h1>{t('home_page.footer.footer_head_text')}</h1>       
      <div className="address-footer"> 
        <div className="map">
          <div className={showContents === 1 ? "map fade show" : "map fade"}>
            <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A1ef0b23b752f297cdf3731304b96c9bbc6aac814bdb52beb51ee3a71961c71d5&amp;source=constructor" frameBorder="0"></iframe>
          </div>
          <div className={showContents === 2 ? "map fade show" : "map show" && "map fade"}>
            <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3Ac8d6e941280b4be7e55035eff5b5ee7192dff295bc03de637758b823ba3707a2&amp;source=constructor" frameBorder="0"></iframe>
          </div>
        </div>
        <div className="footer-components">
          <div className="footer-btns">
            <button className={showContents === 1 ? "footer-btn active" : "footer-btn"} onClick={()=>handleTab(1)}>
            {t('home_page.footer.footer_btn_1')}
            </button>
            <button className={showContents === 2 ? "footer-btn active" : "footer-btn"} onClick={()=>handleTab(2)}>
            {t('home_page.footer.footer_btn_2')}
            </button>
          </div>
          <div className={showContents === 1 ? "footer-content fade show" : "footer-content fade"}>
            <div className="footer-location">
              <h6>{t('home_page.footer.footer_location_text')}</h6>
              <Location text={t('home_page.footer.address_chorsu_1')} />
              <Location text={t('home_page.footer.address_chorsu_2')} />
            </div>
            <div className="footer-time">
              <h6>{t('home_page.footer.footer_work_time_text')}</h6>
              <WorkTime styleName={'footer-work_time'} text={`Без выходных 10:00 - 19:00`} />
            </div>
            <div className="footer-phone">
              <h6>{t('home_page.footer.footer_phone_number_text')}</h6>
              <PhoneNumber 
              number={+998971018880} styleName={'footer-phone_number'} text={`+998 97 101 88-80`} />
            </div>
            <div className="messangers">
              <Messanger styleName={'footer-messangers'} text={'Instagram'} link={"https://www.instagram.com/sohiba_wedding/"}/>
              <Messanger styleName={'footer-messangers'} text={'Telegram'} link={"https://www.instagram.com/abdullokh_2303/"}/>
              <Messanger styleName={'footer-messangers'} text={'Pinterest'} link={"https://www.instagram.com/abdullokh_2303/"}/>
            </div>
          </div>
          <div className={showContents === 2 ? "footer-content fade show" : "footer-content show" && "footer-content fade"}>
            <div className="footer-location">
              <h6>{t('home_page.footer.footer_location_text')}</h6>
              <Location text={t('home_page.footer.address_beruniy_1')} />
              <Location text={t('home_page.footer.address_beruniy_2')} /> 
            </div>
            <div className="footer-time">
              <h6>{t('home_page.footer.footer_work_time_text')}</h6>
              <WorkTime styleName={'footer-work_time'} text={`Без выходных 10:00 - 19:00`} />
            </div>
            <div className="footer-phone">
              <h6>{t('home_page.footer.footer_phone_number_text')}</h6>
              <PhoneNumber styleName='footer-phone_number'
              number={+998971018880} text={'+998 97 101 88-80'} />
            </div>
            <div className="messangers">
              <Messanger styleName={'footer-messangers'} text={'Instagram'} link={"https://www.instagram.com/sohiba_wedding/"}/>
              <Messanger styleName={'footer-messangers'} text={'Telegram'} link={"https://www.instagram.com/abdullokh_2303/"}/>
              <Messanger styleName={'footer-messangers'} text={'Pinterest'} link={"https://www.instagram.com/abdullokh_2303/"}/>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
          <div className="footer-end-details">
            <p>
            {t('home_page.footer.footer_end_text')}
            </p>
            <img src={logo} alt="by Sohiba" />
          </div>
        </div>
    </div>
  )
}

export default Footer