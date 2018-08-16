import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import background from '../images/sea.jpg'

class Landing extends Component {
  render(){
    return (
      <div style={{backgroundColor: 'black', backgroundImage:{background}}}>
        <img style={{maxHeight: '150px', width: '100vw', marginTop: '100px'}}src={background}/>
        <h2 style={{color:'#0AE2C1', padding: '20px', fontFamily: 'Yanone Kaffeesatz', fontSize: '70px'}}>
          Help keep plastics out of our oceans
        </h2>
        <button style={{color: 'black',padding: '16px', backgroundColor:'#0AE2C1', borderRadius:'4px',  margin: '20px', fontSize: '20px',fontFamily: 'Yanone Kaffeesatz'}}>
          Why go waste free?
        </button>
        <img style={{maxHeight: '150px', width: '100vw', marginTop: '20px', marginBottom: '20px'}}src={background}/>
        <Link to='/products/1'>
            <img src='https://cdn.shopify.com/s/files/1/1797/9639/products/EcoBags_Cotton_Drawstring_Bag_2_1512x.jpg?v=1533662344' style= {{maxWidth:'300px', maxHeight: '300px', margin: '10px'}}></img>
        </Link>
        <br/>
        <Link to='/products/3'>
            <img src='https://cdn.shopify.com/s/files/1/1797/9639/products/Redecker_Travel_Soap_Box_4_1512x.jpg?v=1529592989' style= {{maxWidth:'300px', maxHeight: '300px',margin: '10px', color: 'black'}}></img>
        </Link>
        <Link to='/products'>
          <button style={{color: 'black',padding: '16px', backgroundColor:'#0AE2C1', borderRadius:'4px', margin: '20px',fontFamily: 'Yanone Kaffeesatz', fontSize:'20px'}}>
          Shop All Zero Waste Products
          </button>
        </Link>
      </div>
    )
  }
}

export default Landing
