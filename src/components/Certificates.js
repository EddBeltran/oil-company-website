import React from 'react'
import Logo1 from '../assets/icons/logo-ADCI.jpg'
import Logo2 from '../assets/icons/logo-industria-limpia.jpg'
import Logo3 from '../assets/icons/logo-AENOR-1.png'
import Logo4 from '../assets/icons/logo-ESR.png'
import Logo5 from '../assets/icons/logo-AENOR-2.png'


function Certificates() {
  return (
    <section className='block'>
        <div className='small-container'>
          <h2 className='block__header'>Certificates</h2>
          <div className='certificate'>
            <div className='certificate__logo'><img src={Logo1} /></div>
            <div className='certificate__logo'><img src={Logo2} /></div>
            <div className='certificate__logo'><img src={Logo3} /></div>
            <div className='certificate__logo'><img src={Logo4} /></div>
            <div className='certificate__logo'><img src={Logo5} /></div>
          </div>
        </div>
    </section>
  )
}

export default Certificates