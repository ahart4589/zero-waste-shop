import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getCart, logout } from '../redux/reducer'
import main from '../style/navbarlanding.css'
import Menu from './Menu'
import Search from './Search'

import logo from '../images/new_logo_transparent.png'


class NavBar extends Component {
  componentDidMount(){
    this.props.getCart()
  }

  // Authentication
  login = () => {
    let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
    let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
    let scope = encodeURIComponent('openid profile email')
    let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)

    let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`

    window.location = location
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
          {/* Authentication */}
          <div className='login-logout'>
            {this.props.user ?
            <div>
              <h1 style={{fontSize: '18px', fontFamily: 'Raleway', color:'#45A29E', position: 'absolute', top: '10px', right: '14px'}}>Logged in as {this.props.user.name}</h1>
              <button className='login-logout-buttons' onClick={this.props.logout}>Logout</button>
            </div>:
            <button className='login-logout-buttons' onClick={this.login}>Login</button>}
          </div>

          <Link to='/cart'>
            <div className='cart-icon'>
              <i className="fas fa-shopping-cart">{total? total: null}</i>
            </div>
            <div className='cart-text'>
              Cart ( {total? total: null} )
            </div>
          </Link>
        </div>
        <Menu user={this.props.user} login={this.login} logout={this.props.logout}/>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart,
    user: state.user
  }
}

export default connect(mapStateToProps,{getCart, logout})(NavBar)
