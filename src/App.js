import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css'
import './style/navbarlanding.css'

import {getUser} from './redux/reducer'


import NavBar from './components/NavBar'
import Landing from './components/Landing'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails';
import WithScroll from './components/WithScroll'
import Why from './components/Why'
import Thankyou from './components/Thankyou'


class App extends Component {
  componentDidMount(){
    this.props.getUser()
  }
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
            <Route component={WithScroll(Landing)} exact path='/'/>
            <Route component={WithScroll(ProductList)} exact path='/products'/>
            <Route component={WithScroll(ProductDetails)} path='/products/:id'/>
            <Route component={WithScroll(Cart)} path='/cart'/>
            <Route component={WithScroll(Why)} path='/why'/>
            <Route component={WithScroll(Thankyou)} path='/thankyou'/>
         </Switch>
      </div>
    )
  }
}

export default withRouter(connect(null, {getUser})(App))

