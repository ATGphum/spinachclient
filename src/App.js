import './App.css';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './NavBar'
import Home from './HomePage/Home'
import About from './About'
import Cart from './Cart'

import Menu from './Menu/Menu'

import BottomBar from './BottomBar'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/> 
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <BottomBar/>
      </div>
    </Router>
  );
}

export default App;