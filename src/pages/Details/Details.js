import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";

const Details = () => {
    const { register, handleSubmit } = useForm();
    const {_id} = useParams();
    // const [details, setDetails] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/details/${_id}`)
        .then(res => res.json())
        .then(data =>console.log(data))
    }, [])

    const onSubmit = data => {
        console.log(data)
       
      
    };
    return (
        <div className='d-flex'>
           <div className='mt-5 mb-2'>
              {/* <p>{details?.Title}</p>
              <p>{details?.Description}</p>
              <p>{details?.price}</p>
              <p>{details?.img}</p> */}
           </div>
           {/* 2nd-part */}
           <div>
           <form onSubmit={handleSubmit(onSubmit)} className='mt-5 mb-2 w-100'>
                <input {...register("Title")} placeholder='Enter Title' className=' rounded mb-2 w-50 p-2 border-color'  /><br/>
                <input {...register("Phone Number")} placeholder='Enter Title' className='rounded mb-2 w-50 p-2 border-color'  /><br/>
                <textarea {...register("Description")} placeholder='Write you Something______________' className='rounded mb-2 w-50 p-2 border-color' /><br/>
                 <input type="submit" className='border-color bg'/><br/>
            </form>
           </div>
        </div>
    )
}

export default Details
