import './App.css';
import React, { useState, useEffect }from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './NavBar'
import Home from './HomePage/Home'
import About from './About'
import ShoppingBag from './Bag/Bag'
import Menu from './Menu/Menu'
import BottomBar from './BottomBar'

function App() {

  const [bag, setBag] = useState([])

  useEffect(() => {

    fetch("http://127.0.0.1:8000/product/")
      .then(res => res.json())
      .then(result => {return result.map((item) => 
        ({
          title: item.title,
          imageUrl: item.imageUrl,
          miscimageUrl: item.miscimageUrl,
          price: item.price,
          stock: item.stock,
          description: item.description,
          branddescription: item.branddescription,
          quantity: 0
        }));
      })
      .then(result => setBag(result))
      .catch(err => console.log(err))

  }, [])

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/menu">
            <Menu bag={bag} setBag={setBag}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/bag">
            <ShoppingBag bag={bag} setBag={setBag}/>
          </Route>
          <Route path="/">
            <Home bag={bag}/>
          </Route>
        </Switch>
        <BottomBar/>
      </div>
    </Router>
  );
}

export default App;