import "./Slideshow.css"
import LuPull from "./images/side-lu.jpg"
import RefreshingRiver from "./images/refreshing-river.jpg"
import Statistics from "./images/statistics.jpg"

function Slide(props){
    let phrase = props.phrase
    let image = props.image
    return (
        <div style={{backgroundImage: "url(" + image + ")"}} className="Slide">
            <div className="SlideText">{phrase}</div>
        </div>
    )
}

export default function Slideshow() {
    let imageArray = [LuPull, RefreshingRiver, Statistics]
    let textArray = ["Can take you past your natural limit for half natty results, at none of the cost", "Naturally found and extracted from spinach, vegan diet ftw", "Shown in lab data to yield superior results to Dianabol, with no side effectz"]
    return (
        <Slide image={imageArray[2]} phrase={textArray[0]}/>
    )
}