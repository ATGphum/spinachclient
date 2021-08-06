import "./Slideshow.css"
import LuPull from "./images/side-lu.jpg"
import RefreshingRiver from "./images/refreshing-river.jpg"
import Statistics from "./images/statistics.jpg"
import React, { useState, useEffect } from "react";

function Slide(props){
    let phrase = props.phrase
    let image = props.image
    return (
        <div style={{backgroundImage: "url(" + image + ")"}} className="Slide">
            <div className="SlideText">{phrase}</div>
            <ScrollText/>
        </div>
    )
}

function ScrollText(){
    return (
        <span className="ScrollText">SCROLL DOWN</span>
    )
}

export default function Slideshow() {

    let imageArray = [LuPull, RefreshingRiver, Statistics]
    let textArray = ["Can take you past your natural limit for half natty results, at none of the cost", "Naturally found and extracted from spinach, vegan diet ftw", "Shown in lab data to yield superior results to Dianabol, with no side effectz"]

    const [slideImage, setImage] = useState(imageArray[0]);
    const [slideText, setText] = useState(textArray[0]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {

        let updateSlide = () => {
            setCurrentSlide((currentSlide + 1) % 3)
            setImage(imageArray[currentSlide])
            setText(textArray[currentSlide])
        }

        window.setTimeout(updateSlide, 5000)
    })


    return (
        <Slide image={slideImage} phrase={slideText}/>
    )
}