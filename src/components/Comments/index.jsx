import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";
import comments from '../../data/comments';
import comImg from '../../assets/images/Comment Img.png'
import Button from '../Button/index';
import Star from '../Star/index';
import { useTranslation } from 'react-i18next';


const Comments = () => {
    
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [agreement, setAgreement] = useState(false)
    const [disablet, setDisablet] = useState(true)
    const [rate, setRating] = useState(0);
    const {t} = useTranslation();

    
    const handleSubmit = (e) => { 
        e.preventDefault()

        const newComment = {
            id: Date.now(),
            name,
            comment,
            agreement,
            rate  
        }
       
        if (!disablet) {
            comments.push(newComment)
        }

        setAgreement(false)
        setComment('')
        setName('')
        setRating(0)
        setDisablet(true)
    }


    useEffect(()=>{
        if (comment && name && rate) {
            setDisablet(false)
        }else{
            setDisablet(true)
        }
    },[agreement, comment, name, rate])

    const handleChanged = (e) => {
        const {name,value} = e.target
        if (name === 'name') {
            setName(value)
        }
        if (name === 'comment') {
            setComment(value)
        }
        if (name === 'check') {
            setAgreement(value)
        }
    }

    
  const [hoverRating, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  

//   const swiper = useSwiper()

//   console.log(swiper);
//   const SwiperButtonNext = ({ children }) => {
//     const swiper = useSwiper();
//     return <button onClick={() => swiper.slideNext()}>{children}</button>;
//   };

    // const handleKey = (e) => {
    //     console.log(e)
    // }

  return (
    <div className='comments'>
        <h1>{t('home_page.comment.comment_head_text')}</h1>
                
        
        <Swiper

            slidesPerView={4}
            spaceBetween={20}
            loop={true}    
            navigation
            modules={[ Autoplay, Navigation]}    
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className="commentSwiper"
            breakpoints={{
                1400: {
                    slidesPerView: 4
                },
                1200: {
                    slidesPerView: 3
                },
                964: {
                    width: 964,
                    slidesPerView: 3
                },
                708: {
                    width: 708,
                    slidesPerView: 2
                },
                320: {
                    width: 320,
                    slidesPerView: 1
                }
            }}
            >

                    {
                    comments?.map( comment =>(
                        <SwiperSlide key={comment.id}>
                            <div className="comment-card">
                                <img src={comImg} className='comImg' alt="" />
                            <p>{comment.comment}</p>
                            <div className="bottom">
                                <p className="name">{comment.name}</p>
                               
                               <div className="stars">
                                    {
                                        stars.map((star,i)=>(
                                            <Star
                                            key={i}
                                            starId={star}
                                            rating={comment.rate}
                                            size={'16px'}
                                            />
                                        ))
                                    }
                                    </div>

                            </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
        </Swiper>

        <div className="write-comment">
            <h2 className="comment-text">
            {t('home_page.comment.comment_body_text')}
</h2>
            <form onSubmit={handleSubmit}>
                <textarea 

                onChange={handleChanged}
                name="comment" 
                placeholder={t('home_page.comment.text_review')}
                value={comment}
                ></textarea>
                <div className="form-right">
                <input 
                onChange={handleChanged}
                className='com-inp'
                value={name}
                name={'name'}
                type="text"
                placeholder={t('home_page.comment.comment_your_name')}/>

                <div className="stars-com">
                {stars.map((star,i)=>(
                <Star
                key={i}
                starId={star}
                rating={hoverRating || rate }
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}/>
                ))}</div>
                
                <Button disablet={disablet} type={'submit'} styleName={'btn-regular'}
                text={t('home_page.comment.comment_btn')}/>
                </div>
            </form>
            
        </div>
    </div>
  )
}

export default Comments