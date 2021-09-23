import { ReactComponentElement } from "react";
import "./buttonStyle.scss";
type buttonProps = {
    children?: React.ReactNode;
    icon?: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }
    >;
    className?: string;
    alt?: string;
    id?: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
};
const Button = (props: buttonProps) => {
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
