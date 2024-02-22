import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assests/images/ava-1.jpg'
import ava02 from '../../assests/images/ava-2.jpg'
import ava03 from '../../assests/images/ava-3.jpg'


const Testimonials = () => {

  const settings={
     dots:true,
     infinite:true,
     autoplay:true,
     speed:1000,
     swipeToSlide:true,
     autoplaySpeed:2000,
     slidesToShow:3,

     responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
     ]
  }
  return (
    <Slider {...settings} >
      <div className='testimonial py-4 px-3'>
         <p>
          Travel is the movement of people between distant geographical locations.
          Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,
          ship or other means, with or without luggage, and can be one way or round trip.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} className='w-25 h-25 rounded-2' alt='' />
          <div>
            <h6 className='mb-0 mt-3'>John Doe</h6>
            <p>Customer</p>
          </div>
         </div>
      </div>
      <div className='testimonial py-4 px-3'>
         <p>
          Travel is the movement of people between distant geographical locations.
          Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,
          ship or other means, with or without luggage, and can be one way or round trip.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
          <div>
            <h6 className='mb-0 mt-3'>Lia Franklin</h6>
            <p>Customer</p>
          </div>
         </div>
      </div>
      <div className='testimonial py-4 px-3'>
         <p>
          Travel is the movement of people between distant geographical locations.
          Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,
          ship or other means, with or without luggage, and can be one way or round trip.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava03} className='w-25 h-25 rounded-2' alt='' />
          <div>
            <h6 className='mb-0 mt-3'>John Doe</h6>
            <p>Customer</p>
          </div>
         </div>
      </div>
      <div className='testimonial py-4 px-3'>
         <p>
          Travel is the movement of people between distant geographical locations.
          Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,
          ship or other means, with or without luggage, and can be one way or round trip.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} className='w-25 h-25 rounded-2' alt='' />
          <div>
            <h6 className='mb-0 mt-3'>John Doe</h6>
            <p>Customer</p>
          </div>
         </div>
      </div>
      <div className='testimonial py-4 px-3'>
         <p>
          Travel is the movement of people between distant geographical locations.
          Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,
          ship or other means, with or without luggage, and can be one way or round trip.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
          <div>
            <h6 className='mb-0 mt-3'>Lia Franklin</h6>
            <p>Customer</p>
          </div>
         </div>
      </div>
    </Slider>
  )
}

export default Testimonials