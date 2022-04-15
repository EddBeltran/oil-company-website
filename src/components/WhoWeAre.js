import React from 'react'
import ImgAboutUs from '../assets/images/petroleum-engineer.jpg'
import Button from './UI/Button'
import HeadSection from './UI/HeadSection'

function WhoWeAre() {
  return (
    <section className='block'>
        <div className='small-container'>
            <HeadSection title="Quienes somos" text={false} type="primary"/>
            <div className='who-we-are'>
                <img className='who-we-are__image' src={ImgAboutUs} alt="quienes somos" />
                <div className='who-we-are__content'>
                    <p>Somos una empresa 100% mexicana enfocada en el sector de hidrocarburos. Desde su fundación en 1988, Azteca Oil opera con responsabilidad ambiental y etica en pro de la industria petrolera del pais.</p>
                    <Button text='Ver infraestructura' buttonStyle="primary" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhoWeAre