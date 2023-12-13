import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header__content">
                <h1 className="header__title">DO IT NOW</h1>
                <span className='header__text'>You have tasks today!</span>
            </div>
        </div>
    )
}

export default Header