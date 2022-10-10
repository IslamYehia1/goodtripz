import React, { useState, useEffect, useRef, RefObject, useContext } from "react";
import style from "./SearchForm.module.scss";
import useIsMobile from "../../utils/useIsMobile";
import { useUIContext } from "../UI";
import { isSuggestionClicked } from "../../utils";
type PROPS = {
  className: string;
  wrapperClass: string;
  label: string;
  icon?: string;
  placeholder: string;
  inputClass: string;
  value?: string;
  name: string;
  suggestions: any;
  onSuggestionSelect: any;
  onChange: any;
  isActive?: Boolean;
  onActivate?: any;
  onDeactivate?: any;
};
const SearchField = (props: PROPS) => {
  const { isModalOn } = useUIContext();
  const isMobile = useIsMobile();
  const Suggestions = props.suggestions;
  const inputRef: RefObject<HTMLInputElement> = useRef(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputState, setInputState] = useState("");

  useEffect(() => {
    if (props.value) setInputState(props.value);
  }, [props.value]);
  useEffect(() => {
    if (props.isActive) {
      setShowSuggestions(true);
      inputRef.current?.focus();
    } else {
      setShowSuggestions(false);
      inputRef.current?.blur();
    }
  }, [props.isActive]);
  // The modal can be closed by the "back" button in the modal itself
  // so the field should be deactivated if the modal got closed from an
  // outside event.
  useEffect(() => {
    if (!isModalOn && props.isActive) {
      props.onDeactivate();
    }
  }, [isModalOn]);
  function focusHandler() {
    props.onActivate();
    setShowSuggestions(true);
  }
  function blurHandler(e: React.FocusEvent<HTMLInputElement>) {
    e.preventDefault();
    if (!isMobile && !isSuggestionClicked(e, style.suggestions)) {
      props.onDeactivate();
      setShowSuggestions(false);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputState(event.target.value);
    props.onChange(event.target.value);
  }
  return (
    <div className={props.className}>
      {showSuggestions && (
        <div className={style.suggestions} tabIndex={-1}>
          <Suggestions
            inputValue={inputState}
            onSuggestionClick={(suggestion: any) => {
              props.onSuggestionSelect(suggestion);
              setInputState(suggestion.suggestion);
              props.onDeactivate();
            }}
          />
        </div>
      )}
      <div className={`${props.wrapperClass}`}>
        {props.icon && <props.icon />}
        <div className={props.inputClass}>
          <label htmlFor={props.name}>{props.label}</label>
          <input
            autoComplete="off"
            ref={inputRef}
            onFocus={focusHandler}
            onBlur={blurHandler}
            placeholder={props.placeholder}
            type="text"
            value={inputState}
            name={props.name}
            onChange={handleChange}
            tabIndex={-1}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchField;
