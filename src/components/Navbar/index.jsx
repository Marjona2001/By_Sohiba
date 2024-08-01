import React, {useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import Location from '../Location'
import Messanger from '../Messanger'
import PhoneNumber from '../PhoneNumber'
import WorkTime from '../WorkTime'
import {useTranslation} from 'react-i18next'
import { logos } from '../../data/logos'
import { accessories } from '../../assets/utils/environments'

const Navbar = ({pageName}) => {

  const {t,i18n} = useTranslation()

  const [logo, setLogo] = useState(null);
  const [bgWhite, setBgWhite] = useState('');

  useEffect(()=>{
    logos.filter(logo => logo.pageName === pageName && setLogo(logo))
    if (pageName === accessories) {
      setBgWhite('bg-white')
    }else{
      setBgWhite('')
    }
  },[pageName])


  const [burger,setBurger] = useState()
  const [navScroll,setNavScroll] = useState(false)

  const [dropActive,setDropActive] = useState(false)

  const collapseToggle = ({pageName}) => {
    !burger ? setBurger('burger-col') : setBurger('')
  }

  const nav = useRef()

  useEffect(()=>{
    const handleScroll = () => { 
      const scrollY = window.scrollY
      if(scrollY >= 20){
        setNavScroll(true)
        nav.current.classList.add('scrollNav')
      }
      else{
        setNavScroll(false)
        nav.current.classList.remove('scrollNav')
      }

      if(dropActive && scrollY){
        setDropActive(false)
      }
    } 

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[dropActive])


  const langs =[
    {
      lang:'uz',
      full:"O'zbekcha",
      id:1
    },
    {
      lang:'ru',
      full:"Русский",
      id:2
    },
    
  ]
    

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <nav 
    ref={nav}
     className={ (burger ? `${burger}` : (bgWhite + ` main-nav `)) }>

      <div className="sm-nav-header">
          <Link to={'/'} className="brand-sm">
          <img src={burger || navScroll ? 
          (logo?.scrollLogo || logo?.logo ) : logo?.logo} alt="" />
          </Link>

          <button onClick={collapseToggle} className="nav-burger">
            {
              !burger ?
              <svg xmlns="http://www.w3.org/2000/svg" width="36" 
              height="36" fill={navScroll ? '#000' : '#fff'} className="bi bi-list" 
              viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 
                0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 
                0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 
                1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg> : 
              <span className='nav-close'>&#10006;</span>
            }
          </button>
          </div>

        <div className="nav-media">

          <Link to={'/Weddings'} className='nav-link'>
          {t('navbar.weddings')}
          </Link>
          <Link to={'/Abayas'} className='nav-link link-l'>
          {t('navbar.abayas-boutique')}
          </Link>
          <Link to={'/'} className="brand-md">
          <img src={navScroll ? (logo?.scrollLogo || logo?.logo ) : logo?.logo} alt="" />
          </Link>
          <Link to={'/BeautySalon'} className='nav-link'>
          {t('navbar.beauty-salon')}
          </Link>
          <Link to={'/'} className="brand">
          <img src={navScroll ? 
          (logo?.scrollLogo || logo?.logo ) : logo?.logo} alt="" /> 
          </Link>
          <Link to={'/Accessories'}  className='nav-link link-md-r'>
          {t('navbar.accessories')}
          </Link>
          <PhoneNumber 
          number={+998971018880} 
          text={'+998 97 101 88-80'}
          styleName={'sm-d-none link-r nav-link'}/>
          

          <div className="sm-d-none dropdown" onClick={()=>setDropActive(!dropActive)}>
            <div className="drop-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-globe2 glob-icon" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
            </svg>
            {i18n.language} 
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path xmlns="http://www.w3.org/2000/svg" className='lang-chevron' d="M6.23331 7.71135C6.11324 7.8599 5.88676 7.8599 5.76669 7.71135L0.332742 0.988585C0.17417 0.792403 0.313801 0.499999 0.566056 0.499999L11.4339 0.5C11.6862 0.5 11.8258 0.792403 11.6673 0.988585L6.23331 7.71135Z" fill="#CCC18E"/>
            </svg>
            </div>
            <div className={"drop-menu" + 
            (dropActive ? ' active' : " inactive")}>
              
              {langs.map(langs => (
                  i18n.language !== langs.lang &&
                  <div className="menu-item"  key={langs.id} onClick={()=>changeLang(langs.lang)}  >
              <svg xmlns="http://www.w3.org/2000/svg" 
              width="14" height="14" fill="currentColor" 
              className="bi bi-globe2 glob-icon" viewBox="0 0 16 16">

                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                </svg> <span>{langs.lang}</span>
                </div>
                ))}
            </div>
          </div>

        </div>
        <div className="sm-nav-footer">
          <div className="nav-footer-left">

            <div className="btns">              
              {
                langs.map(language => (
                  <button key={language.id} className={i18n.language 
                    !== language.lang ? 'nav-uz-btn' 
                    : 'nav-ru-btn'} 
                    disabled={ i18n.language === language.lang ? true
                      : false }
                      onClick={()=>changeLang(language.lang)}
                      >
                    {language.full}
                    </button>
                ))
              }

            </div>

            <div className="messangers">
              <Messanger 
              text={'Instagram'} 
              styleName={'messanger mess-instagram'}
              link={'https://www.instagram.com'} />
              <Messanger 
              text={'Telegram'} 
              styleName={'messanger mess-telegram'}
              link={'https://www.telegram.org'} />
              <Messanger 
              text={'Tik tok'} 
              styleName={'messanger mess-tiktok'}
              link={'https://www.tiktok.com'} />
            </div>

          </div>
          <div className="nav-footer-right">
            <WorkTime 
            text={'Har kuni 10:00 - 19:00'} 
            styleName={'workTime-n'} 
            icon={true} />
            <div className="r-center">
            <Location text={'Toshkent, Laylito’gon ko’chasi 97'} 
            styleName={'location-n'}
            />
            <PhoneNumber number={+998971018880} text={'+998 97 101 88-80'}
            styleName={'phone-number-n'}
            />
            </div>
            <Location text={'Toshkent, Laylito’gon ko’chasi 97'} 
            styleName={'location-n'}
            />
            <PhoneNumber number={+998971018880} text={'+998 97 101 88-80'}
            styleName={'phone-number-n'}
            />
          </div>
        </div>

    </nav>
  )
}

export default Navbar
