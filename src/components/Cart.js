import React, {Component} from 'react'
import {connect} from 'react-redux'
import{Link} from 'react-router-dom'
import { getCart, updateQuantity, deleteFromCart } from '../redux/reducer'

import Checkout from './Checkout'

class Cart extends Component {
  componentDidMount(){
    this.props.getCart()
  }

  updateQuantity = (id,update,quantity) => {
    if(update === 'up'){
      quantity++
    } else if (update === 'down' && quantity > 1) {
      quantity--
    } 
    this.props.updateQuantity(id, quantity)
  }

  render(){
    let total = 0
    let cart = this.props.cart.map(product => {
      total += (product.price * product.quantity)
      return (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>${product.price} each</p>
          <p>Quantity: {product.quantity}
              <button style={{fontSize:'14px',color: 'black',padding: '6px', backgroundColor:'#0AE2C1', borderRadius:'4px', margin: '5px'}} onClick={() => this.updateQuantity(product.id, 'up', product.quantity)}>▲</button>
              <button style={{fontSize:'14px',color: 'black',padding: '6px', backgroundColor:'#0AE2C1', borderRadius:'4px', margin: '5px'}} onClick={() => this.updateQuantity(product.id, 'down', product.quantity)}>▼</button>
              <button style={{color: 'black',fontWeight:'bold', padding: '8px', backgroundColor:'#0AE2C1', borderRadius:'4px', margin: '5px'}} onClick={() => this.props.deleteFromCart(product.id)}>Remove</button>
          </p>
        </div>
      )
    })
    return (
      <div style={{backgroundColor:'black', height: '100vh', widith:'100%', color: '#0AE2C1', marginTop: '100px'}}>
        <h1 style={{color: '#0AE2C1', paddingTop: '20px', paddingBottom: '15px'}}>Cart</h1>
        <Link to='/products'>
            <button style={{color: 'black',padding: '10px', backgroundColor:'#0AE2C1', borderRadius:'4px', margin: '20px', fontSize:'14px',fontWeight:'bold'}}>Continue Shopping</button>
        </Link>
        {cart}
        <br/>
        <p style={{marginBottom:'20px'}}>Cart Total: ${total}</p>
        {/* <button style={{color: 'black', fontSize:'14px',fontWeight:'bold',padding: '12px', backgroundColor:'#0AE2C1', borderRadius:'4px', margin: '20px'}}>Checkout</button> */}
        <Checkout
          name={'Zero Waste Shop'}
          description={'Purchase'}
          amount={total}
          />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, {getCart, updateQuantity, deleteFromCart })(Cart)