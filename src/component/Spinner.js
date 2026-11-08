import React from 'react'
import loading from './loader.gif'

export default function Spinner() {
  return (
    <div className='text-center'>
      <img src={loading} alt="loading"  />
    </div>
  )
}
