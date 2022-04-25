import React from 'react';
import HeadSection from './UI/HeadSection';

import Logo1 from '../assets/icons/logo-ADCI.webp'
import Logo2 from '../assets/icons/logo-industria-limpia.webp'
import Logo3 from '../assets/icons/logo-AENOR-1.webp'
import Logo4 from '../assets/icons/logo-ESR.webp'
import Logo5 from '../assets/icons/logo-AENOR-2.webp'


function Certificates() {
  return (
    <section className='block--big'>
        <div className='small-container'>
          <HeadSection title="Certificaciones" textStyle="primary"/>
          <div className='certificate'>
            <div className='certificate__logo'><img src={Logo1} alt="ADCI" /></div>
            <div className='certificate__logo'><img src={Logo2} alt="Industria Limpia"/></div>
            <div className='certificate__logo'><img src={Logo3} alt="AENOR" /></div>
            <div className='certificate__logo'><img src={Logo4} alt="ESR" /></div>
            <div className='certificate__logo'><img src={Logo5} alt="AENOR" /></div>
          </div>
        </div>
    </section>
  )
}

export default Certificates