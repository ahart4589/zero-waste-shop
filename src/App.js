import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import './style/navbarlanding.css'


import NavBar from './components/NavBar'
import Landing from './components/Landing'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails';
import WithScroll from './components/WithScroll'
import Why from './components/Why'


class App extends Component {
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
          </Switch>
      </div>
    )
  }
}

export default App

