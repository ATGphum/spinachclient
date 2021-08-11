import { useState, useEffect } from "react";
import "./MenuBox.css"

function MenuImage(props) {
    let image = props.image
    return (
        <img src={image} className="ItemPic" alt="itemimage" />
    )
}

export default function MenuBox(props) {
    let title = props.title;
    let productImage = props.productImage;
    let price = props.price;
    let description = props.description;

    const [showDetails, setShowDetails] = useState(false);

    function toggleItemDetails(show){
        console.log(show)
        show? setShowDetails(true) : setShowDetails(false);
    }

    let closeButton = <div className="CloseButton">
        
    </div>

    return (
        <div onClick={() => {if(!showDetails)toggleItemDetails(true)}} className={`MenuBox ${showDetails && 'MenuBoxIncrease'}`}>
            {showDetails && <div onClick={() => {toggleItemDetails(false)}} className="CloseButton">×</div>}
            <div className="ItemName">{title}</div>
            <div className={`HiddenItemElement ${showDetails && 'ItemDescription'}`}>{description}</div>
            <div className="ItemPriceLine">
                <span className={`HiddenBagButton ${showDetails && 'BagButton'} ${showDetails && 'RemoveBagButton'}`}>-</span>
                <span><span className="ItemPrice">${price}</span><span className="Each">each</span></span>
                <span className={`HiddenBagButton ${showDetails && 'BagButton'} ${showDetails && 'AddBagButton'}`}>+</span>
            </div>
            <MenuImage image={productImage}/>
        </div>
    )
}