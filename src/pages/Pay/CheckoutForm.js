import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react'
import { useState } from 'react';

const CheckoutForm = ({ pay }) => {
    const {price} = pay;
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState('');

    const handleSubmit = async ( e ) =>{
        e.preventDefault();
        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }
       // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if(error){
          setError(error.message);
      }
      else{
          setError('');
          console.log(paymentMethod);
      }
    }
  return (
    <div>
           <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay {price}
      </button>
    </form>
    {
        error && <p style={{color: 'red'}}>{error}</p>
    }
    </div>
  )
}

export default CheckoutForm