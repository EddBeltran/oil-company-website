import React from 'react'
import {useState} from 'react'

function Card(props) {
    const [description, setDescription] = useState(false)
    
    function hoverEffect(){
        setDescription(prevState => !prevState)
    }
  
    return (
    <div className='card'>
        <img src={props.image}/>
        <div onMouseEnter={hoverEffect} onMouseLeave={hoverEffect} className={description ? 'card__text active': 'card__text'}>
           <h1 className='card__text__title'>{props.title}</h1>
           <div className='card__text__description'>
             <p>this is a company with two years of experience</p>
             <p>Learn More</p>
           </div>
        </div> 
    </div>
  )
}

export default Card