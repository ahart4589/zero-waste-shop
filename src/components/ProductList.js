import React, {Component} from 'react'
import {connect} from 'react-redux'
import Product from './Product'

import { getProducts, getCart } from '../redux/reducer';
import ProductDetails from './ProductDetails';

class ProductList extends Component {

  componentDidMount() {
    this.props.getProducts()
    
  }

  render(){
    let productList = this.props.productList.map(product => {
      return(
  
          <Product
            product={product}
            key={product.id}
            // updateCart={this.props.updateCart}
            />
      
        )
    })
    return(
      <div style={{backgroundColor: 'black'}}>
           <h2 style={{padding: '20px', color: '#0AE2C1', backgroundColor: 'black', marginTop: '100px'}}>All Products</h2>
          {productList}
      </div>
    )
  }  
}

function mapStateToProps(state) {
  return {
    productList: state.productList
  }
}

export default connect(mapStateToProps, {getProducts, getCart})(ProductList)