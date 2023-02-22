import React from 'react'
import "./ProductList.css"
import Product from "../product/Product"

const ProductList = ({products}) => {
  /* console.log(products) */
  return (
    <div className='product-list'>
      {
        products.map((product) => {
          let discountedPrice = (product.price) - (product.price * (product.discountPercentage / 100));

          return (
            <Product key={product.id} product={{...product, discountedPrice}}/>
          )
        })
      }
    </div>
  )
}

export default ProductList
