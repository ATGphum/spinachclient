import "./Home.css"
import Slideshow from "./Slideshow"
import PageTitle from "./PageTitle"
import PageHeader from "./PageHeader"
import FlexBox from "./FlexBox"

export default function Home() {
    return (
        <div>
            <Slideshow/>
            <SecondPage/>
        </div>
    )
}

function SecondPage() {
    return (
        <div className="SecondPage">
            <PageTitle titleColor={"#999"} titleContent={"Company"}/>
            <PageHeader headerColor={"#999"} headerContent={"Introducing Australia's new and exciting supplement startup."}/>
            <div className="BoxContainer">
                <FlexBox />
                <FlexBox backgroundColor="#223475"/>
                <FlexBox />
                <FlexBox backgroundColor="#223475"/>
            </div>
        </div>
    )
}
