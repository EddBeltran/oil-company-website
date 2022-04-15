import React from 'react'

function HeadSection({title, text, type}) {
  return (
    <div className={`head-section head-section--${type}`}>
      <h2 className='head-section__title'>{title}</h2>
      {text && <p className='head-section__text'>{text}</p>}
    </div>
  )
}

export default HeadSection