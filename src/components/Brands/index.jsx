import React from "react";
import "../../style/main.css";
import {Link} from 'react-router-dom'
import sohibaLogo from "../../assets/images/logo.png";
import womanPic from "../../assets/images/weddings.png";
import womanPic2 from "../../assets/images/beauty_salon.png";
import womanPic3 from "../../assets/images/abaya.png";
import womanPic4 from "../../assets/images/accessories.png";
import {useTranslation} from 'react-i18next';


const Brands = () => {
  const {t} = useTranslation()
  return (
    <div className="brands">
      <h2>
        <span className="text_logo">BYSOHIBA</span> {t('home_page.brands.brands_text')}
      </h2>


      <div className="card_brands">
        <div className="main_card">
          <Link to={'/Weddings'} className="cards">
            <img className="card_img" src={womanPic} alt="woman" />
            <div className="card_text">
              <img src={sohibaLogo} alt="sohiba" />
              <h3>WEDDINGS</h3>
              <h4>{t('home_page.brands.card_weddings')}</h4>
            </div>
          </Link>
          <Link to='/BeautySalon' className="cards">
            <img className="card_img" src={womanPic2} alt="woman" />
            <div className="card_text">
              <img src={sohibaLogo} alt="sohiba" />
              <h3>BEAUTY SALON</h3>
              <h4>{t('home_page.brands.card_beauty_salon')}</h4>
            </div>
          </Link>
        </div>
        <div className="main_card">
          <Link to='/Abayas' className="cards">
            <img className="card_img" src={womanPic3} alt="woman" />
            <div className="card_text">
              <img src={sohibaLogo} alt="sohiba" />
              <h3>ABAYAS</h3>
              <h4>{t('home_page.brands.card_abayas_boutique')}</h4>
            </div>
          </Link>
          <Link to='/Accessories' className="cards align-items-center  flex-row">
            <img className="card_img" src={womanPic4} alt="woman" />
            <div className="card_text">
              <img src={sohibaLogo} alt="sohiba" />
              <h3>ACCESSORIES</h3>
              <h4>{t('home_page.brands.card_accessories')}</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brands;
