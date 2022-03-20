import React from 'react'
import ImgAboutUs from '../assets/images/about-us.webp'

function AboutUs() {
  return (
    <section className='block block-dark big-container'>
        <div className='small-container'>
            <h2 className='block__header'>About Us</h2>
            <p className='block__paragraph'>Somos unas empresa</p>
            <div className='about-us'>
                <img className='about-us__image' src={ImgAboutUs} />
                <div className='about-us__scrollable'>Scroll</div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs