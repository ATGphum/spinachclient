import { useState, useEffect } from "react";
import "./PageTitle.css"

export default function PageTitle(props){

    let titleColor = props.titleColor;
    let titleContent = props.titleContent;
    let fadeOffset = props.fadeOffset //page offset to start fading


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
        if (currentScroll > 700 && currentScroll < 700 + 300) {
            //if (currentScroll % 10 == 0) {
                setStyle({
                    opacity: 1 - (currentScroll-700)/(1000-700), 
                    color: titleColor 
                });
                //opacity = 1 - currentScroll / 700;
                console.log("decreasing opacity: " + style["opacity"])
            //}
        } else {

        }
            console.log(window.pageYOffset)
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