import React from 'react'

const Location = ({text,styleName,icon}) => {
  return (
    <p className={styleName}>{icon ? icon : ''}{text}</p>
  )
}

export default Location