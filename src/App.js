import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'

import NavBar from './components/NavBar'
import Landing from './components/Landing'
import ProductList from './components/ProductList'
import Product from './components/Product'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails';
import WithScroll from './components/WithScroll'


import background from './images/sea.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          <Switch>
            <Route component={WithScroll(Landing)} exact path='/'/>
            <Route component={WithScroll(ProductList)} exact path='/products'/>
            <Route component={WithScroll(ProductDetails)} path='/products/:id'/>
            <Route component={WithScroll(Cart)} path='/cart'/>
          </Switch>
      </div>
    );
  }
}

export default App;
