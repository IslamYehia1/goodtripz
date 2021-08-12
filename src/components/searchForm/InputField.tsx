import React from "react";
type inputFieldProps = {
    icon: string;
    className: string;
    name: string;
    placeholder: string;
    label: string;
    handleKeyUp: React.KeyboardEventHandler<HTMLInputElement>;
};

const InputField = (props: inputFieldProps) => {
    return (
        <div className={`${props.className}Wrapper`}>
            <img src={props.icon} alt="" />
            <div className={props.className}>
                <label htmlFor={props.name}>{props.label}</label>
                <input
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
