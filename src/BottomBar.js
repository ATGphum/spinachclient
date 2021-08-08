import './BottomBar.css'
import Logo from './Logo'

export default function BottomBar() {
    return (
        <div className="BottomBar">
            <span className="BottomLogo"><Logo logoPick={1} height={'8em'}/></span>
            <div className='BottomLink'>About us</div>
            <div className='BottomLink'>Frequently asked questions</div>
            <div className='BottomLink'>Shipping and returns</div>
        </div>
    )
}