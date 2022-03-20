import React from 'react'
import {useState} from 'react'
import Logo from '../assets/icons/_main_logo.svg'

function Header() {
const [language, setLanguage] = useState(true)

function handleLanguaje(){
    setLanguage(prevState => !prevState)
}
                
  return (
    <div className='header big-container'>
        <nav className='nav small-container'>
            <a href='google.com' className='nav__logo'>
                <img src={Logo} alt="logo oil company" />
                <span>Azteca Oil</span>
            </a>
            <ul className='nav__items'>
                <li>Who We Are</li>
                <li>Operations</li>
                <li>Carrers</li>
                <li>Investors</li>
                <li>Contact Us</li>
                <li onClick={handleLanguaje}>{language ? "Eng" : "Esp"}</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header