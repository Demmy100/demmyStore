import React from 'react'
import { Link } from 'react-router-dom'
import { shopping_cart } from '../../utils/images'
import { formatPrice } from '../../utils/helpers'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCarts, removeFromCart, getCartTotal,toggleCartQty, clearCart } from '../../store/cartSlice'
import './CartPage.css'
const CartPage = () => {
  const dispatch = useDispatch()
  const carts = useSelector(getAllCarts)
  const {itemsCount, totalAmount} = useSelector((state) => state.cart)
  /* console.log(carts) */
  if(carts.length === 0) {
    return (
      <div className="container">
        <div className="empty-cart">
          <img src={shopping_cart} alt="" />
          <span className="">Your shopping cart is empty.</span>
          <Link to="/" className='shopping-btn'>Go shopping Now</Link>
        </div>
      </div>
    )
  }
  return (
    <div className='cart'>
      <div className="container">
      <div className="cart-ctable">
          <div className="cart-chea">
          <div className="cart-ctr">
            <div className="cart-cth">
              <span className="cart-ctxt">S.N.</span>
            </div>
            <div className="cart-cth">
              <span className="cart-ctxt">Product</span>
            </div>
            <div className="cart-cth">
              <span className="cart-ctxt">Unit Price</span>
            </div>
            <div className="cart-cth">
              <span className="cart-ctxt">QTY</span>
            </div>
            <div className="cart-cth">
              <span className="cart-ctxt">Total</span>
            </div>
            <div className="cart-cth">
              <span className="cart-ctxt">Actions</span>
            </div>
          </div>
          </div>
          <div className="cart-cbody">
            {
              carts.map((cart, idx) => {
                return (
                  <div className="cart-ctr py-4" key={cart?.id}>
                    <div className="cart-ctd">
                      <span className="cart-ctxt">{idx + 1}</span>
                    </div>
                    <div className="cart-ctd">
                      <span className="cart-ctxt">{cart?.title}</span>
                    </div>
                    <div className="cart-ctd">
                      <span className="cart-ctxt">{formatPrice(cart?.discountedPrice)}</span>
                    </div>
                    <div className="cart-ctd">
                      <div className="qty-change flex align-center">
                        <button type='button' className="qty-decrease flex align-center justify-center" onClick={() => dispatch(toggleCartQty({id: cart?.id, type: "DEC"}))}>
                          <i className='fas fa-minus'></i>
                        </button>
                        <div className="qty-value">
                          {cart?.quantity}
                        </div>
                        <button type='button' className="qty-increase" onClick={() => dispatch(toggleCartQty({id: cart?.id, type: "INC"}))}>
                          <i className='fas fa-plus'></i>
                        </button>
                      </div>
                    </div>
                    <div className="cart-ctd">
                      <span className="cart-ctxt">{formatPrice(cart?.totalPrice)}</span>
                    </div>
                    <div className="cart-ctd">
                      <button type='button' className='delete-btn text-dark' onClick={() => dispatch(removeFromCart(cart?.id))}>Delete</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="cart-cfoot">
            <div className="cart-cfoot-l">
              <button type='button' className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
                <i className='fas fa-trash'></i>
                <span className="mx-1">Clear Cart</span>
              </button>
            </div>
            <div className="cart-cfoot-r">
              <div className="total-txt">
                <div className="cartT">Total ({itemsCount}) items: </div>
                <span>{formatPrice(totalAmount)}</span>
              </div>
              <button type='button' className="checkout-btn">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
