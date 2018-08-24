import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import background from '../images/sea.jpg'
import shopping from '../images/shopping.png'
import jars from '../images/jars.png'
import straws from '../images/straws.png'

class Landing extends Component {


  render(){
    return (
      <div className='landing' style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', overflow:'auto'}}>
        <h1 className='zero-header'>Zero Waste Shop</h1>
        <div className="button-container">
            <button className= 'landing-button'>
          <Link to='/why'>
              Why go waste free?
          </Link>  
            </button>
        </div>
        <div className='landing-imgs'>
        <Link to='/products/2'>
          <img className='opt-landing-img' src={straws}></img>
        </Link>
        <Link to='/products/1'>
            <img className='landing-img' src={shopping}></img>
        </Link>
        <br/>
        <Link to='/products/3'>
            <img className='landing-img' src={jars}></img>
        </Link>
        </div>
        <h2 className='why-header'>
          Help keep plastics out of our oceans
        </h2>
        <Link to='/products'>
          <button className='landing-bottom-button'>
          Shop All Zero Waste Products
          </button>
        </Link>
      </div>
    )
  }
}

export default Landing
