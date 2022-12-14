import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import Admin from '../Admin/Admin';
import Footer from '../Footer/Footer';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://jerin-server.vercel.app/services', data)
        .then(res =>{
            reset();
            alert('Successfully Submit');
            console.log(res)
        })
      
    };

    return (
        <div>
            <Admin/>
             <main className="bg-book">
             <h2 className='pink-color p-3'>Add Service</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-5 mb-2 text-bg'>
                    <input {...register("Title")} placeholder='Enter Title' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <input {...register("img")} placeholder='img-url' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <input {...register("price")} placeholder='price' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <textarea {...register("Description")} placeholder='Description' className='mb-2 w-50 p-2 border-color' /><br/>
                    <input type="submit" value="Submit" className='btn-color'/> 
                </form>
             </main>
        </div>
    )
}

export default AddService
