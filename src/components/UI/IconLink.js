import React from 'react';
import Icon from './Icon';

function IconLink({text, iconName, iconSize, buttomStyle}) {
  let iconColor
  if (buttomStyle==="primary"){
    iconColor = "blue";
  } else if (buttomStyle==="secondary"){
    iconColor = "green";
  } else if (buttomStyle==="light-primary"){
    iconColor = "blue";
  }
  
  else {
    iconColor = "orange";
  }

  return (
    <div className={`icon-link icon-link--${buttomStyle}`}>
        <p>{text}</p>
        <Icon name={iconName} color={iconColor} size={iconSize} />
    </div>
  )
}

export default IconLink