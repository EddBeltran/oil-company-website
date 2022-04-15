import React from 'react';
import Icon from '../UI/Icon';

function Fact({iconName, iconColor, iconSize, number, text}) {
  return (
    <div className='fact'>
        <Icon name={iconName} color={iconColor} size={iconSize} />
        <span className='fact__number'>{number}</span>
        <p className='fact__text'>{text}</p>
    </div>
  )
}

export default Fact