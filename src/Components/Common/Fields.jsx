import React from 'react'

export default function Fields({children, label, error, htmlFor}) {
    
    return (
    <div>
      {label && <label className='text-white py-2' htmlFor={htmlFor}>{label}</label>}
      {children}
      {error && <div className='text-red-400 py-2 text-xs'>{error.message}</div>}
    </div>
  )
}
