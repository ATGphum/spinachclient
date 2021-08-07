import "./Slideshow.css"
import LuPull from "./images/side-lu.jpg"
import RefreshingRiver from "./images/refreshing-river.jpg"
import Statistics from "./images/statistics.jpg"
import React, { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';

function Slide(props){
    let phrase = props.phrase
    let image = props.image
    let slideNumber = props.slideNumber
    let slideDuration = props.slideDuration

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true)
        window.setTimeout(() => {setShow(false)}, slideDuration - 300)
    }, [slideNumber])

    return ( 
        //<div style={{backgroundImage: "url(" + image + ")"}} className="Slide"></div>(
        <div className="Slide">
            <SlideImage image={image}/>
            <CSSTransition
                classNames="SlideTextTrans"
                in={show}
                timeout={300}>
                <SlideText phrase={phrase} />
            </CSSTransition>
            <SlideBullets slideNumber={slideNumber}/>
            <ScrollText/>
        </div>
    )
}

function SlideImage(props){
    let image = props.image
    return (
        <img src={image} className="SlidePic" alt="slideimage" />
    )
}

function SlideText(props){

    let phrase = props.phrase

    return (
        <div className="SlideText">{phrase}</div>
    )
}

function SlideBullets(props){
    let slideNumber = props.slideNumber

    return (
        <div className="SlideBullets">
            <SlideBullet bulletId={0} slideNumber={slideNumber}/>
            <SlideBullet bulletId={1} slideNumber={slideNumber}/>
            <SlideBullet bulletId={2} slideNumber={slideNumber}/>
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
    let slideDuration = 5000

    const [slideImage, setImage] = useState(imageArray[0]);
    const [slideText, setText] = useState(textArray[0]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {

        let updateSlide = () => {
            setImage(imageArray[(currentSlide + 1) % 3])
            setText(textArray[(currentSlide + 1) % 3])
            setCurrentSlide((currentSlide + 1) % 3)
        }

        window.setTimeout(updateSlide, slideDuration)
    }, [currentSlide])


    return (
        <Slide image={slideImage} phrase={slideText} slideNumber={currentSlide} slideDuration={slideDuration}/>
    )
}