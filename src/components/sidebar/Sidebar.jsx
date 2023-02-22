import React, { useEffect } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncCategories, getAllCategories } from '../../store/CategorySlice'

const Sidebar = () => {
  const dispatch = useDispatch()
  const categories = useSelector(getAllCategories);
  /* console.log(categories) */
  useEffect(() => {
    dispatch(fetchAsyncCategories())
  },[dispatch])
  return (
    <div className='sidebar'>
      {
        categories.map((category, idx) => {
          return (
            <ul key={idx} className="sidebar-container">
              <li>
                <Link className='sidebar-link' to={`category/${category}`}>{category}</Link>
              </li>
            </ul>
          )
        })
      }
    </div>
  )
}

export default Sidebar
