import React from 'react'
import SpinnerLoading from './assets/spinnerLoading.gif'

function Spinner() {
  return (
      <div className='w-100 mt-20'>
          <img
              width={180}
              className="text-center mx-auto"
              src={SpinnerLoading}
              alt="loading..." />
    </div>
  )
}

export default Spinner