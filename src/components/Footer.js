import React from 'react'
import logoFacebook from '../assets/icons/facebook.svg'
import FooterLinks from './FooterLinks'

function Footer(){
    return(
        <section className='block block-dark'>
            <div className='footer small-container'>
                <div className='footer__info'>
                    <h4>Azteca Oil Company © 2022</h4>
                    <p>Tel: +55 00 00 1234</p>
                    <p>Plaza San Pedro #33, México</p>
                    <p>Contact Us</p>
                    <div className='footer__info__socialmedia'>
                        <img src={logoFacebook}/>
                        <img src={logoFacebook}/>
                        <img src={logoFacebook}/>
                    </div>                
                </div>
                <div className='footer__links'>
                    <FooterLinks 
                        category="Carrers"
                        links = {["One", "two", "three"]}
                    />
                    <FooterLinks 
                        category="Carrers"
                        links = {["One", "two", "three"]}
                    />
                    <FooterLinks 
                        category="Carrers"
                        links = {["One", "two", "three"]}
                    />
                </div>
            </div>
        </section>
    )
}

export default Footer