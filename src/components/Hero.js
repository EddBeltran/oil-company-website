import React from 'react'
import imgHero from '../assets/images/gas-station.jpg'
import HeroCard from './HeroCard'

function Hero() {
  return (
    <section className='hero big-container'>
        <img className='hero__background-image' src={imgHero} alt="gas station" />
        <HeroCard 
            title='La mejor gasolina del pais' 
            paragraph='somos una indistria de clase mundial en México, siempre por el mejor camino'
            callToAction='Don bro'
        />
    </section>
  )
}

export default Hero