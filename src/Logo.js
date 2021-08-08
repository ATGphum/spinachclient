import SpinachPic from "./images/modern-spinach1.1.png"
import "./Logo.css"

export default function Logo(props){
    let height = props.height

    let style = {
        height: props.height
    }

    return (
        <div>
            <img src={SpinachPic} style={style} className="SpinachLogo" alt="logo" />
        </div>
    )
}