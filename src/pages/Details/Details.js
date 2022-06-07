import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import '../Details/Details.css'
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const {_id} = useParams();
    const [details, setDetails] = useState({});
    const { user } = useAuth();

    useEffect(()=>{
        fetch(`https://morning-lowlands-93777.herokuapp.com/services/${_id}`)
        .then(res => res.json())
        .then(data =>setDetails(data))
    }, [])

    
    const onSubmit = (_id) => {
        const orderDetails = {
            orderId: _id,
            name: user.displayName,
            email: user.email,
            img: details.img,
            // status: 'Pending',
            serviceName: details.Title,
            Description: details.Description,
            price: details.price
        }
        // console.log(orderDetails);
        // SEND_TO_THE_SERVER
        fetch(`http://localhost:5000/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    alert('Order Successful');
                    // history.push('/products');
                }
            });
      
    };

    return (
        <div className="details-color">
            {/* <> */}
                <div className='col-lg-4 col-md-6 col-12' >
                        <Card className='shadow-lg m-4 h-100' style={{justifyContent: "center", alignItems: "center"}}>
                            <Card.Img variant="top" className='card-img mt-5' src={details.img} />
                            <Card.Body>
                            <Card.Title className="fw-bold">{details.Title}</Card.Title>
                            <Card.Text className="fw-bold">
                                ${details.price}
                            </Card.Text>
                            <Card.Text>
                                {details.Description}
                            </Card.Text>
                            <button  onClick={() => onSubmit(details._id)} className='buy-btn'>BUY NOW</button>
                            </Card.Body>
                            
                        </Card>
                        <Link to="/home"><button className="back-btn">Back</button></Link>
                </div>
               
            <div>
        </div>
    </div>
    )
}

export default Details
