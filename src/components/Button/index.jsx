import React from 'react'
import { Link } from 'react-router-dom';
import btnIcon from '../../assets/icons/arrow-short-right.svg'


const Button = ({type,text,styleName,url,icon,disablet, click}) => {
    
    return (
        
            type === 'link' ? 

            <Link to={url} className={styleName} >
            {text}
            </Link>
            : type === 'btn' ? 
            <button className={styleName} onClick={click} >
                {text}
            </button>
            : type === 'href' ?
            <a href={url} className={styleName} 
            target='_blank' rel="noreferrer">
                {text} {icon ? <img src={btnIcon} alt="" /> : ''} 
            </a> 
            : type === 'submit' ?
            
            <input type="submit" disabled={disablet} 
            className={styleName} value={text} />

            :''
        
    )
}

export default Button;