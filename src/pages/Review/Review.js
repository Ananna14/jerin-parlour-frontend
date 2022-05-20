import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import Admin from '../Admin/Admin'
import './Review.css'

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://morning-lowlands-93777.herokuapp.com/review', data)
        .then(res => {
          // console.log(res);
          if(res.data.insertedId) {
            alert('added successfully');
            reset();
          }
        })
    };
  return (
    <div>
        <Admin/>
        <main class="bg-book text-start p-3">
        <h2>Review</h2>
            <form class="text-center text-bg col-12" onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-2 w-50 p-2 border-color' placeholder='Your name' {...register("firstName")} /><br/><br/>
        <textarea {...register("Description")} placeholder='Description' className='mb-2 w-50 p-2 border-color' /><br/>
        <input type="submit" value="Submit" className='btn-color'/> 
        </form>
        </main>
    </div>
  )
}

export default Review