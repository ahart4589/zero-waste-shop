import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import { addToCart} from '../redux/reducer'
import { updateQuantity} from '../redux/reducer'

class Product extends Component {
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


  render(){
    let {product} = this.props
    return (
      <div>
          <div className='products' key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.img}/>
            </Link>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className='product-button' onClick={() => this.addProductToCart(product.id)}>Add to Cart</button>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, {addToCart, updateQuantity})(Product)
