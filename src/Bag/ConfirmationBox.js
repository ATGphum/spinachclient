import "./ConfirmationBox.css"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function ConfirmationBox(props) {

    let bag = props.bag;

    //calculate total cost of items in bag
    let reducer = (accumulator, bagItem) => accumulator + (bagItem.price * bagItem.quantity)
    let subTotal = bag.reduce(reducer, 0)

    let shippingFee = 0

    let total = subTotal + shippingFee

    return (
        <div className="ConfirmationBox">
            <div className="ConfirmItems">
                <div className="Summary">Summary</div>
                <div className="SubTotalContainer">
                    <span>Subtotal (Inc GST) </span><span> ${subTotal.toFixed(2)}</span>
                </div>
                <div className="ShippingContainer">
                    <span>Shipping</span><span> ${shippingFee.toFixed(2)}</span>
                </div>
                <div className="OrderTotalContainer">
                    <span>Order Total </span><span> ${total.toFixed(2)}</span>
                </div>
                <PayPalScriptProvider options={{ "client-id": "test" }}>
                    <PayPalButtons style={{ layout: "horizontal" }} />
                </PayPalScriptProvider>
            </div>
        </div>
    )
}