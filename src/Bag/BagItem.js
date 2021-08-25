import "./BagItem.css"
import { useState, useEffect, useRef } from "react";

function MenuImage(props) {
    let image = props.image
    return (
        <img src={image} className="BagItemPic" alt="itemimage" />
    )
}

export default function BagItem(props) {

    let item = props.item;
    let itemQuantityFunc = props.itemQuantityFunc;

    const inputQuantity = useRef(null)

    function onQuantityUpdate(removeItem=false) {
        let newQuantity = Math.round(inputQuantity.current.value)
        if(removeItem) newQuantity = 0
        itemQuantityFunc(item, newQuantity)
    }

    function handleKeyPress(e) {
        if(e.key === 'Enter'){
            onQuantityUpdate()
        }
    }

    return (
        <div className="BagItem">

            <input className="BagItemQuantity" ref={inputQuantity} defaultValue={item.quantity} type="number" onKeyPress={(e) => handleKeyPress(e)} />

            <MenuImage image={item.imageUrl} />

            <div className="BagItemTitle">{item.title}</div>

            <div className="BagRemoveItem" onClick={() => onQuantityUpdate(true)}>×</div>
            <div className="PriceContainer">
                {/*<div className="BagItemPrice"><span>individual: </span>${item.price.toFixed(2)}</div>*/}
                <div className="BagItemTotalPrice">${(item.quantity * item.price).toFixed(2)}</div>
            </div>
        </div>
    )
}