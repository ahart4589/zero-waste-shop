import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import {emptyCart} from '../redux/reducer'
import {withRouter} from 'react-router-dom'

const CURRENCY = 'USD'
const fromDollarToCent = amount => amount * 100

const sucessPayment = data => {
  alert('Payment Sucessful!')
}

const errorPayment = data => {
  alert('Payment error', data)
}

const onToken = (amount, description, emptyCart, history) => token =>
  axios.post(process.env.REACT_APP_PAYMENT_SERVER_URL,
      {
        description,
        source: token.id,
        currency: CURRENCY,
        amount,
      })
      .then(() => {
      sucessPayment()
      emptyCart()
      history.push('/thankyou')
    })
    .then(() => emptyCart())
    .catch(errorPayment)


const Checkout = ({name, description, amount, emptyCart, history}) => {
  let amountInCents = fromDollarToCent(amount)
  return <StripeCheckout
    name={name}
    description={description}
    amount={amountInCents}
    token={onToken(amountInCents, description, emptyCart, history)}
    currency={CURRENCY}
    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
  />
}


export default withRouter(connect(null,{emptyCart})(Checkout))