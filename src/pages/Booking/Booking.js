import React, { useEffect, useState } from 'react'
import { Card } from "react-bootstrap";
import Admin from '../Admin/Admin';
import './Booking.css'
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {_id} = useParams();
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);

    // SINGLE_USER_SERVICE_LOAD
    useEffect( ()=>{
        const url = `${process.env.REACT_APP_URL}/booking?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data));
    }, [])
// console.log(bookings);


// BTN_DELETED_USER_SERVICE
const handleDelete = id =>{
    const url = `${process.env.REACT_APP_URL}/services/${id}`
    fetch(url, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.deletedCount){
        alert('deleted');
        const remaining = bookings.filter(booking => booking._id !== id);
        setBookings(remaining);
      }
    
    })
  }
  
    return (
        <div className="bg-book" style={{paddingBottom: 410}}>
            <Admin/>
           <main>
           <marquee><h1 className="my-5 pink-color">WELCOME BOOKING LIST AND ALSO PAYMENT PAGE</h1></marquee>
           <div className='row'>
           {
                  bookings.map(booking => <div key={booking._id}  bookings={bookings}  className="col-lg-4 col-sm-6 col-12">
                     <>
                        <Card className='m-4 margin-card border-radius shadow-lg' style={{justifyContent: "center", alignItems: "center"}}>
                            <Card.Img variant="top" className='card-img mt-5' src={booking.img} />
                            <Card.Body><br/>
                            <i className='status-colors'>{booking.email}</i><br/><br/>
                            <Card.Title className="fw-bold">{booking.serviceName}</Card.Title>
                            <Card.Text className="fw-bold">
                                ${booking.price}
                            </Card.Text>
                            <Card.Text>
                                {booking.Description}
                            </Card.Text>
                        
                            <button className="btn-color" onClick={() => handleDelete(booking._id)}>Delete</button>
                            </Card.Body>
                           
                        </Card>
               </>
                  </div>)
}
           </div>
           </main>        
        </div>
    )
}

export default Booking
