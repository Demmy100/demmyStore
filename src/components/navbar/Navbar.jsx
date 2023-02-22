import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCarts, getCartItemsCount, getCartTotal } from '../../store/cartSlice'

const Navbar = () => {
  const itemsCount = useSelector(getCartItemsCount)
  const dispatch = useDispatch()
  const carts = useSelector(getAllCarts)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchTerm = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }
  useEffect(() => {
    dispatch(getCartTotal())
  },[carts])
  return (
    <div className='navbar'>
      <Link to="/" className="navbar-logo">
        <span>DemmyStore</span>
        <span>
          <i className='fas fa-shopping-bag'></i>
        </span>
      </Link>
      <div className="navbar-search">
        <div className="navbar-search-main">
          <span>
          <i className='fa-solid fa-magnifying-glass'></i>
          </span>
          <input type="search" placeholder='Search products' onChange={(e) => handleSearchTerm(e)}/>
        </div>
       <Link to={`search/${searchTerm}`}>
       <button className="navbar-button">Search</button>
       </Link>
      </div>
      <div className="navbar-items">
        <div className="navbar-item">
          <span>
          <i className="fa-regular fa-user"></i>
          </span>
          <span>Account</span>
        </div>
        <div className="navbar-item">
          <span>
          <i className="fa-regular fa-circle-question"></i>
          </span>
          <span>Help</span>
        </div>
        <Link to="/cart" className="navbar-item-cart">
          <span>
          <i className='fa-solid fa-cart-shopping'></i>
          </span>
          <span>Cart</span>
          <div className="navbar-item-cart-value">{itemsCount}</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
