import React from 'react'

function IndividualFact(props) {
  return (
    <div className='fact__container'>
        <img src={props.image}/>
        <span className='fact__container__number'>{props.number}</span>
        <p className='fact__container__text'>{props.fact}</p>
    </div>
  )
}

export default IndividualFact