import React from 'react'

const Messanger = ({text, link, styleName}) => {
  return (
    <a className={styleName} href={link} target='_blank' rel="noreferrer">
    {text}
    </a>
  )
}

export default Messanger