import "./BagItem.css"

function MenuImage(props) {
    let image = props.image
    return (
        <img src={image} className="BagItemPic" alt="itemimage" />
    )
}

export default function BagItem(props) {

    let item = props.item;
    let modifyBag = props.modifyBag;
    return (
        <div className="BagItem">
            <div>{item.title}</div>
            <input type="number" min="0" max={item.stock} step="1"/>
            <MenuImage image={item.imageUrl} />
        </div>
    )
}