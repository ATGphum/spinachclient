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
    return (
        <div className="MenuBox">
            <div className="ItemName">{title}</div>
            <div className="ItemPrice">${price}<span className="Each">each</span></div>
            <MenuImage image={productImage}/>
        </div>
    )
}