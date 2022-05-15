import React, { useEffect, useState } from 'react'
import { Table } from "react-bootstrap";
import Admin from '../Admin/Admin';
import './Booking.css'
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    // const {_id} = useParams();
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);

    useEffect( ()=>{
        const url = `http://localhost:5000/booking?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data));
    }, [])

    return (
        <div>
            <Admin/>
           <main>
           <h2 className="bg-book fw-bold p-3 text-start">Service List</h2>
           <h2>{bookings.length}</h2>
           {/* teble */}
           <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Item</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Delete</th>
                    </tr>
                </thead>
               
                <tbody>
              {/* {
                  bookings.map(booking => <Details key={booking._id}  bookings={bookings} setBookings={setBookings}></Details>)
              } */}
                    {/* <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr> */}
                    
                </tbody>
            </Table>
           </main>
    

        
        </div>
    )
}

export default Booking
