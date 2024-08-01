// import React,{useEffect} from 'react'
// import { home } from '../assets/utils/environments'
import HeaderText from '../HeaderText';
import Video from '../Video';


const Header = (props) => {
  const {text, pageName,mainText} = props

  return (
    <div className='header'>{
      text ?
        <HeaderText name={pageName ? pageName : ''} mainText={mainText} />
        :
        <Video />
    }</div>
  )
}

export default Header