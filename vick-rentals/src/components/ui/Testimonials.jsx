import React from 'react'
import Slider from 'react-slick'
import sped2 from '../../assets/all-images/boy.jpg'
import sped3 from '../../assets/all-images/girl1.jpg'
import sped4 from '../../assets/all-images/boy1.webp'
import sped5 from '../../assets/all-images/girl.webp'
import '../../styles/testimonial.css'

const Testimonials = () => {

    const settings ={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoPlaySpeed:2000,
        slidesToShow:3,
        slidesToScroll:1,
        responsive: [
            {
                breakpoint:991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings: {
                    slidesToScroll:1,
                    slidesToShow:1,
                },
            },
        ],
    };


  return <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Natus ea sint aperiam? Animi accusamus consequuntur minus
                      provident rerum voluptates perspiciatis corrupti vero, sequi,
                     a maiores nostrum voluptatibus impedit doloribus aperiam!
                </p>

                <div className='mt-3 d-flex align-items-center gap-4'>
                    <img src={sped2} alt="" className='w-25 h-25 rounded-2' />

                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Natus ea sint aperiam? Animi accusamus consequuntur minus
                      provident rerum voluptates perspiciatis corrupti vero, sequi,
                     a maiores nostrum voluptatibus impedit doloribus aperiam!
                </p>

                <div className='mt-3 d-flex align-items-center gap-4'>
                    <img src={sped3} alt="" className='w-25 h-25 rounded-2' />

                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Natus ea sint aperiam? Animi accusamus consequuntur minus
                      provident rerum voluptates perspiciatis corrupti vero, sequi,
                     a maiores nostrum voluptatibus impedit doloribus aperiam!
                </p>

                <div className='mt-3 d-flex align-items-center gap-4'>
                    <img src={sped4} alt="" className='w-25 h-25 rounded-2' />

                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Natus ea sint aperiam? Animi accusamus consequuntur minus
                      provident rerum voluptates perspiciatis corrupti vero, sequi,
                     a maiores nostrum voluptatibus impedit doloribus aperiam!
                </p>

                <div className='mt-3 d-flex align-items-center gap-4'>
                    <img src={sped5} alt="" className='w-25 h-25 rounded-2' />

                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>







         </Slider>
}

export default Testimonials
