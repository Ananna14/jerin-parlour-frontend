import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Admin from '../Admin/Admin'
import Rating from './Rating/Rating';
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
    <div className="shadow-lg">
        <Admin/>
        <main className="bg-book text-start p-3">
        {/* form */}
            <form className="text-center text-bg col-12" onSubmit={handleSubmit(onSubmit)}>
            <Rating/>
            {/* <Form.Group className="mb-3" controlId="formGridRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control name="rating" onBlur={handleOnBlur} type="number" step="0.1" placeholder="0 to 5" />
                    </Form.Group> */}
        <input className='mb-2 w-50 p-2 border-color' placeholder='Your name' {...register("firstName")} /><br/><br/>
        <textarea {...register("Description")} placeholder='Description' className='mb-2 w-50 p-2 border-color' /><br/>
        <input type="submit" value="Submit" className='btn-color'/> 
        </form>
        </main>
    </div>
  )
}

export default Review
