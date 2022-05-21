import React, { useEffect, useState } from 'react'
import Admin from '../Admin/Admin'
import { useParams } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51JvkjcJMIoToEynRdYWyFilmrGRjrvMKmXwDpcjGbx2Qnu7hSSKapdbGGZQ2FyZBO9zrgzcNeec7X5lWHRyJCZyB00cNxYRdKl');

const Pay = () => {
  const {_id } = useParams();
  const [pay, setPay] = useState({});
  useEffect(()=>{
fetch(`http://localhost:5000/booking/${_id}`)
.then(res => res.json())
.then(data => setPay(data))
  },[_id])
  console.log(pay);
  return (
    <div className='bg-book'>
      <Admin/>
     <main>
      <h4 className='p-3 fw-bold'>Please Pay for: {pay.serviceName}</h4>
        <h5>Pay: {pay.price}</h5>
        <Elements stripe={stripePromise}>
        <CheckoutForm 
          pay={pay}
        />
      </Elements>
     </main>
    </div>
  )
}

export default Pay