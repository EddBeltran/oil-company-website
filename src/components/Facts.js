import React from 'react'
import IndividualFact from './IndividualFact'
import iconProduction from '../assets/icons/icon-barrel.svg'
import iconWorkers from '../assets/icons/icon-engineer.svg'
import iconReservoirs from '../assets/icons/icon-map.svg'
import iconWells from '../assets/icons/icon-sucker-rod.svg'



function Facts() {
  return (
    <section className='block block-primary big-container'>
        <div className='fact grid grid--1x4 small-container'>
            <IndividualFact image={iconProduction} number="+5,000" fact="barrels per day" />
            <IndividualFact image={iconWorkers} number="+200" fact="workers" />
            <IndividualFact image={iconReservoirs} number="9" fact="fields" />
            <IndividualFact image={iconWells} number="75" fact="wells" />
        </div>
    </section>
  )
}

export default Facts