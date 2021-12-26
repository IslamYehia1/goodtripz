import { propsType } from "./types";
import { useEffect, useRef, forwardRef, Ref, RefObject } from "react";
const InputField = (props: propsType) => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);
  useEffect(() => {
    if (props.isFocused) {
      inputRef!.current!.focus();
    }
  }, [props.isFocused]);
  return (
    <div className={`${props.wrapperClass}`}>
      {props.icon && <props.icon />}
      <div className={props.className}>
        <label htmlFor={props.name}>{props.label}</label>
        {props.children ? (
          props.children
        ) : (
          <input
            autoComplete={props.autoComplete}
            ref={inputRef}
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
