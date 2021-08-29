import "./Menu.css"
import { useState, useEffect, useRef } from "react";
import PageTitle from "./PageTitle"
import PageHeader from "./PageHeader"
import MenuBox from "./MenuBox"
import BagAlert from "./BagAlert"

//<PageHeader headerColor={"#999"} headerContent={"Introducing Oppa, Australia's new and exciting soju startup."}/>


export default function Menu(props) {
    let bag = props.bag;
    let setBag = props.setBag;


    const [lastModifiedItem, setLastModifiedItem] = useState(-1)
    const [bagAlert, setBagAlert] = useState(<div></div>)
    const [showAlert, setShowAlert] = useState(false)

    function editItemQuantity(item, amountToIterate){
        let cloneBag = [...bag]; //clone bag to prevent changes to hook
        let focusItem = cloneBag.filter((a) => a.id === item.id)[0];
        if(focusItem.quantity === focusItem.stock && amountToIterate > 0){
        }
        else if(focusItem.quantity === 0 && amountToIterate < 0){
        }
        else {
            focusItem.quantity += amountToIterate;
        }
        
        setBag(cloneBag);
        setLastModifiedItem({...focusItem}) //pass in spread to force useEffect to occur
    }

    const bagAlertMounted = useRef(false);
    useEffect(() => {
        if(bagAlertMounted.current){
            setBagAlert(<BagAlert item={lastModifiedItem}/>);
            setShowAlert(true)

            sessionStorage.setItem('bag', JSON.stringify(bag)) //store bag in session storage

            let timerId = window.setTimeout(() => {if(!showAlert)setShowAlert(false)}, 3000)//fade the alert after 3 seconds, but only if state variable is false
            return (() => {
                window.clearTimeout(timerId)
            })
        }
        else{
            bagAlertMounted.current = true;
        }
    }, [lastModifiedItem])

    const menuItems = bag.map((item) => 
        <MenuBox key={item.title} itemDetails={item} itemQuantityFunc={editItemQuantity}/>
    );

    return (
        <div className='Menu'>
            <div className={`HiddenAlert ${showAlert && "AlertContainer"}`}>{bagAlert}</div>
            <PageTitle titleColor={"#5ebcaf"} titleContent={"Menu"} fadeStartOffset={0} fadeEndOffset={250}/>
            <PageHeader headerColor={"#5ebcaf"} headerContent={"Browse our delicious range of Soju"}/>
            <div className="MenuBoxContainer">
                {menuItems}
            </div>

        </div>
    )
}