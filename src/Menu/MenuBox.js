import { useState, useEffect } from "react";
import "./MenuBox.css"

function MenuImage(props) {
    let image = props.image
    return (
        <img src={image} className="ItemPic" alt="itemimage" />
    )
}

export default function MenuBox(props) {
    let itemDetails = props.itemDetails
    let bagAdderFunc = props.bagAdderFunc;
    let bagRemoverFunc = props.bagRemoverFunc

    let title = itemDetails.title;
    let productImage = itemDetails.imageUrl;
    let price = itemDetails.price;
    let description = itemDetails.description;

    const [showDetails, setShowDetails] = useState(false);

    function toggleItemDetails(show){
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
                <span className={`HiddenBagButton ${showDetails && 'BagButton'} ${showDetails && 'RemoveBagButton'}`} onClick={() => bagRemoverFunc(itemDetails)}>-</span>
                <span><span className="ItemPrice">${price}</span><span className="Each">each</span></span>
                <span className={`HiddenBagButton ${showDetails && 'BagButton'} ${showDetails && 'AddBagButton'}`} onClick={() => bagAdderFunc(itemDetails)}>+</span>
            </div>
            <MenuImage image={productImage}/>
        </div>
    )
}