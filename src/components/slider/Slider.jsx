import React from 'react'
import './Slider.css'
import Slider from 'react-slick'
import {sliderImgs} from '../../utils/images'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderPage = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='slider'>
      <div className="slider-content">
        <Slider {...settings}>
          <div className="slider-item">
            <img src={sliderImgs[0]} alt="" />
          </div>
          <div className="slider-item">
            <img src={sliderImgs[1]} alt="" />
          </div>
          <div className="slider-item">
            <img src={sliderImgs[2]} alt="" />
          </div>
          <div className="slider-item">
            <img src={sliderImgs[3]} alt="" />
          </div>
          <div className="slider-item">
            <img src={sliderImgs[4]} alt="" />
          </div>
          <div className="slider-item">
            <img src={sliderImgs[5]} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default SliderPage
