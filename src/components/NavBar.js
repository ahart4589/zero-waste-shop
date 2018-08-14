import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class NavBar extends Component {
  render(){
    return (
      <div style={{height:'100px',width: '100%', backgroundColor: 'transparent', top: '0', border:'1px solid #0AE2C1'}}>
        <header className="Nav-header" >
        <Link to='/'>
          <h2 style={{color:'#0AE2C1', textDecoration:'none'}} className="Nav-title">Zero Waste Shop</h2>
        </Link>
        </header>
        <Link to='/cart'>
          <div>
            Cart
          </div>
        </Link>
      </div>
    )
  }
}

export default NavBar
