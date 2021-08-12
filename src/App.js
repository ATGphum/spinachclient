import './App.css';
import React, { useState }from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './NavBar'
import Home from './HomePage/Home'
import About from './About'
import ShoppingBag from './Bag'
import Menu from './Menu/Menu'
import BottomBar from './BottomBar'

function App() {

  let itemList = [
    { 
        id: 0,
        title: "Chilsung soju",
        imageUrl: "https://justliquor.com.au/1080-large_default/chamisul-soju.jpg",
        price: 19,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart."
    },
    { 
        id: 1,
        title: "Andong soju",
        imageUrl: "https://justliquor.com.au/1015-large_default/good-day-soju-citron.jpg",
        price: 6,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart."
    },
    { 
        id: 2,
        title: "Churum soju",
        imageUrl: "https://justliquor.com.au/2776-large_default/chum-churum-original-soju.jpg",
        price: 10,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart."
    },
    { 
        id: 3,
        title: "Philippe soju",
        imageUrl: "https://justliquor.com.au/1080-large_default/chamisul-soju.jpg",
        price: 19,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart."
    },
    { 
        id: 4,
        title: "Phum soju",
        imageUrl: "https://justliquor.com.au/1015-large_default/good-day-soju-citron.jpg",
        price: 6,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart."
    },
    { 
        id: 5,
        title: "Tent soju",
        imageUrl: "https://justliquor.com.au/2776-large_default/chum-churum-original-soju.jpg",
        price: 10,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart."
    },
    { 
        id: 6,
        title: "Xiaojun soju",
        imageUrl: "https://justliquor.com.au/1080-large_default/chamisul-soju.jpg",
        price: 19,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart."
    },
    { 
        id: 7,
        title: "Korean soju",
        imageUrl: "https://justliquor.com.au/1015-large_default/good-day-soju-citron.jpg",
        price: 6,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart."
    },
    { 
        id: 8,
        title: "Eugene soju",
        imageUrl: "https://justliquor.com.au/2776-large_default/chum-churum-original-soju.jpg",
        price: 10,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart."
    },
  ];

  const bagStruct = itemList.map((item) => 
({
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    price: item.price,
    stock: item.stock,
    description: item.description,
    quantity: 0
  }));

  const [bag, setBag] = useState(bagStruct)

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
            <Home />
          </Route>
        </Switch>
        <BottomBar/>
      </div>
    </Router>
  );
}

export default App;