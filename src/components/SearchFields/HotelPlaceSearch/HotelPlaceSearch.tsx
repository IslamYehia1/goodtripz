import React, { useState, useEffect } from "react";
import InputField from "../../InputField/InputField";
import Suggestions from "../../Suggestions/Suggestions";
import { hotelAutoComplete as fetchSuggestions } from "../../../utils/fetchAutocomplete";
import { propsType, autocompleteT } from "./types";
import { SearchModal } from "../../Modal/";
import style from "../../HomeSearchForm/SearchForm.module.scss";
import useIsMobile from "../../../utils/useIsMobile";
import { isSuggestionClicked } from "../../../utils";
const HotelSearch = (props: propsType) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<autocompleteT>([]);
  const [fullScreen, setFullScreen] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    (async () => {
      setSuggestions(await fetchSuggestions(props.searchTerm));
    })();
  }, [props.searchTerm]);
  useEffect(() => {
    if (props.value) props.dispatch(props.value);
  }, [props.value]);
  useEffect(() => {
    if (props.isActive && isMobile) {
      setShowSuggestions(true);
      setFullScreen(true);
    } else if (props.isActive) {
      setShowSuggestions(true);
    }
    if (!props.isActive) {
      setShowSuggestions(false);
      setFullScreen(false);
    }
  }, [props.isActive, isMobile]);
  return (
    <SearchModal
      closeModal={() => {
        setFullScreen(false);
      }}
      isFullScreen={fullScreen}
      className={style.modal}
    >
      <div
        onFocus={() => {
          props.activate();
        }}
        onBlur={(e) => {
          if (!isSuggestionClicked(e, props.suggestionsClass)) setShowSuggestions(false);
        }}
        className={props.className}
      >
        <InputField
          isFocused={props.isActive}
          placeholder="Hotel location"
          label={props.label}
          className={props.inputClass}
          wrapperClass={props.inputWrapperClass}
          icon={props.icon}
          name="hotelLocation"
          value={props.searchTerm}
          onChange={(e) => props.dispatch({ type: "place", val: e.target.value })}
        />
        {showSuggestions && (
          <Suggestions
            onSuggestionClick={({ suggestion }) => {
              props.dispatch({ type: "place", val: suggestion });
              props.deactivate();
            }}
            className={props.suggestionsClass}
            suggestions={suggestions}
          />
        )}
      </div>
    </SearchModal>
  );
};
export default HotelSearch;
