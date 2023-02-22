import React, { useEffect } from 'react'
import './CategoryProductPage.css'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncCategoryProduct, getCategoryProduct, getCategoryProductStatus } from '../../store/CategorySlice'
import { STATUS } from '../../utils/status'
import Loader from '../../components/loader/Loader'
import ProductList from '../../components/productList/ProductList'

const CategoryProductPage = () => {
  const dispatch = useDispatch()
  const {category} = useParams()
  const categoryProduct = useSelector(getCategoryProduct)
  const categoryProductStatus = useSelector(getCategoryProductStatus)
  console.log(categoryProduct)
  useEffect(() => {
    dispatch(fetchAsyncCategoryProduct(category))
  },[dispatch, category])

  return (
    <div className='cat-products py-5 bg-whitesmoke'>
      <div className="container">
        <div className="cat-products-content">
          <div className="title md">
            <h3>See Our <span className='text-capitalize'>{category}</span></h3>
          </div>
          {
            categoryProductStatus === STATUS.LOADING ? <Loader/> : <ProductList products={categoryProduct}/>
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryProductPage
