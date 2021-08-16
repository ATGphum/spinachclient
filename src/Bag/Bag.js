import "./Bag.css"
import PageTitle from "./PageTitle"
import BagItem from "./BagItem"

export default function Bag(props) {

    let bagContent = props.bag
    let modifyBag = props.setBag

    let relevantBag = bagContent.filter((item) => item.quantity > 0)

    //map the bag items to each component to list
    let bagComponents = relevantBag.map((item) => 
        <BagItem key={item.id} item={item} modifyBag={modifyBag}/>
    )

    return (
        <div className="Bag">
            <PageTitle titleColor={"white"} titleContent={"Bag"} fadeStartOffset={0} fadeEndOffset={250}/>
            {bagComponents}
        </div>
    )
}