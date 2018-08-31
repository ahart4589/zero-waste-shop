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

const login = () => {
  let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
  let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
  let scope = encodeURIComponent('openid profile email')
  let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback?path=cart`)

  let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`

  window.location = location
}

const onToken = (amount, description, emptyCart, history) => token =>
  axios.post(process.env.REACT_APP_PAYMENT_SERVER_URL,
      {
        description,
        source: token.id,
        currency: CURRENCY,
        amount,
      })
      .then((results) => {
      sucessPayment()
      emptyCart(results.data.orderId)
      history.push('/thankyou')
    })
    .catch(errorPayment)


const Checkout = ({name, description, amount, emptyCart, history, user}) => {
  let amountInCents = fromDollarToCent(amount)
  
  if(user) {
  return <StripeCheckout
    name={name}
    description={description}
    amount={amountInCents}
    token={onToken(amountInCents, description, emptyCart, history)}
    currency={CURRENCY}
    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
  />
  } else {
    return <div onClick={login}>Login please</div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}


export default withRouter(connect(mapStateToProps,{emptyCart})(Checkout))