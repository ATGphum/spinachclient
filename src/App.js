import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home'
import About from './About'
import Cart from './Cart'
import Logo from './Logo'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="NavBar">
              <Logo/>
              <Link className="NavLink" to="/">Home</Link>
              <Link className="NavLink" to="/about">About</Link>
              <Link className="NavLink" to="/cart">Cart</Link>
        </div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;