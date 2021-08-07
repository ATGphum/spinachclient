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

    const [show, setShow] = useState(0);
/*
    useEffect(() => {
        console.log(show)
        setShow(1)
        return () => {
            setShow(0);
        }
    }, [])
*/

    return ( 
        //<div style={{backgroundImage: "url(" + image + ")"}} className="Slide"></div>(
        <div className="Slide">
            <SlideImage image={image}/>
            <SlideText phrase={phrase}/>
            <SlideBullets slideNumber={slideNumber}/>
            <ScrollText show={show}/>
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
        <CSSTransition
            classNames="my-element"
            in={props.show}
            timeout={300}>
            <div className="SlideText">{phrase}</div>
        </CSSTransition>
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

function ScrollText(props){
    return (
        <span className="ScrollText">SCROLL DOWN {props.show}</span>
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

        window.setTimeout(updateSlide, 2000)
    }, [currentSlide])


    return (
        <Slide image={slideImage} phrase={slideText} slideNumber={currentSlide}/>
    )
}