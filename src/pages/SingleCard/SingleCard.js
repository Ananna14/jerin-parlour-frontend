
import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Booking from '../Booking/Booking';
import './SingleCard.css'

const SingleCard = ({card}) => {
    const {Title, img, price, Description, _id} = card;
    return (
             <>
                <div className='col-lg-4 col-md-6 col-12'>
                    <Link to={`/details/${_id}`} style={{color:"black", textDecoration:"none"}}>
                        <Card className='shadow m-4 h-100'>
                            <Card.Img variant="top" className='card-img mt-5' src={img} />
                            <Card.Body>
                            <Card.Title className="fw-bold">{Title}</Card.Title>
                            <Card.Text className="fw-bold">
                                {price}
                            </Card.Text>
                            <Card.Text>
                                {Description}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
             </>
    )
}

export default SingleCard
