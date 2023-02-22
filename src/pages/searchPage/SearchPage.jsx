import React, { useEffect } from 'react'
import './SearchPage.css'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncSearchProduct, getSearchProduct, getSearchProductStatus } from '../../store/SearchSlice'
import Loader from '../../components/loader/Loader'
import ProductList from '../../components/productList/ProductList'
import { STATUS } from '../../utils/status'


const SearchPage = () => {
  const dispatch = useDispatch()
  const {searchTerm} = useParams()
  const searchProduct = useSelector(getSearchProduct)
  const searchProductStatus = useSelector(getSearchProductStatus)
  /* console.log(searchProduct) */
  useEffect(() => {
    dispatch(fetchAsyncSearchProduct(searchTerm))
  },[searchTerm])

  if(searchProduct.length === 0) {
    return (
   <div className="container" style={{
    minHeight: "70vh"
   }}>
     <div className='fw-5 text-danger py-5'>
      <h3>No Product Found</h3>
    </div>
   </div>
    )
  }

  return (
    <main>
      <div className="search-content bg-whitesmoke">
        <div className="container">
          <div className="py-5">
            <div className="title-md">
              <h3>Search Results:</h3>
            </div>
            <br/>
            {
              searchProductStatus === STATUS.LOADING ? <Loader/> : <ProductList products={searchProduct}/>
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default SearchPage
