import './BottomBar.css'
import Logo from './Logo'

export default function BottomBar() {
    return (
        <div className="BottomBar">
            <Logo className='uhuh' height={'8em'}/>
            <div className='BottomLink'>About us</div>
            <div className='BottomLink'>Frequently asked questions</div>
            <div className='BottomLink'>Shipping and returns</div>
        </div>
    )
}