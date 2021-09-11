import React, { ReactNode, useState, useEffect, RefObject } from "react";
type inputFieldProps = {
    icon: string;
    className: string;
    name: string;
    placeholder: string;
    label: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    children?: ReactNode;
    handleKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    focusHandler?: React.FocusEventHandler<HTMLInputElement>;
    blurHandler?: React.FocusEventHandler<HTMLInputElement>;
    iconClickHandler?: React.MouseEventHandler<HTMLImageElement>;
    selectedSuggestion?: string | null;
};

const InputField = (props: inputFieldProps) => {
    // const [value, setValue] = useState("");
    // useEffect(() => {
    //     if (props.selectedSuggestion) setValue(props.selectedSuggestion);
    // }, [props.selectedSuggestion]);
    return (
        <div className={`${props.className}Wrapper`}>
            <img
                onClick={props.iconClickHandler}
                src={props.icon}
                alt="Close button"
            />
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
