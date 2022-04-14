import React from 'react'
import iconJobs from '../assets/icons/jobs.svg'
import iconGasStation from '../assets/icons/gas-station.svg'
import iconEmail from '../assets/icons/email.svg'
import IconLink from './UI/IconLink'

function HeroLinks() {
  return (
    <section className='block big-container'>
        <div className='hero-links grid grid--1x3 small-container'>
            <IconLink text="Bolsa de trabajo" image={iconJobs} />
            <IconLink text="Buscar Estación" image={iconGasStation} />
            <IconLink text="Contactanos" image={iconEmail} />
        </div>
    </section>
  )
}

export default HeroLinks