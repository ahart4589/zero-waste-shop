import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Landing extends Component {
  render(){
    return (
      <div style={{backgroundImage:'https://images.unsplash.com/photo-1504711988183-b5f6f0b1cb8a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=967c1f28fc7a50072b8ffb5c9b75ceab&auto=format&fit=crop&w=750&q=80'}}>
        <h1 style={{color:'#3A34E1', fontFamily:''}}>
          Help keep plastics out of our oceans
        </h1>
        <button style={{color: 'white',padding: '16px', backgroundColor:'#3A34E1', borderRadius:'4px', margin: '20px'}}>
          Why go waste free?
        </button>
        <br/>
        <img src='https://cdn.shopify.com/s/files/1/1797/9639/products/EcoBags_Cotton_Drawstring_Bag_2_1512x.jpg?v=1533662344' style= {{maxWidth:'200px', maxHeight: '200px'}}></img>
        <img src='https://cdn.shopify.com/s/files/1/1797/9639/products/Redecker_Travel_Soap_Box_4_1512x.jpg?v=1529592989' style= {{maxWidth:'200px', maxHeight: '200px'}}></img>
        <Link to='/products'>
          <button style={{color: 'white',padding: '16px', backgroundColor:'#0AE2C1', borderRadius:'4px', margin: '20px'}}>
          Shop All Zero Waste Products
          </button>
        </Link>
      </div>
    )
  }
}

export default Landing
