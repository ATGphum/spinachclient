import "./Bag.css"
import PageTitle from "./PageTitle"
import PageHeader from "./PageHeader"
import BagItem from "./BagItem"
import ConfirmationBox from "./ConfirmationBox"

export default function Bag(props) {

    let bag = props.bag
    let setBag = props.setBag

    let relevantBag = bag.filter((item) => item.quantity > 0)

    //sets the quantity of the specifid item in hooks to that of given amount
    function editItemQuantity(item, newAmount){
        let cloneBag = [...bag]; //clone bag to prevent changes to hook
        let focusItem = cloneBag.filter((a) => a.id === item.id)[0];
  
        if(newAmount < 0){
            focusItem.quantity = 0;
        }
        else{
            focusItem.quantity = newAmount;
        }

        setBag(cloneBag);
    }

    //map the bag items to each component to list
    let bagComponents = relevantBag.map((item) => 
        <BagItem key={item.id} item={item} itemQuantityFunc={editItemQuantity}/>
    )

    return (
        <div className="Bag">
            <PageTitle titleColor={"#5ebcaf"} titleContent={"Bag"} fadeStartOffset={0} fadeEndOffset={250}/>
            <PageHeader headerColor={"#5ebcaf"} headerContent={"Finalise and confirm your soju purchase"}/>
            {bagComponents}
            <ConfirmationBox bag={bag}/>
        </div>
    )
}