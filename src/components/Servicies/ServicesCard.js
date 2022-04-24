import React from 'react'

function ServiciesCard({image, title, paragraph}) { 
    return (
    <div className='card'>
        <img src={image} alt={title} />
        <div className='card__text'>
           <h1 className='card__text__title'>{title}</h1>
           <div className='card__text__description'>
             <p>{paragraph}</p>
           </div>
        </div> 
    </div>
  )
}

export default ServiciesCard