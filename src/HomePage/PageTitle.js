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
            /*
            if(currentScroll <= 700) {

                setOpacity(1 - currentScroll/700)
              //opacity = 1 - currentScroll / 700;
            } else {
                setOpacity(0)
                console.log("starts fading")
              //opacity = 0;
            }
            */
        if (currentScroll > fadeStartOffset && currentScroll < fadeEndOffset) {
            setStyle({
                opacity: 1 - (currentScroll - fadeStartOffset) / (fadeEndOffset - fadeStartOffset) - 0.1,
                color: titleColor
            });
            //console.log("decreasing opacity: " + style["opacity"])
            //}
        }
        else if (style['opacity'] !== 0 && currentScroll > fadeEndOffset) {
            setStyle({
                opacity: 0,
                color: titleColor
            });
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', fadeEffect)
        return () => {
            window.removeEventListener('scroll', fadeEffect)
          }
    }, [style])

    return (
        <div style={style} className='PageTitle'>{titleContent}</div>
    )
}