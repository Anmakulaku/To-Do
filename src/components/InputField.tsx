import React from 'react'
import plus from '../assets/plus.svg'
import './inputfield.css'

const InputField = () => {
    return <div className='input'>
        <input type='input' className='input__box' placeholder='Add new task' />
        <button type='submit' className='input__button'>
            <img src={plus} alt='logo' />
        </button>
        </div>
}

export default InputField