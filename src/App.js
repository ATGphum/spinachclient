import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './NavBar'
import Home from './HomePage/Home'
import About from './About'
import Bag from './Bag'
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
          <Route path="/bag">
            <Bag />
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