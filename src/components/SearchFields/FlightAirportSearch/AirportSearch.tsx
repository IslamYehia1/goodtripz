import { useState, useEffect, useCallback, RefObject } from "react";
import { airportAutocomplete as fetchSuggestions } from "../../../utils/fetchAutocomplete";
import Suggestions from "../../Suggestions/Suggestions";
import InputField from "../../InputField/InputField";
import style from "../../HomeSearchForm/SearchForm.module.scss";
import { propsType, autocompleteT } from "./types";
import { SearchModal } from "../../Modal";
import useIsMobile from "../../../utils/useIsMobile";
import { isSuggestionClicked, throttle } from "../../../utils";
const AirportSearch = (props: propsType) => {
  const [suggestions, setSuggestions] = useState<autocompleteT>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // Whenever the Input is focused && isMobile we need to trigger the SearchModal,
  const [fullScreen, setFullScreen] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    if (!isMobile) {
      setFullScreen(false);
    }
    if (props.isActive && isMobile) {
      setFullScreen(true);
      setShowSuggestions(true);
    } else if (props.isActive) {
      setShowSuggestions(true);
    }

    if (!props.isActive) {
      setShowSuggestions(false);
      setFullScreen(false);
    }
  }, [props.isActive, isMobile]);

  const fetchAutocomplete = async (searchTerm: any) => {
    const results = await fetchSuggestions(searchTerm);
    setSuggestions(results);
  };
  // const autocomplete = useCallback(throttle(200, fetchAutocomplete), []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (props.searchTerm) fetchAutocomplete(props.searchTerm);
  }, [props.searchTerm]);
  useEffect(() => {
    if (props.value) {
      props.dispatch({ val: props.value });
    }
  }, [props.value]);

  return (
    <SearchModal
      className={style.modal}
      isFullScreen={fullScreen}
      closeModal={() => {
        props.deactivate();
      }}
    >
      <div
        className={props.className}
        onFocus={() => {
          props.activate();
        }}
        onBlur={(e) => {
          if (!isMobile && !isSuggestionClicked(e, props.suggestionsClass)) {
            props.deactivate();
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
              props.deactivate();
            }}
          />
        )}
        <InputField
          isFocused={props.isActive}
          label={props.label}
          autoComplete="off"
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
