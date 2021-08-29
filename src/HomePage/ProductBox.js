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
        <span key={item.title} className="Product">
            <div className="ProductInfo">
                <div className="ProductSubheader">For the love of it!</div>
                <div className="ProductName">{item.title}</div>
                <div className="BrandDescription">{item.branddescription}</div>
                <Link className="BrowseLink" to="/menu">Shop selection</Link>
            </div>
            <ProductImage image={item.miscimageUrl}/>
        </span>
    )

    return (
        <div className='ProductBox'>
            <div className='Products'>
                {products}
                <div className="Swipe">→</div>
            </div>
        </div>
    ) 
}