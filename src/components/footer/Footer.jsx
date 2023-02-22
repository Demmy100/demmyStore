import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
      <div className="footer-content">
            <Link to="/" className='footer-link'>privacy policy</Link>
            <div className="vert-line"></div>
            <Link to="/" className='footer-link'>terms of service</Link>
            <div className="vert-line"></div>
            <Link to="/" className='footer-link'>About DemmyStore.</Link>
        </div>
        <span className="copyright-text">
          &copy; 2023 DemmyStore. All Rights Reserved 
        </span>
      </div>
    </div>
  )
}

export default Footer
