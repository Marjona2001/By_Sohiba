import React, { useEffect } from 'react';
import instaLogo from '../../assets/images/instagram.png'
import Button from '../Button';
import {useDispatch, useSelector} from 'react-redux'
import {instaMedia} from '../../redux/slice/instaSlice'
import {useTranslation} from 'react-i18next'


const Instagram = () => { 
    const data = useSelector(data => data.insta.instaMedias.imgs) 
    // console.log(data);



    const dispatch = useDispatch()
    

    useEffect(()=>{       
        dispatch(instaMedia())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
            
    const {t} = useTranslation()
    return (
        <div className='instagram'>
            <img className='insta_logo' src={instaLogo} alt="instagram" />
            <h5>{t('home_page.instagram.insta_text')}</h5>
            <div className="insta_imgs">
                {
                    data?.filter(post => post.media_type === 'IMAGE' 
                    || post.media_type === 'CAROUSEL_ALBUM')
                    .map( (post, i) =>
                    (
                        i < 5 ?
                        <div className='insta_img' key={post.id}>
                            <img src={post.media_url} alt="" />
                        </div>
                        : ''   
                    ))
                }
                
            </div>
            <Button type={'href'} text={t('home_page.instagram.insta_btn')} 
            styleName={'btn-insta'} 
            url={"https://www.instagram.com/sohiba_wedding/"} icon={true}/>
        </div>
    )
}

export default Instagram