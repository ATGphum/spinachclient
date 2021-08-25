import "./ProductBox.css"
import {
    Link
} from "react-router-dom"

function ProductImage(props){
    let image = props.image
    return (
        <img src={image} className="ProductPic" alt="productimage" />
    )
}

export default function ProductBox(props) {

    let bag = props.bag

    let products = bag.map((item) => 
        <span className="Product">
            <div className="ProductInfo">
                <div className="ProductSubheader">For the love of it!</div>
                <div className="ProductName">{item.title}</div>
            </div>
            <ProductImage image={item.imageUrl}/>
        </span>
    )

    return (
        <div className='ProductBox'>
            <div className='Products'>
                {products}
            </div>
            <Link className="BrowseLink" to="/menu">Shop selection</Link>
        </div>
    ) 
}