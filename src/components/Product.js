import React, {Component} from 'react'
import {connect} from 'react-redux'

class Product extends Component {
  addProductToCart = (id) => {
    let index = this.props.cart.findIndex(product => product.id ===id)
    if(index === -1) {
      this.props.addToCart(id)
    } else {
      let quantity = this.props.cart[index]
      quantity++
      this.props.updateQuantity(id, quantity)
    }

  }


  render(){
    let {product} = this.props
    return (
      <div>
        <div>
          {/* <image>{product.img}</image> */}
        price:
        description:
        </div>
        <input/>
        <button>Add to Cart</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    product: state.product
  }
}

export default connect(mapStateToProps)(Product)
