import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import main from '../main.css'

import logo from '../images/logo.png'
import transparentLogo from '../images/logo_transparent.png'


class NavBar extends Component {
  render(){
  let total = 0
  for (let i = 0; i<this.props.cart.length; i++){
    total += this.props.cart[i].quantity
  }
    return (
      <nav id='navbar'>
        <header className="nav-header" >
          <Link to='/products'>
            <i className='hamburger fas fa-bars' ></i>
          </Link>
          <Link to='/'>
            <img className ='logo'src={transparentLogo}/>
          </Link>
        </header>
        <Link to='/cart'>
          <div className='cart-icon'>
          <i className="fas fa-shopping-cart">{total? total: null}</i>
          </div>
        </Link>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(NavBar)
