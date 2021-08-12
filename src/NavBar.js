import { useState, useEffect } from "react";
import Logo from './Logo'
import Userbutton from './Userbutton'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom"

export default function NavBar(props) {
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
      <div className={`NavBar ${show && 'NavBarShow'}`}>
        <div className="NavFlexContainer">
          <Link to="/">
            <Logo to="/" height={'5em'} logoPick={0} />
          </Link>
          <div className="CentralNavBar">
  
            <Link className="NavLink" to="/menu">Menu</Link>
            <Link className="NavLink" to="/bag">Bag</Link>
            {/*<Link className="NavLink" to="/about">About</Link>
            <Userbutton className="NavLink" />*/}
          </div>
        </div>
      </div>
    )
  }