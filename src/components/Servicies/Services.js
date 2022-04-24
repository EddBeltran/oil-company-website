import React from 'react'
import ServicesCard from './ServicesCard'
import broImg from '../../assets/images/3D_seismic.jpg'
import HeadSection from '../UI/HeadSection'

function Services() {
  return (
    <section className='block'>
      <div className='small-container'>
        <HeadSection title="Servicios" textStyle="primary"/>
        <div className='services'> 
          <ServicesCard 
            image={broImg}
            title='3D seismic survey'
            paragraph="This service is not availbable"
          />
          <ServicesCard 
            image={broImg}
            title='3D seismic survey'
            paragraph="This service is not availbable"
          />
          <ServicesCard />
          <ServicesCard />
        </div>
      </div>
    </section>
  )
}

export default Services