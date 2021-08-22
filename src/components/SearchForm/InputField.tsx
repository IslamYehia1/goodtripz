import React from "react";
type inputFieldProps = {
    icon: string;
    className: string;
    name: string;
    placeholder: string;
    label: string;
    handleKeyUp: React.KeyboardEventHandler<HTMLInputElement>;
    focusHandler: React.FocusEventHandler<HTMLInputElement>;
    blurHandler: React.FocusEventHandler<HTMLInputElement>;
};

const InputField = (props: inputFieldProps) => {
    return (
        <div className={`${props.className}Wrapper`}>
            <img src={props.icon} alt="" />
            <div className={props.className}>
                <label htmlFor={props.name}>{props.label}</label>
                <input
                    onFocus={props.focusHandler}
                    onBlur={props.blurHandler}
                    onKeyUp={props.handleKeyUp}
                    placeholder={props.placeholder}
                    type="text"
                    name={props.name}
                />
            </div>
        </div>
    );
};
export default InputField;
