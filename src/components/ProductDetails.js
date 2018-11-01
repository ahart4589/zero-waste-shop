import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getProduct} from '../redux/reducer'
import { addToCart} from '../redux/reducer'
import { updateQuantity} from '../redux/reducer'


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
      <div className='product-details-container background-color'>
        {this.props.product && <div className='product-details'>
          <img id='details-img'src={this.props.product.img} alt='product pic'/>
          <div className='details-info'>
            <h3>{this.props.product.name}</h3>
            <p>${this.props.product.price}</p>
            <button className='product-button' onClick={() => this.addProductToCart(product.id)}>Add to Cart</button>
            <br/>
            <p className='description'>{this.props.product.description}</p>
            </div>
          </div>
          }
        <button className='products-back'>
          <Link to='/products'>
            Back to all products
          </Link>
        </button>
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