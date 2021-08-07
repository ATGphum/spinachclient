import "./PageTitle.css"

export default function PageTitle(props){

    let titleColor = props.titleColor
    let titleContent = props.titleContent

    const divStyle = {
        color: titleColor,
        
    };

    return (
        <div style={divStyle} className='PageTitle'>{titleContent}</div>
    )
}