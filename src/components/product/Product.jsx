import React from 'react'
import { Link } from 'react-router-dom'
import {formatPrice} from '../../utils/helpers'
import './Product.css'

const Product = ({product}) => {
  return (
   <Link to={`product/${product?.id}`} key={product.id}>
     <div className='product-container'>
      <div className="product-img">
        <img src={product?.images[0]} alt={product?.title} />
      </div>
      <div className="product-title">
        <h3>{product?.title}</h3>
        <div className="price">
        <span className='new-price'>{formatPrice(product?.price)}</span>
        <span className='old-price'>{formatPrice(product?.discountedPrice)}</span>
      </div>
      </div>
     
      <div className="discount">
        <span>-{product?.discountPercentage}% Off</span>
      </div>
    </div>
   </Link>
  )
}

export default Product
