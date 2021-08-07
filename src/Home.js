import "./Home.css"
import Slideshow from "./Slideshow"
import PageTitle from "./PageTitle"

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
            <PageTitle titleColor={"#999"} titleContent={"Product"}/>
        </div>
    )
}
