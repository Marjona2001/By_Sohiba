import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import underHeader from '../../data/underHeader'
import { togglePopUp } from '../../redux/slice/popUpSlice'
import Button from '../Button'
import { useTranslation } from 'react-i18next';


const UnderHeader = ({page, orderedBlog, text}) => {

    const dispatch = useDispatch()
    const [img,setImg] = useState()

    useEffect(()=>{
        underHeader.filter(data => data.page === page).forEach(uhObj => setImg(uhObj.img))
    },[page])

    const {t} = useTranslation();

    const {head_text, body_text} = text


  return (
    <div>
        
            { orderedBlog ?
            
            <div className={`under-header ${page}-uh `}   > 
              <div className='uh-header-md' dangerouslySetInnerHTML={{__html: head_text}}></div>
            <div className="blog-side order-1">
              
            <div className='uh-header' dangerouslySetInnerHTML={{__html: head_text}}></div>
            <div className='blog' dangerouslySetInnerHTML={{__html: body_text}}></div>
            <Button 
            type={'btn'} 
            click={()=>dispatch(togglePopUp(true))}
            styleName={'btn-regular'} 
            text={t('home_page.header.header_btn')} />

            </div>
            <img src={img} className='order-2' alt="" />
            </div>
            : 
            <div className={`under-header ${page}-uh `} > 
              <div className='uh-header-md' dangerouslySetInnerHTML={{__html: head_text}}></div>
            <div className="blog-side order-2">
              
            <div className='uh-header' dangerouslySetInnerHTML={{__html: head_text}}></div>
            <div className='blog' dangerouslySetInnerHTML={{__html: body_text}}></div>
            <Button 
            type={'btn'}
            click={()=>dispatch(togglePopUp(true))} 
            styleName={'btn-regular'} 
            text={t('home_page.header.header_btn')} />

            </div>
            <img src={img} className='order-1' alt="" />
            </div>
        }
        
    </div>
  )
}

export default UnderHeader