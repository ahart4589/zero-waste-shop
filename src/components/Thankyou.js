import React from 'react'
import {connect} from 'react-redux'
import { emptyCart } from '../redux/reducer'

import background from '../images/sea.jpg'

 function Thankyou(props) {
   let orderId = props.orderId
  return(
    <div style={{backgroundColor: '#0B0C10', backgroundImage: `url(${background})`, backgroundSize: 'cover', overflow:'auto', height: '100vh'}}>
      <div className='thankyou'>
        Thank you for your order!
        
        <p>
        Your order number is: 
        </p>
        <div className='order-number'>
          {orderId}
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    orderId: state.orderId
  }
}


export default connect(mapStateToProps,{emptyCart})(Thankyou)