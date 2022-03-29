import React from 'react'
import ImgAboutUs from '../assets/images/about-us.webp'
import Button from './Button'

function AboutUs() {
  return (
    <section className='block block-dark big-container'>
        <div className='small-container'>
            <h2 className='block__header'>About Us</h2>
            <div className='about-us'>
                <img className='about-us__image' src={ImgAboutUs} />
                <div className='about-us__content'>
                    <p>Somos una empresa 100% mexicana enfocada en el sector de hidrocarburos. Desde su fundación en 1988, Azteca Oil opera con responsabilidad ambiental y etica en pro del industria petrolera del pais.</p>
                    <Button text='Ver infraestructura'/>

                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs