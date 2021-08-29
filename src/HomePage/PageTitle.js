import { useState, useEffect } from "react";
import "./PageTitle.css"

export default function PageTitle(props){

    let titleColor = props.titleColor;
    let titleContent = props.titleContent;
    let fadeStartOffset = props.fadeStartOffset //page offset to start fading
    let fadeEndOffset = props.fadeEndOffset //page offset to end fading


    const [style, setStyle] = useState({
        opacity: 1,
        color: titleColor
    })

    function fadeEffect() {

        const currentScroll = window.pageYOffset;

        if (currentScroll > fadeStartOffset && currentScroll < fadeEndOffset) {
            setStyle({
                opacity: 1 - (currentScroll - fadeStartOffset) / (fadeEndOffset - fadeStartOffset),
                color: titleColor
            });
            //console.log("decreasing opacity: " + style["opacity"])
        }
        else if (style['opacity'] !== 0 && currentScroll > fadeEndOffset) {
            setStyle({
                opacity: 0,
                color: titleColor
            });
        }
        //console.log(currentScroll)
    }

    useEffect(() => {
        window.addEventListener('scroll', fadeEffect)
        return () => {
            window.removeEventListener('scroll', fadeEffect)
          }
    }, [style])

    return (
        <div style={style} className='HomePageTitle'>{titleContent}</div>
    )
}