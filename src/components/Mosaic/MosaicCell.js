import React from 'react'

function MosaicCell({image, text}) {
  return (
    <div className='mosaic__cell__container'>
    <img src={image} alt={text} />
    <h4>{text}</h4>
    </div>
  )
}

export default MosaicCell