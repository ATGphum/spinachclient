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
            <SlideBullets slideNumber={props.slideNumber}/>
            <ScrollText/>
        </div>
    )
}

function SlideBullets(props){
    return (
        <div className="SlideBullets">
            <SlideBullet bulletId={0} slideNumber={props.slideNumber}/>
            <SlideBullet bulletId={1} slideNumber={props.slideNumber}/>
            <SlideBullet bulletId={2} slideNumber={props.slideNumber}/>
        </div>
    )
}

function SlideBullet(props){

    const [isSelectedBullet, setSelectedBullet] = useState(false);

    useEffect(() => {
        if(props.bulletId == props.slideNumber){
            setSelectedBullet(true)
        }
        else{
            setSelectedBullet(false)
        }
    }, [props.slideNumber])

    return (
        <span className={`SlideBullet ${isSelectedBullet && 'SlideBulletSelected'}`}></span>
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
            setImage(imageArray[(currentSlide + 1) % 3])
            setText(textArray[(currentSlide + 1) % 3])
            setCurrentSlide((currentSlide + 1) % 3)
        }

        window.setTimeout(updateSlide, 1000)
    }, [currentSlide])


    return (
        <Slide image={slideImage} phrase={slideText} slideNumber={currentSlide}/>
    )
}