import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import background from '../images/sea.jpg'
import shopping from '../images/shopping.png'
import jars from '../images/jars.png'
import straws from '../images/straws.png'
import sacks from '../images/sacks.png'
import flowers from '../images/flowers.png'
import nuts from '../images/nuts.png'



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
        <Link to='/products/83'>
          <img className='opt-landing-img' src={straws} alt='straw pic'></img>
        </Link>
        <Link to='/products/68'>
            <img className='landing-img' src={shopping} alt='shopping pic'></img>
        </Link>
        <br/>
        <Link to='/products/73'>
            <img className='landing-img' src={jars} alt='jar pic'></img>
        </Link>
        <Link to='/products/63'>
            <img className='opt-landing-img' src={flowers} alt='flower pic'></img>
        </Link>
        <Link to='/products/72'>
            <img className='opt-landing-img' src={nuts} alt='nut pic'></img>
        </Link>
        <Link to='/products/64'>
            <img className='opt-landing-img' src={sacks} alt='snacks pic'></img>
        </Link>
        </div>
        <h2 className='why-header'>
          Help keep plastics out of our oceans
        </h2>
        <button className='button-container landing-bottom-button'>
          <Link to='/products'>
            Shop All Zero Waste Products
          </Link>
        </button>
        <footer className='footer'>
          Zero Waste Shop since 2018 
            <a href='https://www.instagram.com/explore/tags/zerowasteshop/?hl=en' target='_blank' rel="noopener noreferrer">
              <i className="fab fa-instagram">
              </i>
            </a>
            <a href='https://www.facebook.com/search/str/zero+waste/keywords_search' target='_blank' rel="noopener noreferrer">
            <i className="fab fa-facebook-square">
              </i>
            </a>
        </footer>
      </div>
    )
  }
}

export default Landing
