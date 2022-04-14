import React from 'react'
import IconLink from './UI/IconLink'

function HeroLinks() {
  return (
    <section className='block big-container'>
        <div className='hero-links grid grid--1x3 small-container'>
            <IconLink text="Bolsa de trabajo" iconName ="jobs" iconSize="30" buttomStyle="primary"/>
            <IconLink text="Buscar Estación" iconName ="gas-station" iconSize="30" buttomStyle="primary"/>
            <IconLink text="Contactanos" iconName ="email" iconSize="30" buttomStyle="primary"/>
        </div>
    </section>
  )
}

export default HeroLinks