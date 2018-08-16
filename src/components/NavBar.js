import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import logo from '../images/logo.png'


class NavBar extends Component {
  render(){
    return (
      <div style={{height:'100px',width: '100%', backgroundColor: 'black', top: '0', border:'1px solid #0AE2C1', position: 'fixed'}}>
        <header className="Nav-header" >
          <Link to='/products'>
            <i style={{color:'#0AE2C1',borderRadius:'4px', padding: '10px', fontSize: '30px', margin: '20px', position: 'absolute', left:'10px', top:'10px'}}className="fas fa-bars"></i>
          </Link>
          <Link to='/'>
            <img style={{maxHeight:'100px', maxWidth: '90px'}}src={logo}/>
          </Link>
        </header>
        <Link to='/cart'>
          <div style={{color: 'black',padding: '10px', fontSize: '20px',backgroundColor:'#0AE2C1', borderRadius:'4px', margin: '20px', position:'absolute',right:'10px', top:'10px'}}>
          <i className="fas fa-shopping-cart"></i>
          </div>
        </Link>
      </div>
    )
  }
}

export default NavBar
