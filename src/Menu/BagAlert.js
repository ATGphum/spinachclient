import "./BagAlert.css"

function AlertImage(props) {
    let image = props.image
    return (
        <img src={image} className="AlertPic" alt="itemimage" />
    )
}

export default function BagAlert(props) {
    let item = props.item
    return (
        <div className="BagAlert">
            {/*<div className="AlertDescription">
                <div className="AlertTitle">Bag Updated!</div>
                <div className="AlertItem">{item.title}</div>
            </div>*/}
            <div className="AlertQuantity"><span className="AlertQuantityX">x</span>{item.quantity}</div>
            <AlertImage image={item.imageUrl}/>
        </div>
    )
}

