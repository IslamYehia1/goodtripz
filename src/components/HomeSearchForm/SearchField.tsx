import React, { useState, useEffect, useRef, RefObject, useContext } from "react";
import style from "./SearchForm.module.scss";
import useIsMobile from "../../utils/useIsMobile";
import { useUIContext } from "../UI";
import { motion, AnimatePresence } from "framer-motion";
import { isSuggestionClicked } from "../../utils";
import useOutsideClick from "../../utils/useOutsideClick";
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
  animate?: any;
};

const SearchField = (props: PROPS) => {
  const { isModalOn } = useUIContext();
  const isMobile = useIsMobile();
  const Suggestions = props.suggestions;
  const inputRef: RefObject<HTMLInputElement> = useRef(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputState, setInputState] = useState("");
  const fieldRef = useOutsideClick(props.isActive, () => {
    props.onDeactivate();
  });

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

  function activateField(e: any) {
    e.stopPropagation();
    props.onActivate();
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputState(event.target.value);
    props.onChange(event.target.value);
  }
  return (
    <motion.div
      onFocus={activateField}
      animate={props.animate}
      style={{ pointerEvents: "all" }}
      className={`${style.searchFragment} ${props.className}`}
      ref={fieldRef as any}
    >
      {showSuggestions && (
        // <AnimatePresence>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className={style.suggestions}
          tabIndex={-1}
        >
          <Suggestions
            inputValue={inputState}
            onSuggestionClick={(suggestion: any) => {
              props.onSuggestionSelect(suggestion);
              setInputState(suggestion.suggestion);
              props.onDeactivate();
            }}
          />
        </motion.div>
        // </AnimatePresence>
      )}
      <div
        // className={style.fieldWrapper}
        tabIndex={0}
        onClick={activateField}
        className={`${props.wrapperClass}`}
      >
        {/* <div> */}
        {props.icon && <props.icon />}
        <div className={props.inputClass}>
          <label htmlFor={props.name}>{props.label}</label>
          <input
            autoComplete="off"
            ref={inputRef}
            // onBlur={blurHandler}
            placeholder={isMobile ? props.label : props.placeholder}
            type="text"
            value={inputState}
            name={props.name}
            onChange={handleChange}
            tabIndex={-1}
          />
        </div>
        {/* </div> */}
      </div>
    </motion.div>
  );
};

export default SearchField;
