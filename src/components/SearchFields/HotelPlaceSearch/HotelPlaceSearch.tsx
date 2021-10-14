import React, { useState, useEffect } from "react";
import InputField from "../../InputField/InputField";
import Suggestions from "../../Suggestions/Suggestions";
import { hotelAutoComplete as fetchSuggestions } from "../../../utils/fetchAutocomplete";
import { propsType, autocompleteT } from "./types";
import { SearchModal } from "../../Modal/";
import style from "../../SearchForm/SearchForm.module.scss";
import useIsMobile from "../../../utils/useIsMobile";
import { isSuggestionClicked } from "../../../utils";
const HotelSearch = (props: propsType) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<autocompleteT>([]);
  const [fullScreen, setFullScreen] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const isMobile = useIsMobile;
  useEffect(() => {
    (async () => {
      setSuggestions(await fetchSuggestions(props.searchTerm));
    })();
  }, [props.searchTerm]);
  useEffect(() => {
    if (props.value) props.dispatch(props.value);
  }, [props.value]);
  useEffect(() => {
    if (isFocused && isMobile) {
      setShowSuggestions(true);
      setFullScreen(true);
    } else if (isFocused) {
      setShowSuggestions(true);
    }
    if (!isFocused) {
      setShowSuggestions(false);
      setFullScreen(false);
    }
  }, [isFocused]);
  return (
    <SearchModal isFullScreen={fullScreen} className={style.modal}>
      <div
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={(e) => {
          if (!isSuggestionClicked(e, props.suggestionsClass))
            setShowSuggestions(false);
        }}
        className={`${style.aSearchField} ${style.hotelSearchField}`}
      >
        <InputField
          placeholder="Hotel location"
          label={props.label}
          className={props.inputClass}
          wrapperClass={props.inputWrapperClass}
          icon={props.icon}
          name="hotelLocation"
          value={props.searchTerm}
          onChange={(e) =>
            props.dispatch({ type: "place", val: e.target.value })
          }
        />
        {showSuggestions && (
          <Suggestions
            onSuggestionClick={({ suggestion }) => {
              props.dispatch({ type: "place", val: suggestion });
              setIsFocused(false);
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
