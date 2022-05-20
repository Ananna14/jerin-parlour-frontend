import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './Testmonial.css'

const Testimonial = () => {
  const [reviews, setReviews]  = useState([]);

  useEffect(() => {
            fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then( data => setReviews(data))
        }, []);
        console.log(reviews);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHaight: true,
    autoplayspeed: 3000,
    responsive: [
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
          }
      },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
          }
      }
  ]
   
  };
  return (
    <div className='bg-card'>
      <div className="container">
          <h2 className='p-5'> Tastimonial </h2>
          <Slider {...settings}>
            {
              reviews.map(review => <div review={review} key={review._id}>
                                  <Card className='shadow m-4 h-100 mb-5'>
                                  <Card.Img variant="top" className='card-img mb-5' src={review.img} />
                                  <Card.Body>
                                  <Card.Title className="fw-bold">{review.firstName}</Card.Title>
                                  <Card.Text className="fw-bold">
                                      {review.Description}
                                  </Card.Text>
                                  </Card.Body>
                              </Card>
              </div>)
            }
          </Slider>
     </div>
    </div>
  )
}

export default Testimonial;