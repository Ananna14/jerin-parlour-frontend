import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm} from "react-hook-form";

const Booking = () => {
    const {_id} = useParams();

    const [booking, setBooking] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/booking/${_id}`)
        .then(res => res.json())
        .then(data => setBooking(data))
    }, [])

      // form
      const { register, handleSubmit,reset } = useForm();

    return (
        <div>
            <h2>Booking page</h2>
            <div>

            </div>
            {/* form-part */}
            <div className="col col-lg-5 col-md-5 col-sm-12 col-12 pt-5 ">
                <form className='w-100'>
                    <input className='w-75 py-2 mx-auto rounded mb-2 border' {...register("studentName", { required: true, maxLength: 20 })} /><br/>
                    <input className='w-75 py-2 mx-auto rounded mb-2 border' {...register("studentEmail", { required: true })} type="email" /><br/>
                    <input className='w-75 py-2 mx-auto rounded mb-2 border' type="number" {...register("studentNumber")} placeholder="Phone Number" /><br/>
                    <textarea className='w-75 py-2 mx-auto rounded mb-2 border' type="number" {...register("studentMessage")} placeholder="Write you Something________________" /><br/>
                    <input className='w-75 py-2 mx-auto rounded mb-2 bg-primary text-white fw-bolder border-0'  type="submit" value="Submit" /> 
                
                </form>
            </div>

        </div>
    )
}

export default Booking
