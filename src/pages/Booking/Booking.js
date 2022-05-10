import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm} from "react-hook-form";
import Admin from '../Admin/Admin';
import './Booking.css'

const Booking = () => {
    // const {_id} = useParams();

    // const [booking, setBooking] = useState([]);

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/booking/${_id}`)
    //     .then(res => res.json())
    //     .then(data => setBooking(data))
    // }, [])

    //   // form
    //   const { register, handleSubmit,reset } = useForm();

    return (
        <div>
            <Admin/>
           <main>
           <h2 className="bg-book fw-bold p-3 text-start">Service List</h2>
           </main>
    

        
        </div>
    )
}

export default Booking
