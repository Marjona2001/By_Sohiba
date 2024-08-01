import React from 'react'
import phoneIcon from '../../assets/icons/phone.svg' 
const PhoneNumber = ({number, text, styleName, icon}) => {

  return (
    <a className={styleName} href={`tel:${number}`}>
      {icon ? <><img className='phoneIcon' src={phoneIcon} alt="" /> {text}</> : text }
    {/* {text} */}
    </a>
  )
}

export default PhoneNumber