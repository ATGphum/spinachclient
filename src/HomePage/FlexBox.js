import "./FlexBox.css"

export default function FlexBox(props){

    let smallText = props.smallText
    let largeText = props.largeText
    let boxImage = props.boxImage
    let backgroundColor = props.backgroundColor

    const divStyle = {
        backgroundColor: backgroundColor,
        backgroundImage: 'url(' + boxImage + ')',
    };

    return (
        <div style={divStyle} className='FlexBox'>
            {smallText}
            {largeText}
        </div>
    )
}