import './App.css';
import React, { useState, useEffect } from "react";
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
import Menu from './Menu'
import Userbutton from './Userbutton'

function App() {
  const [show, setShow] = useState(true)
  const [lastScrollPosition, setScrollPosition] = useState(0)

  const controlNavbar = () => {
    let currentPosition = window.scrollY
    if (currentPosition > lastScrollPosition) {
      setShow(false)
    } else {
      setShow(true)
    }
    setScrollPosition(currentPosition)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <div className={`NavBar ${show && 'NavBarShow'}`}>
          <Link to="/"><Logo to="/" /></Link>
          <div className="CentralNavBar">
            <Link className="NavLink" to="/menu">Menu</Link>
            <Link className="NavLink" to="/cart">Cart</Link>
            <Link className="NavLink" to="/about">About</Link>
          </div>
          <Userbutton />
        </div>
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
      </div>
    </Router>
  );
}

export default App;