import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {getProduct} from '../redux/reducer'

class ProductDetails extends Component {
  componentDidMount() {
    let {id} = this.props.match.params
    this.props.getProduct(id)
  }
  render (){
    return(
       <div>
        {this.props.product && <div>
          <img style={{maxWidth:'300px', maxHeight:'300px', margin:'20px'}}src={this.props.product.img}/>
          <p>{this.props.product.name}</p>
          <br/>
          <p>${this.props.product.price}</p>
          <br/>
          <p style={{margin:'20px'}}>{this.props.product.description}</p>
          <input style={{backgroundColor:'black', color:'white'}}type='text' value={this.props.quantity}/>
          </div>
          }
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    product: state.product
  }
}

export default connect(mapStateToProps, {getProduct})(ProductDetails)