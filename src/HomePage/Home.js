import "./Home.css"
import Slideshow from "./Slideshow"
import PageTitle from "./PageTitle"
import PageHeader from "./PageHeader"
import FlexBox from "./FlexBox"
import ProductBox from "./ProductBox"

import cityView from "./images/cityview.jpg"
import trophy from "./images/trophy.jpg"
import iu from "./images/iu.jpg"
import assortedsoju from "./images/assortedsoju.jpg"

export default function Home(props) {

    let bag = props.bag

    return (
        <div>
            <Slideshow/>
            <SecondPage/>
            <ThirdPage bag={bag}/>
        </div>
    )
}

function SecondPage() {
    return (
        <div className="SecondPage">
            <PageTitle titleColor={"#999"} titleContent={"Company"} fadeStartOffset={800} fadeEndOffset={1050}/>
            <PageHeader headerColor={"#999"} headerContent={"Introducing Oppa, Australia's new and exciting soju startup."}/>
            <div className="BoxContainer">
                <FlexBox smallText={"Perth's #1 upcoming alchoholic startup"} largeText={12} boxImage={cityView}/>
                <FlexBox smallText={"Awaken, embrace. Soju is good for all"} largeText={14} boxImage={trophy}/>
                <FlexBox boxImage={iu}/>
                <FlexBox smallText={"Get smashed from our selection"} largeText={2} boxImage={assortedsoju}/>
            </div>
        </div>
    )
}

function ThirdPage(props) {

    let bag = props.bag;

    return (
        <div className="ThirdPage">
            <PageTitle titleColor={"#ffffff"} titleContent={"Product"} fadeStartOffset={2300} fadeEndOffset={2550}/>
            <PageHeader headerColor={"#ffffff"} headerContent={"From Chilsung to Andong Soju, we provide the specific soju for your needs"}/>
            <ProductBox bag={bag}/>
        </div>
    )
}
