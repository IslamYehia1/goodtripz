import { propsType } from "./types";

const InputField = (props: propsType) => {
    return (
        <div className={`${props.className}Wrapper`}>
            {props.icon && <props.icon />}
            <div className={props.className}>
                <label htmlFor={props.name}>{props.label}</label>
                {props.children ? (
                    props.children
                ) : (
                    <input
                        onFocus={props.focusHandler}
                        onBlur={props.blurHandler}
                        onKeyUp={props.handleKeyUp}
                        placeholder={props.placeholder}
                        type="text"
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                    />
                )}
            </div>
        </div>
    );
};
export default InputField;
