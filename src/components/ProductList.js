import React from 'react'
import {connect} from 'react-redux'
import Product from './Product'

function ProductList(props) {
  return(
    <Product/>
  )
}

function mapStateToProps(state) {
  return {
    productList: state.productList
  }
}

export default connect(mapStateToProps)(ProductList)