import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getCart } from '../redux/reducer'
import main from '../style/navbarlanding.css'
import Menu from './Menu'

import logo from '../images/new_logo_transparent.png'


class NavBar extends Component {
  componentDidMount(){
    this.props.getCart()
  }
  render(){
  let total = 0
  for (let i = 0; i<this.props.cart.length; i++){
    total += this.props.cart[i].quantity
  }
    return (
      <nav id='navbar'>
        <header className="nav-header" >
          <Link to='/'>
            <img className ='logo'src={logo}/>
          </Link>
          <h1 className='full-zero-header'>
            <Link to='/'>
              Zero Waste Shop
            </Link>
          </h1>
        </header>
        <div className='nav-links'>
          <Link to='/products'>
            <div className='nav-shop-all'>
            Shop All
            </div>
          </Link>
          <Link to='/why'>
            <div className='nav-why'>
              Why Zero Waste?
            </div>
          </Link>
          <Link to='/cart'>
            <div className='cart-icon'>
              <i className="fas fa-shopping-cart">{total? total: null}</i>
            </div>
            <div className='cart-text'>
              Cart ( {total? total: null} )
            </div>
          </Link>
        </div>
        <Menu/>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps,{getCart})(NavBar)
