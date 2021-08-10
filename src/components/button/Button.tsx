import "./buttonStyle.scss" ;  
type buttonProps = {
    children : React.ReactNode ; 
    icon? : string ; 
}
const Button = (props : buttonProps)=>{
    return (
        <button className = "button">
            {props.icon && <img alt = "Search icon" src = {props.icon} />}
            <span className = "buttonText">{props.children}</span>
        </button>
    )
}

export default Button ; 