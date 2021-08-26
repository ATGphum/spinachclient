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
import ShoppingBag from './Bag/Bag'
import Menu from './Menu/Menu'
import BottomBar from './BottomBar'

function App() {

  let itemList = [
    { 
        id: 0,
        title: "Chilsung soju",
        imageUrl: "https://justliquor.com.au/1080-large_default/chamisul-soju.jpg",
        miscimageUrl: "https://i0.wp.com/www.plantnet.com.au/wp-content/uploads/plantnet-rootstock-plum-Dwarf-Damson.jpg?fit=2114%2C1400&ssl=1",
        price: 19,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart.",
        branddescription: "Chilsung is known for its amazing quality and care"
    },
    { 
        id: 1,
        title: "Andong soju",
        imageUrl: "https://justliquor.com.au/1015-large_default/good-day-soju-citron.jpg",
        miscimageUrl: "https://www.carvingajourney.com/wp-content/uploads/2021/07/Onggi002-750x500.jpg",
        price: 6,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart.",
        branddescription: "Chilsung is known for its amazing quality and care"
    },
    { 
        id: 2,
        title: "Churum soju",
        imageUrl: "https://justliquor.com.au/2776-large_default/chum-churum-original-soju.jpg",
        miscimageUrl: "https://cdn.vox-cdn.com/thumbor/RlvyGHIno4ECic9rMOke9_psDQM=/160x0:1120x720/1200x800/filters:focal(160x0:1120x720)/cdn.vox-cdn.com/uploads/chorus_image/image/55904861/1_TQEtyXxEhY-p_vj1bOTIng.0.jpeg",
        price: 10,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart.",
        branddescription: "Chilsung is known for its amazing quality and care"
    },
    { 
        id: 3,
        title: "Philippe soju",
        imageUrl: "https://justliquor.com.au/1080-large_default/chamisul-soju.jpg",
        miscimageUrl: "https://media.gq.com/photos/5bd0a982039397509ca2f67d/16:9/w_1280,c_limit/drink-soju-gq.jpg",
        price: 19,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart.",
        branddescription: "Chilsung is known for its amazing quality and care"
    },
    { 
        id: 4,
        title: "Phum soju",
        imageUrl: "https://justliquor.com.au/1015-large_default/good-day-soju-citron.jpg",
        price: 6,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart.",
        branddescription: "Chilsung is known for its amazing quality and care"
    },
    { 
        id: 5,
        title: "Tent soju",
        imageUrl: "https://justliquor.com.au/2776-large_default/chum-churum-original-soju.jpg",
        price: 10,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart.",
        branddescription: "Chilsung is known for its amazing quality and care"
    },
    { 
        id: 6,
        title: "Xiaojun soju",
        imageUrl: "https://justliquor.com.au/1080-large_default/chamisul-soju.jpg",
        price: 19,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart.",
        branddescription: "Chilsung is known for its amazing quality and care"
    },
    { 
        id: 7,
        title: "Korean soju",
        imageUrl: "https://justliquor.com.au/1015-large_default/good-day-soju-citron.jpg",
        price: 6,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart.",
        branddescription: "Chilsung is known for its amazing quality and care"
    },
    { 
        id: 8,
        title: "Eugene soju",
        imageUrl: "https://justliquor.com.au/2776-large_default/chum-churum-original-soju.jpg",
        price: 10,
        stock: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart.",
        branddescription: "Chilsung is known for its amazing quality and care"
    },
  ];

  const bagStruct = itemList.map((item) => 
({
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    miscimageUrl: item.miscimageUrl,
    price: item.price,
    stock: item.stock,
    description: item.description,
    branddescription: item.branddescription,
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
            <Home bag={bag}/>
          </Route>
        </Switch>
        <BottomBar/>
      </div>
    </Router>
  );
}

export default App;