import React from 'react'
import Card from './Card'
import broImg from '../assets/images/3D_seismic.jpg'

function Services() {
  return (
    <section className='block'>
      <div className='small-container'>
        <h2 className='block__header'>Values</h2>
        <div className='services'> 
          <Card 
            title='3D seismic survey'
            image={broImg}
          />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  )
}

export default Services