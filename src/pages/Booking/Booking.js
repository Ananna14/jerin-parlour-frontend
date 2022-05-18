import React, { useEffect, useState } from 'react'
import { Card } from "react-bootstrap";
import Admin from '../Admin/Admin';
import './Booking.css'
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    // const {_id} = useParams();
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);

    // SINGLE_USER_SERVICE_LOAD
    useEffect( ()=>{
        const url = `http://localhost:5000/booking?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data));
    }, [])
// console.log(bookings);


// BTN_DELETED_USER_SERVICE
const handleDelete = id =>{
    const url = `http://localhost:5000/services/${id}`
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
        <div>
            <Admin/>
           <main>
           <h2 className="bg-book fw-bold p-3 text-start">Service List</h2>
           <h2>{bookings.length}</h2>
           {/* <h2>{bookings.Title}</h2> */}
           
              {
                  bookings.map(booking => <div key={booking._id}  bookings={bookings} >
                     <>
                     <i className='fw-bold btn-Success'>{booking.email}</i><br/>
                <div className="row">
                <div className='col-lg-4 col-12'>
                    
                    <Card className='shadow m-4 h-100'>
                    
                        <Card.Img variant="top" className='card-img mt-5' src={booking.img} />
                        <Card.Body>
                      
                        <Card.Title className="fw-bold">{booking.serviceName}</Card.Title>
                        <Card.Text className="fw-bold">
                            {booking.price}
                        </Card.Text>
                        <Card.Text>
                            {booking.Description}
                        </Card.Text>
                        <button onClick={() => handleDelete(booking._id)}>Delete</button>
                        </Card.Body>
                      
                    </Card>
      
            </div>
                </div>
             </>
                  </div>)
              }
           </main>
    

        
        </div>
    )
}

export default Booking
