import React from 'react'

function Button({text, buttonStyle}) {
  return (
    <button className={`btn btn--${buttonStyle}`}>{text}</button>
  )
}

export default Button