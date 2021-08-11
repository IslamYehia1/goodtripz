import "./buttonStyle.scss" ;  
type buttonProps = {
    children : React.ReactNode ; 
    icon? : string ; 
    className?: string ; 
    id? : string ; 
}
const Button = (props : buttonProps)=>{
    return (
        <button id = {props.id} className = {props.className}>
            {props.icon && <img alt = "Search icon" src = {props.icon} />}
            {props.children}
        </button>
    )
}

export default Button ; 