import React from 'react';
import SvgSprite from "../../assets/icons/sprite.svg"

function Icon({name, color, size}) {
  return (
    <svg fill={color} width={size} height={size}>
        <use xlinkHref={`${SvgSprite}#${name}`} />
    </svg>
  )
}

export default Icon