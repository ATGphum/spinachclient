import "./FlexBox.css"

export default function FlexBox(props){

    let smallText = <div className='SmallText'>{props.smallText}</div>
    let largeText = <div className='LargeText'>{props.largeText}</div>
    let boxImage = props.boxImage
    let backgroundColor = props.backgroundColor

    const divStyle = {
        backgroundColor: backgroundColor,
        backgroundImage: 'url(' + boxImage + ')',
    };

    return (
        <div style={divStyle} className='FlexBox'>
            <div className="FlexContainer">
            {smallText}
            {largeText}
            </div>
        </div>
    )
}