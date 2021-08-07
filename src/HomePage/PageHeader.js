import "./PageHeader.css"

export default function PageHeader(props){

    let headerColor = props.headerColor
    let headerContent = props.headerContent

    const divStyle = {
        color: headerColor,
    };

    return (
        <div style={divStyle} className='PageHeader'>{headerContent}</div>
    )
}