import React from 'react'

const Button = ({btnClass, btnOnclick, btnlabel}) => {
  return (
    <>
      <button type="button" className={btnClass} onClick={btnOnclick}>
        {btnlabel}
      </button>
      <button type="button" className={btnClass} >
      </button>
    </>
  )
}

export default Button
