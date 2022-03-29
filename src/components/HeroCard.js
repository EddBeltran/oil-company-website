import React from 'react'
import Button from './Button'

function HeroCard(props) {
  return (
    <div className='hero__container'>
        <div className='hero__container__card small-container'>
            <h1 className='hero__container__card__header'>{props.title}</h1>
            <p className='hero__container__card__text'>{props.paragraph}</p>
            <Button text={props.callToAction} />
        </div>
    </div>
  )
}

export default HeroCard