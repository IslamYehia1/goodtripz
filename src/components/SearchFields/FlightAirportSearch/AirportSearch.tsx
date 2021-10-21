import { useState, useEffect, useCallback } from "react";
import { airportAutocomplete as fetchSuggestions } from "../../../utils/fetchAutocomplete";
import Suggestions from "../../Suggestions/Suggestions";
import InputField from "../../InputField/InputField";
import style from "../../SearchForm/SearchForm.module.scss";
import { propsType, autocompleteT } from "./types";
import { SearchModal } from "../../Modal";
import useIsMobile from "../../../utils/useIsMobile";
import { isSuggestionClicked, throttle } from "../../../utils";

const AirportSearch = (props: propsType) => {
  const [suggestions, setSuggestions] = useState<autocompleteT>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isMobile = useIsMobile();

  const fetchAutocomplete = async (searchTerm: any) => {
    const results = await fetchSuggestions(searchTerm);
    setSuggestions(results);
  };
  const autocomplete = useCallback(throttle(200, fetchAutocomplete), []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log(props.searchTerm);
    if (props.searchTerm) autocomplete(props.searchTerm);
  }, [autocomplete, props.searchTerm]);
  useEffect(() => {
    if (props.value) {
      props.dispatch({ val: props.value });
    }
  }, [props.value]);
  useEffect(() => {
    if (!isMobile) {
      setFullScreen(false);
    }
    if (isFocused && isMobile) {
      setFullScreen(true);
      setShowSuggestions(true);
    } else if (isFocused) {
      setShowSuggestions(true);
    }
    if (!isFocused) {
      setShowSuggestions(false);
      setFullScreen(false);
    }
  }, [isFocused, isMobile]);

  return (
    <SearchModal
      className={style.modal}
      isFullScreen={fullScreen}
      closeModal={() => {
        setIsFocused(false);
      }}
    >
      <div
        className={props.className}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={(e) => {
          if (!isMobile && !isSuggestionClicked(e, props.suggestionsClass)) {
            setIsFocused(false);
          }
        }}
      >
        {(showSuggestions || fullScreen) && (
          <Suggestions
            className={props.suggestionsClass}
            suggestions={suggestions}
            onSuggestionClick={({ suggestion, identifier }) => {
              props.dispatch({
                val: suggestion,
                IATA: identifier,
              });
              setIsFocused(false);
            }}
          />
        )}
        <InputField
          label={props.label}
          className={props.inputClass}
          wrapperClass={props.wrapperClass}
          icon={props.icon}
          name="destination"
          placeholder={props.placeholder}
          value={props.searchTerm}
          onChange={(e) => {
            props.dispatch({ val: e.target.value });
          }}
        />
      </div>
    </SearchModal>
  );
};

export default AirportSearch;
