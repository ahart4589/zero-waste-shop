import React, {Component} from 'react'
import {connect} from 'react-redux'
import{Link} from 'react-router-dom'
import { getCart, updateQuantity, deleteFromCart } from '../redux/reducer'

import cart from '../style/cart.css'

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
        <div key={product.id} className='cart'>
        <Link to={`/products/${product.id}`}>
          <img className='cart-img'src={product.img}></img>
        </Link> 
          <h4>{product.name}</h4>
          <p>${product.price} each</p>
          <p>Quantity: {product.quantity}
              <button className='cart-arrow-button'style={{}} onClick={() => this.updateQuantity(product.id, 'up', product.quantity)}>▲</button>
              <button  className='cart-arrow-button' onClick={() => this.updateQuantity(product.id, 'down', product.quantity)}>▼</button>
              <button className='cart-remove-button' onClick={() => this.props.deleteFromCart(product.id)}>Remove</button>
          </p>
          <br/>
        </div>
      )
    })
    return (
      <div className='main-cart background'>
        <h1 className='cart-heading'>Cart</h1>
        <Link to='/products'>
            <button className='continue-button'>Continue Shopping</button>
        </Link>
        <div className='cart-container'>
          {cart}
        </div>
        <br/>
        <div className='cart-total'>
          <p>Cart Total: ${total}</p>
          <Checkout
            name={'Zero Waste Shop'}
            description={'Purchase'}
            amount={total}
            />
        </div>
        {/* <footer className='footer'>
          Zero Waste Shop since 2018 
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook-square"></i>
        </footer> */}
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