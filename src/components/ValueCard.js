import React from 'react'

function IconLink(props) {
  return (
    <div className='icon-link'>
        <p>{props.text}</p>
        <img src={props.image} alt={props.text}/>
    </div>
  )
}

export default IconLink