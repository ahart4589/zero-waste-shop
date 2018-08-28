import React from 'react'

import background from '../images/sea.jpg'
import StripeCheckout from 'react-stripe-checkout';

export default function Thankyou() {
  return(
    <div style={{backgroundColor: '#0B0C10', backgroundImage: `url(${background})`, backgroundSize: 'cover', overflow:'auto', height: '100vh'}}>
      <div className='thankyou'>
        Thank you for your order!
        Your order number is:
      </div>

    </div>
  )
}