import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
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
          <h3>{this.props.product.name}</h3>
          <br/>
          <p>${this.props.product.price}</p>
          <br/>
          <p style={{margin:'20px'}}>{this.props.product.description}</p>
          <input placeholder='quantity' style={{backgroundColor:'#8B88F0'}} type='text' value={this.props.quantity}/>
          </div>
          }
        <Link to='/products'>
            <button style={{color: 'white',padding: '10px', backgroundColor:'#0AE2C1', borderRadius:'4px', margin: '20px'}}>
            Back to all products
            </button>
        </Link>
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