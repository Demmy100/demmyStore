import React, { useEffect } from 'react'
import './HomePage.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Slider from '../../components/slider/Slider'
import { header1, header2 } from '../../utils/images'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncProducts, getAllProducts, getProductsStatus } from '../../store/ProductSlice'
import { STATUS } from '../../utils/status'
import Loader from "../../components/loader/Loader"
import ProductList from "../../components/productList/ProductList"

const HomePage = () => {
  const dispatch = useDispatch()
  const products = useSelector(getAllProducts)
  const productsStatus = useSelector(getProductsStatus)
  /* console.log(products) */
  useEffect(() => {
    dispatch(fetchAsyncProducts(30))
  },[])
  return (
    <div className='home'>
      <div className="container">
        <div className="home-wrapper">
           <div className="side">
           <Sidebar/>
           </div>
            <div className="slide">
            <Slider/>
            </div>
            <div className="home-image">
              <div className="home-img1">
                <img src={header1} alt="" />
              </div>
              <div className="home-img1">
                <img src={header2} alt="" />
              </div>
            </div>
        </div>
        <div className="home-product">
          <h3>see our products :</h3>
        </div>
        {productsStatus === STATUS.LOADING ? <Loader/> : <ProductList products={products}/>}
      </div>
    </div>
  )
}

export default HomePage
