import "./buttonStyle.scss";
import { propsType } from "./types";
const Button = (props: propsType) => {
    const SVG = props.icon;

    return (
        <button
            onClick={props.handleClick}
            id={props.id}
            className={props.className}
        >
            {/* {props.tempIcon && <img alt={props.alt} src={props.icon} />} */}
            {SVG && <SVG />}
            <span>{props.children}</span>
        </button>
    );
};

export default Button;
