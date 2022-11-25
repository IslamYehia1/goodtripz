import React, { useState, useEffect, useRef, RefObject, useContext } from "react";
import useIsMobile from "../../utils/useIsMobile";
import { useUIContext } from "../UI";
import { motion, AnimatePresence } from "framer-motion";
import style from "./SearchField.module.scss";
import useOutsideClick from "../../utils/useOutsideClick";
import SearchModal from "../Modal/SearchModal";
import propsT from "./types";
const SearchField = (props: propsT) => {
  const isMobile = useIsMobile();
  const Suggestions = props.suggestions;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef: RefObject<HTMLInputElement> = useRef(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputState, setInputState] = useState("");
  const [isActive, setIsActive] = useState(false);

  const fieldRef = useOutsideClick(isActive, () => {
    setIsActive(false);
  });

  useEffect(() => {
    if (props.value) setInputState(props.value);
  }, [props.value]);
  useEffect(() => {
    if (isActive) {
      setShowSuggestions(true);
      inputRef.current?.focus();
    } else {
      setShowSuggestions(false);
      inputRef.current?.blur();
    }
  }, [isActive, isMobile, isModalOpen]);

  useEffect(() => {
    if (isModalOpen) setIsActive(true);
    else setIsActive(false);
  }, [isModalOpen]);
  function activateField(e: any) {
    e.preventDefault();
    if (isMobile) setIsModalOpen(true);
    else setIsActive(true);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputState(event.target.value);
    // props.onChange(event.target.value);
  }

  return (
    <SearchModal
      isOpen={isModalOpen}
      className={`${props.modalClass} ${style.modal}`}
      onClose={() => setIsModalOpen(false)}
    >
      <motion.div
        animate={isActive ? props.animate : undefined}
        style={{ pointerEvents: "all" }}
        className={`${props.className} ${style.container}`}
        ref={fieldRef as any}
      >
        {showSuggestions && (
          // <AnimatePresence>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className={`${props.suggestionsClass} ${style.suggestionsWrapper}`}
            tabIndex={-1}
          >
            <Suggestions
              inputValue={inputState}
              onSuggestionSelect={(suggestion: any) => {
                props.onSuggestionSelect(suggestion);
                setInputState(suggestion.suggestion);
                if (isMobile) setIsModalOpen(false);
                else setIsActive(false);

                // props.onDeactivate();
              }}
              // className={props.suggestionsClass}
              className={style.suggestions}
            />
          </motion.div>
          // </AnimatePresence>
        )}
        <div
          tabIndex={0}
          onClick={activateField}
          // onFocus={activateField}
          className={`${props.wrapperClass} ${style.textFieldWrapper}`}
        >
          {props.icon && <props.icon />}
          <div className={`${props.inputClass} ${style.input}`}>
            <label htmlFor={props.name}>{props.label}</label>
            <input
              autoComplete="off"
              ref={inputRef}
              placeholder={isMobile ? props.label : props.placeholder}
              type="text"
              value={inputState}
              name={props.name}
              onChange={handleChange}
              tabIndex={-1}
            />
          </div>
        </div>
      </motion.div>
    </SearchModal>
  );
};

export default SearchField;
