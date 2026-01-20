import React from 'react'

export default function Fields({children, label, error, htmlFor}) {
  return (
    <div>
      {label && <label>{label}</label>}
      {children}
      {error && <div className='text-red-400'>{error.message}</div>}
    </div>
  )
}
