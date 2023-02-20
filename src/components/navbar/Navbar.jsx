import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <span>DemmyStore</span>
        <span>
          <i className='fas fa-shopping-bag'></i>
        </span>
      </div>
      <div className="navbar-search">
        <div className="navbar-search-main">
          <span>
          <i className='fa-solid fa-magnifying-glass'></i>
          </span>
          <input type="search" placeholder='Search products'/>
        </div>
        <button className="navbar-button">Search</button>
      </div>
      <div className="navbar-items">
        <div className="navbar-item">
          <span></span>
          <span>Account</span>
        </div>
        <div className="navbar-item">
          <span></span>
          <span>Help</span>
        </div>
        <div className="navbar-item-cart">
          <span>
          <i className='fa-solid fa-cart-shopping'></i>
          </span>
          <span>Cart</span>
          <div className="navbar-item-cart-value"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
