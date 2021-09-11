import "./buttonStyle.scss";
type buttonProps = {
    children?: React.ReactNode;
    icon?: string;
    className?: string;
    alt?: string;
    id?: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
};
const Button = (props: buttonProps) => {
    return (
        <button
            onClick={props.handleClick}
            id={props.id}
            className={props.className}
        >
            {props.icon && <img alt={props.alt} src={props.icon} />}
            <span>{props.children}</span>
        </button>
    );
};

export default Button;
