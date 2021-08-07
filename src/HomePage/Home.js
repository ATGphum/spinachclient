import "./Home.css"
import Slideshow from "./Slideshow"
import PageTitle from "./PageTitle"
import PageHeader from "./PageHeader"

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
        </div>
    )
}
