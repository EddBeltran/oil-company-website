import React from 'react'
import imgHero from '../assets/images/gas-station.jpg'
import HeroCard from './HeroCard'

function Hero() {
  return (
    <section className='hero big-container'>
        <img className='hero__background-image' src={imgHero} alt="gas station" />
        <HeroCard />
        
    </section>
  )
}

export default Hero