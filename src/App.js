import './App.css';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './HomePage/Home'
import About from './About'
import Cart from './Cart'
import Logo from './Logo'
import Menu from './Menu'
import Userbutton from './Userbutton'
import BottomBar from './BottomBar'

function App() {
  const [show, setShow] = useState(true)
  const [lastScrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {

    const controlNavbar = () => {
      let currentPosition = window.scrollY;
      
      if (currentPosition > lastScrollPosition) {
        setShow(false)
      }
      if (currentPosition < lastScrollPosition) {
        setShow(true)
      }
      
      setScrollPosition(currentPosition);
    }

    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollPosition])

  return (
    <Router>
      <div className="App">
        <div className={`NavBar ${show && 'NavBarShow'}`}>
          <div className="NavFlexContainer">
            <Link to="/">
              <Logo to="/" height={'4em'}/>
            </Link>
            <div className="CentralNavBar">

              <Link className="NavLink" to="/menu">Menu</Link>
              <Link className="NavLink" to="/cart">Cart</Link>
              <Link className="NavLink" to="/about">About</Link>
              <Userbutton className="NavLink" />
            </div>
          </div>
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
        <BottomBar/>
      </div>
    </Router>
  );
}

export default App;