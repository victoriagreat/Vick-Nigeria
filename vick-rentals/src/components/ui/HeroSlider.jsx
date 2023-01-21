import React from 'react'
import Slider from 'react-slick'
import {Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../../styles/hero-slider.css'

function HeroSlider() {

    const settings = {
        fade: true,
        speed:2000,
        autoplaySpeed: 3000,
        infinite:true,
        autoplay:true,
        slidesToShow:1,
        slideToScroll:1,
        pauseOnHover:false
    }
  return (
    <Slider {... settings} className='hero__slider'>

    <div className="slider__item slider__item-01 mt0">
        <Container>
            <div className="slider__content">
                <h4 className="text-light mb3"> For rent #35,000.00 per day</h4>
                <h1 className="text-light mb4"> Reserve now and get 20% off</h1>
                <button className="btn reserve__btn mt-4">
                    <Link to='/cars'>Reserve now</Link>
                </button>
            </div>
        </Container>
    </div>

    <div className="slider__item slider__item-02 mt0">
        <Container>
            <div className="slider__content">
                <h4 className="text-light mb3"> For rent #35,000.00 per day</h4>
                <h1 className="text-light mb4"> Reserve now and get 20% off</h1>
                <button className="btn reserve__btn mt-4">
                    <Link to='/cars'>Reserve now</Link>
                </button>
            </div>
        </Container>
    </div>

    <div className="slider__item slider__item-03 mt0">
        <Container>
            <div className="slider__content">
                <h4 className="text-light mb3"> For rent #35,000.00 per day</h4>
                <h1 className="text-light mb4"> Reserve now and get 20% off</h1>
                <button className="btn reserve__btn mt-4">
                    <Link to='/cars'>Reserve now</Link>
                </button>
            </div>
        </Container>
    </div>
  </Slider>
  )
}

export default HeroSlider
