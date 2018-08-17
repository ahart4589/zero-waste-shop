import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getProduct} from '../redux/reducer'
import { addToCart} from '../redux/reducer'
import { updateQuantity} from '../redux/reducer'

import background from '../images/sea.jpg'


class ProductDetails extends Component {
  componentDidMount() {
    let {id} = this.props.match.params
    this.props.getProduct(id)
  }

  addProductToCart = (id) => {
    // console.log(this.props.cart)
    let index = this.props.cart.findIndex(product => product.id ===id)
    if(index === -1) {
      this.props.addToCart(id)
    }
    else {
      let quantity = this.props.cart[index].quantity
      quantity++
      this.props.updateQuantity(id, quantity)
    
    }
  }

  render (){
    let {product} = this.props
    return(
       <div style={{backgroundColor: 'black', backgroundImage: `url(${background})`, backgroundSize: 'cover', overflow:'auto', height: '100vh'}}>
        {this.props.product && <div>
          <img style={{maxWidth:'300px', maxHeight:'300px', margin:'20px', marginTop: '120px'}}src={this.props.product.img}/>
          <h3 style={{color:'#0AE2C1'}}>{this.props.product.name}</h3>
          <br/>
          <p style={{color:'#0AE2C1'}}>${this.props.product.price}</p>
          <br/>
          <p style={{margin:'20px', color: '#0AE2C1'}}>{this.props.product.description}</p>
          {/* <input placeholder='quantity' style={{backgroundColor:'#8B88F0'}} type='text' value={this.props.quantity}/> */}
          </div>
          }
        <Link to='/products'>
            <button style={{color: 'black',padding: '10px', backgroundColor:'#0AE2C1', borderRadius:'4px', margin: '20px', fontSize:'14px',fontWeight:'bold'}}>
            Back to all products
            </button>
        </Link>
        <button style={{color: 'black',padding: '10px', backgroundColor:'#0AE2C1', borderRadius:'4px', margin: '20px', fontSize:'14px',fontWeight:'bold'}} onClick={() => this.addProductToCart(product.id)}>Add to Cart</button>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    product: state.product,
    cart: state.cart
  }
}

export default connect(mapStateToProps, {getProduct, updateQuantity, addToCart})(ProductDetails)