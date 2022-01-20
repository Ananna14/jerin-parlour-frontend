import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
        .then(res =>{
            console.log(res)
        })
      
    };

    return (
        <div>
              <h2 className='text-center my-5 pink-color'>Add Service</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-5 mb-2 '>
                    <input {...register("Title")} placeholder='Enter Title' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <input {...register("img")} placeholder='img-url' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <input {...register("price")} placeholder='price' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <textarea {...register("Description")} placeholder='Description' className='mb-2 w-50 p-2 border-color' /><br/>
                    <input type="submit" className='border-color bg'/><br/>
                </form>
        </div>
    )
}

export default AddService
