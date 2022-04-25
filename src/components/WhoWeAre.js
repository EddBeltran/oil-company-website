import React from 'react'
import ImgAboutUs from '../assets/images/petroleum-engineer.webp'
import Button from './UI/Button'
import HeadSection from './UI/HeadSection'

function WhoWeAre() {
  return (
    <section className='block--big'>
        <div className='small-container'>
            <HeadSection title="Quienes Somos" text={false} textStyle="primary"/>
            <div className='who-we-are'>
                <img className='who-we-are__image' src={ImgAboutUs} alt="quienes somos" />
                <div className='who-we-are__content'>
                    <p>Somos una empresa 100% mexicana enfocada en el sector de hidrocarburos. Desde su fundación en 1988, Azteca Oil opera con responsabilidad ambiental y ética en pro de la industria petrolera del país.</p>
                    <Button text='Ver infraestructura' buttonStyle="secondary" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhoWeAre