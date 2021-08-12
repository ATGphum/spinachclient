import "./Menu.css"
import { useState, useEffect } from "react";
import PageTitle from "./PageTitle"
import PageHeader from "./PageHeader"
import MenuBox from "./MenuBox"

//<PageHeader headerColor={"#999"} headerContent={"Introducing Oppa, Australia's new and exciting soju startup."}/>
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

export default function Menu() {

    const bagStruct = itemList.map((item) => 
        ({
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            price: item.price,
            stock: item.stock,
            quantity: 0
        }));

    const [bag, setBag] = useState(bagStruct)

    function addToBag(item, amountToAdd=1){
        let cloneBag = [...bag]; //clone bag to prevent changes to hook
        let focusItem = cloneBag.filter((a) => a.id === item.id)[0];
        if(focusItem.quantity < focusItem.stock){
            focusItem.quantity += amountToAdd;
        }
        else{
            //show that the max quantity has been reached, given the supply!
        }
        
        setBag(cloneBag);
    }

    function removeFromBag(item, amountToRemove=1){
        let cloneBag = [...bag]; //clone bag to prevent changes to hook
        let focusItem = cloneBag.filter((a) => a.id === item.id)[0];
        if(focusItem.quantity > 0){
            focusItem.quantity -= amountToRemove;
        }
        else{
            //do nothing
        }
        
        setBag(cloneBag);
    }

    const menuItems = itemList.map((item) => 
        <MenuBox key={item.id} itemDetails={item} bagAdderFunc={addToBag} bagRemoverFunc={removeFromBag}/>
    );

    return (
        <div className='Menu'>
            <PageTitle titleColor={"#5ebcaf"} titleContent={"Menu"} fadeStartOffset={0} fadeEndOffset={250}/>
            <PageHeader headerColor={"#5ebcaf"} headerContent={"Browse our delicious range of Soju"}/>
            <div className="MenuBoxContainer">
                {menuItems}
            </div>
        </div>
    )
}