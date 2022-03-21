import React from 'react'
import ValueCard from './ValueCard'
import iconJobs from '../assets/icons/jobs.svg'
import iconGasStation from '../assets/icons/gas-station.svg'
import iconEmail from '../assets/icons/email.svg'
import IconLink from './IconLink'

function Values() {
  return (
    <section className='block block-dark big-container'>
        <div className='small-container'>
            <h2 className='block__header'>Values</h2>
            <div className='values'>
                <div className='values__paragraph'>Somos una empresa de clase mundial</div>
                <div className='values__links grid grid--1x2'>
                    <ValueCard image={iconJobs} text="Integrity" />
                    <ValueCard image={iconJobs} text="Integrity" />
                    <ValueCard image={iconJobs} text="Integrity" />
                    <ValueCard image={iconJobs} text="Integrity" />
                    <ValueCard image={iconJobs} text="Integrity" />
                    <ValueCard image={iconJobs} text="Integrity" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values