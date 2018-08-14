import React, {Component} from 'react'
import {connect} from 'react-redux'
import{Link} from 'react-router-dom'

import { getCart } from '../redux/reducer';

class Cart extends Component {
  componentDidMount(){
    this.props.getCart()
  }
  render(){
    let total = 0
    let cart = this.props.cart.map(product => {
      total += (product.price * product.quantity)
      return (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>${product.price} each</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      )
    })
    return (
      <div style={{backgroundColor:'#581845', height: '100%', widith:'100%', color: 'white'}}>
       <h2>Cart</h2>
       <Link to='/products'>
          <button style={{color: 'white',padding: '16px', backgroundColor:'#0AE2C1', borderRadius:'4px', margin: '20px'}}>Continue Shopping</button>
       </Link>
       {cart}
       <br/>
       <p>Cart Total: ${total}</p>
       <button style={{color: 'white',padding: '16px', backgroundColor:'#0AE2C1', borderRadius:'4px', margin: '20px'}}>Checkout</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, {getCart})(Cart)