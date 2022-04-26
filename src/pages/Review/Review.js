import React from 'react'
import { useForm } from 'react-hook-form';
import Admin from '../Admin/Admin'

const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
  return (
    <div>
        <Admin/>
        <main class="bg-book text-start p-3">
        <h2>Review</h2>
            <form class="text-center text-bg" onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-2 w-50 p-2 border-color' placeholder='Your name' {...register("firstName")} /><br/><br/>
        <input className='mb-2 w-50 p-2 border-color' placeholder='Companys name Designation' {...register("lastName")} /><br/><br/>
        <textarea {...register("Description")} placeholder='Description' className='mb-2 w-50 p-2 border-color' /><br/>
        <input type="submit" className='border-color bg'/><br/>
        </form>
        </main>
    </div>
  )
}

export default Review