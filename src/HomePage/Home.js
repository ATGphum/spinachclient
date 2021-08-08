import "./Home.css"
import Slideshow from "./Slideshow"
import PageTitle from "./PageTitle"
import PageHeader from "./PageHeader"
import FlexBox from "./FlexBox"
import ProductBox from "./ProductBox"

export default function Home() {
    return (
        <div>
            <Slideshow/>
            <SecondPage/>
            <ThirdPage/>
        </div>
    )
}

function SecondPage() {
    return (
        <div className="SecondPage">
            <PageTitle titleColor={"#999"} titleContent={"Company"} fadeStartOffset={800} fadeEndOffset={1050}/>
            <PageHeader headerColor={"#999"} headerContent={"Introducing Oppa, Australia's new and exciting supplement startup."}/>
            <div className="BoxContainer">
                <FlexBox />
                <FlexBox />
                <FlexBox />
                <FlexBox />
            </div>
        </div>
    )
}

function ThirdPage() {
    return (
        <div className="ThirdPage">
            <PageTitle titleColor={"#ffffff"} titleContent={"Product"} fadeStartOffset={2300} fadeEndOffset={2550}/>
            <PageHeader headerColor={"#ffffff"} headerContent={"We make good things better with the power of Odin, the sun god"}/>
            <ProductBox/>
        </div>
    )
}
