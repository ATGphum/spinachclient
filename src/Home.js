import "./Home.css"
import Slideshow from "./Slideshow"

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
        <div className="SecondPage"></div>
    )
}