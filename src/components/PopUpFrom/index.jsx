import React from 'react'
import {Link} from 'react-router-dom'
import FormImg from '../../assets/images/form_img.png'
import PhoneNumber from '../PhoneNumber'
import Logo from '../../assets/images/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { togglePopUp } from '../../redux/slice/popUpSlice'

const PopUpFrom = () => {

    const display = useSelector(store => store.popUp.toggle)
    
    const dispatch = useDispatch()

  return (
    <div className={ display ? 'pop-up-bg' : 'd-none'} 
    onClick={()=>dispatch(togglePopUp(false))} 
    >
    <div className={'popup_form'}>
        <div className="form_img">
            <img src={FormImg} alt="form_img" />
            <img src={Logo} alt="bySohiba" />
        </div>
        <div className="form_contents">
            <div className="form_contents_head">
                <h4>введите номер для обратный звонок</h4>
                <input className='form_input' type="text" placeholder='Номер телефона' />
                <div className="form_btn">Заказать звонок</div>
            </div>
            <div className="form_contents_footer">
                <h4>номер для прямой вызов</h4>
                <div className="form_numbers">
                    <PhoneNumber styleName={'form-phone_number'} text={`+998 97 750 88-80`} />
                    <PhoneNumber styleName={'form-phone_number'} text={`+998 97 750 88-80`} />
                </div>
                <div className="form_messangers">
                    <Link to={'/'} className='form_messanger'>Написать в Telegram</Link>
                    <Link to={'/'} className='form_messanger'>Написать на Whats App</Link>
                </div>
            </div>
        </div>
        <div className="form_close" onClick={()=>dispatch(togglePopUp(false))} >&#10006;</div>
    </div>
    </div>
  )
}

export default PopUpFrom