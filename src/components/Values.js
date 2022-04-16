import React from 'react';
import IconLink from './UI/IconLink';
import HeadSection from './UI/HeadSection';

function Values() {
  return (
    <section className='block--big block--light big-container'>
        <div className='small-container'>
            <HeadSection title="Nuestros Valores" textStyle="primary" />
            <div className='values'>
                <div className='values__paragraph'>Azteca Oil Co. está 100% comprometida con el cuidado al medio ambeinte, la innovación y el bienestar de los trabajadores.</div>
                <div className='values__links grid grid--1x2'>
                    <IconLink text="Responsabilidad" iconName="responsabilidad" iconSize="30" buttomStyle="light-primary" />
                    <IconLink text="Honestidad" iconName="honestidad" iconSize="30" buttomStyle="light-primary" />
                    <IconLink text="Respeto" iconName="respeto" iconSize="30" buttomStyle="light-primary" />
                    <IconLink text="Tolerancia" iconName="tolerancia" iconSize="30" buttomStyle="light-primary" />
                    <IconLink text="Integridad" iconName="integridad" iconSize="30" buttomStyle="light-primary" />
                    <IconLink text="Disciplina" iconName="disciplina" iconSize="30" buttomStyle="light-primary" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values