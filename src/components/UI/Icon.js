import React from "react";
import SvgSprite from "../../assets/icons/sprite.svg";

function Icon({ name, color, size }) {
  return (
    <div className="icon-container">
      <svg fill={color} width={size} height={size}>
        <use xlinkHref={`${SvgSprite}#${name}`} />
      </svg>
    </div>
  );
}

export default Icon;
