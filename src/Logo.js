import SpinachPic from "./images/modern-spinach1.1.png"
import "./Logo.css"

export default function Logo(){
    return (
        <div>
            <img src={SpinachPic} className="SpinachLogo" alt="logo" />
        </div>
    )
}