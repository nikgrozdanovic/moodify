import React from 'react'

const Button = ({ disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled ? disabled : false}
      type='button'
    ></button>
  )
}

export default Button
