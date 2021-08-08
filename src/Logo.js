//import SpinachPic from "./images/modern-spinach1.1.png"
import logoStandard from "./vectors/charge1.0.svg"
import logoGrey from "./vectors/charge1.1.svg"
import "./Logo.css"

export default function Logo(props){
    let height = props.height
    let logoPick = props.logoPick

    let style = {
        height: props.height
    }

    let logos = [logoStandard, logoGrey]

    return (
        <div>
            <img src={logos[logoPick]} style={style} className="SpinachLogo" alt="logo" />
        </div>
    )
}