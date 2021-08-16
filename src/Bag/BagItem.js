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

    function onQuantityUpdate() {
        let newQuantity = Math.round(inputQuantity.current.value)
        itemQuantityFunc(item, newQuantity)
    }
    return (
        <div className="BagItem">
            <div>{item.title}</div>
            <input ref={inputQuantity} defaultValue={item.quantity} type="number" min="0" max={item.stock} step="1" />
            <button onClick={onQuantityUpdate}>update</button>
            <MenuImage image={item.imageUrl} />
        </div>
    )
}