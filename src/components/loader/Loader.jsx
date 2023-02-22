import React from 'react'
import { loader } from '../../utils/images'
import './Loader.css'
const Loader = () => {
  return (
    <div className='loader'>
      <div className="container">
        <div className="loader-container">
          <img src={loader} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Loader
