import React, { ReactNode, useState } from "react";
type inputFieldProps = {
    icon: string;
    className: string;
    name: string;
    placeholder: string;
    label: string;
    children?: ReactNode;
    handleKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    focusHandler?: React.FocusEventHandler<HTMLInputElement>;
    blurHandler?: React.FocusEventHandler<HTMLInputElement>;
};

const InputField = (props: inputFieldProps) => {
    const [value, setValue] = useState("");
    return (
        <div className={`${props.className}Wrapper`}>
            <img src={props.icon} alt="" />
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
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                    />
                )}
            </div>
        </div>
    );
};
export default InputField;
