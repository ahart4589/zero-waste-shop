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


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route component={Landing} exact path='/'/>
          <Route component={ProductList} exact path='/products'/>
          <Route component={ProductDetails} path='/products/:id'/>
          <Route component={Cart} path='/cart'/>
        </Switch>
      </div>
    );
  }
}

export default App;
