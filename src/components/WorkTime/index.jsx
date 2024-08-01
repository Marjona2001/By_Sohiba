import React from 'react'

const WorkTime = ({text, styleName, icon }) => {

//   const icona = (color) => {
//     return <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" 
//     fill='currentColor' className={`bi bi-globe2 ${color}`} 
//     viewBox="0 0 16 16">
//   </svg>
// }

  return (
    <p className={styleName}>
      {icon}
      {text}
      </p>
  )
}

export default WorkTime;