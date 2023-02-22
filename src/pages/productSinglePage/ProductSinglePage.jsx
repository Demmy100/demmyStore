import React, { useEffect, useState } from "react";
import "./ProductSinglePage.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncProductSingle,
  getProductSingle,
  getProductSingleStatus,
} from "../../store/ProductSlice";
import Loader from "../../components/loader/Loader";
import { STATUS } from "../../utils/status";
import { formatPrice } from "../../utils/helpers";
import { addToCart, getCartMessageStatus, setCartMessageOff, setCartMessageOn } from '../../store/cartSlice'
import CartMessage from '../../components/CartMessage/CartMessage'

const ProductSinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getProductSingleStatus);
  const [quantity, setQuantity] = useState(1)
  const cartMessageStatus = useSelector(getCartMessageStatus)

  /* console.log(product) */
  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));

    if(cartMessageStatus) {
      setTimeout(() => {
        dispatch(setCartMessageOff())
      }, 2000)
    }
  }, [cartMessageStatus]);

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if(tempQty > product?.stock) {
        tempQty = product?.stock
      }
      return tempQty;
    })
  }

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if(tempQty < 1) {
        tempQty = product?.stock;
      }
      return tempQty;
    })
  }

  const addToCartHandler = () => {
    let discountedPrice =
    product?.price - product?.price * (product?.discountPercentage / 100);
    let totalPrice = quantity * discountedPrice;
    dispatch(addToCart({...product, quantity: quantity, totalPrice, discountedPrice}));
    dispatch(setCartMessageOn(true))
  }

  let discountedPrice =
    product?.price - product?.price * (product?.discountPercentage / 100);
  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />;
  }
  return (
    <div className="product-single">
      <div className="container">
        <div className="product-content">
          <div className="product-single-l">
            <div className="product-s-img">
              <img
                src={product ? (product.images ? product.images[0] : "") : ""}
                alt=""
                className="img-cover"
              />
            </div>
          </div>
          <div className="product-single-r">
            <div className="product-details">
              <div className="title">{product?.title}</div>
              <div>
                <p className="para">{product?.description}</p>
              </div>
              <div className="info">
                <div className="rating">
                  <span className="">Rating:</span>
                  <span className="">{product?.rating}</span>
                </div>
                {/* <div className="vert-line"></div> */}
                <div className="brand">
                  <span className="">Brand:</span>
                  <span className="">{product?.brand}</span>
                </div>
                {/* <div className="vert-line"></div> */}
                <div className="brand">
                  <span className="">Category:</span>
                  <span className="">
                    {product?.category ? product.category.replace("-", "") : ""}
                  </span>
                </div>
              </div>
              <div className="price">
                <div className="product-p">
                  <div className="old-price">{formatPrice(product?.price)}</div>
                  <span className="">Inclusive of all taxes</span>
                </div>

                <div className="flex align-center my-1">
                  <div className="new-price">
                    {formatPrice(discountedPrice)}
                  </div>
                  <div className="discount product-off">
                    {product?.discountPercentage}% OFF
                  </div>
                </div>
              </div>
              <div className="qty">
                <div className="qty-text">Quantity:</div>
                <div className="qty-change">
                  <button type="button" className="qty-decrease">
                    <i className="fas fa-minus" onClick={() => decreaseQty()}></i>
                  </button>
                  <div className="qty-value">{quantity}</div>
                  <button type="button" className="qty-increase">
                    <i className="fas fa-plus" onClick={() => increaseQty()}></i>
                  </button>
                </div>
                {product?.stock === 0 ? (
                  <div className="qty-error">
                    out of stock
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="btns">
                <button type="button" className="add-to-cart-btn btn">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="btn-text" onClick={() => addToCartHandler(product)}>add to cart</span>
                </button>
                <button className="buy-now btn">
                  <span className="btn-text">buy now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {cartMessageStatus && <CartMessage/>}
    </div>
  );
};

export default ProductSinglePage;
