import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'

import NavBar from './components/NavBar'
import Landing from './components/Landing'
import ProductList from './components/ProductList'
import Product from './components/Product'
import Cart from './components/Cart'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Zero Waste Shop</h1>
        </header>
        <NavBar/>
        <Switch>
          <Route component={Landing} exact path='/'/>
          <Route component={ProductList} path='/products'/>
          <Route component={Product} path='/products/:id'/>
          <Route component={Cart} path='/cart'/>
        </Switch>
      </div>
    );
  }
}

export default App;
