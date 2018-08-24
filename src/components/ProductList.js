import React, {Component} from 'react'
import {connect} from 'react-redux'

import { getProducts, getCart } from '../redux/reducer';


import Product from './Product'
import background from '../images/sea.jpg'
import product from '../style/product.css'


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
            />
      
        )
    })
    // let {handleScroll} = this.props
    return(
      <div style={{backgroundColor: '#0B0C10', backgroundImage: `url(${background})`, backgroundSize: 'cover', overflow:'auto', height: '100vh'}}>
           <h2 className='all-products' >All Products</h2>
           <div className='products-container'>
          {productList}
           </div>
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