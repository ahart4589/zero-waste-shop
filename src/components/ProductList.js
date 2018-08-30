


import React, {Component} from 'react'
import {connect} from 'react-redux'

import { getProducts, getCart } from '../redux/reducer';


import Product from './Product'
import background from '../images/sea.jpg'
import product from '../style/product.css'


class ProductList extends Component {
  constructor(){
        super()
        this.state = {
          searchProducts: ''
        }
      }
  componentDidMount() {
    this.props.getProducts() 
  }

  updateProductsSearch = (e) => {
    this.setState({
      searchProducts: e.target.value
    })
  }


  render(){
    const {searchProducts} = this.state
    const filteredProducts = this.props.productList.filter(product => {
      if (this.state.searchProducts){
        return product.name.toLowerCase().indexOf(searchProducts.toLowerCase()) !== -1
      } else {
        return true
      }
    })
    let filteredProductList = filteredProducts.map(product => {
      return( 
          <Product
            product={product}
            key={product.id}
            />
        )
    })
    return(
      <div className='background'>
           <h2 className='all-products' >All Products</h2>
             <input className='product-searchbar' type='text' placeholder='Search Products'
                value={this.state.searchProducts}
                onChange={this.updateProductsSearch}/>
           <div className='products-container'>
          {filteredProductList}
           </div>
           <footer className='footer'>
          Zero Waste Shop since 2018 
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-square"></i>
        </footer>
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