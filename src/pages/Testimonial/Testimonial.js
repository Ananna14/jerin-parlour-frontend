import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Rating from '../Review/Rating/Rating';
import blankImg from '../../../src/Image_Icon/blank-profile.png'

const Testimonial = () => {
  const{user} = useAuth();
  const [reviews, setReviews]  = useState([]);

  useEffect(() => {
            fetch(`https://morning-lowlands-93777.herokuapp.com/review`)
            .then(res => res.json())
            .then( data => setReviews(data))
        }, []);
        // console.log(reviews);

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
    <div className='bg-card pb-5'>
      <div className="container">
          <h2 className='p-5'> Tastimonial </h2>
          <Slider {...settings}>
            {
              reviews.map(review => <div review={review} key={review._id}>
                
                                  <Card className='shadow m-4 h-100 mb-5'>
                                  <Card.Img variant="top" className='card-img rounded-circle my-3' src={user.photoURL || blankImg} style={{ height: 60, width: 60 }} alt="" />
                                  <Card.Body>
                                  <Card.Title className="fw-bold">{review.firstName}</Card.Title>
                                  <Card.Text className="fw-bold">
                                      {user.email}
                                  </Card.Text>
                                  <Card.Text className="fw-bold">
                                  {/* <Rating value={parseInt(review.rating)} readOnly /> */}
                                  </Card.Text>
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