import { useState, useEffect, useCallback } from "react";
import { airportAutocomplete as fetchSuggestions } from "../../../utils/fetchAutocomplete";
import Suggestions from "../../Suggestions/Suggestions";
import InputField from "../../InputField/InputField";
import style from "../../SearchForm/SearchForm.module.scss";
import { propsType, autocompleteT } from "./types";
import { SearchModal } from "../../Modal";
const throttle = (delay: number, fn: (args: string) => void) => {
  let inThrottle = false;
  return (args: string) => {
    if (inThrottle) {
      return;
    }
    inThrottle = true;
    fn(args);
    setTimeout(() => {
      inThrottle = false;
    }, delay);
  };
};
const AirportSearch = (props: propsType) => {
  const [suggestions, setSuggestions] = useState<autocompleteT>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState(props.value || "");
  const [fullScreen, setFullScreen] = useState(false);

  function isSuggestionClicked(e: React.FocusEvent<HTMLDivElement>) {
    return (
      e.relatedTarget !== null &&
      (e.relatedTarget as HTMLElement).classList.contains(
        props.suggestionsClass
      )
    );
  }
  const fetchAutocomplete = async (searchTerm: any) => {
    const results = await fetchSuggestions(searchTerm);
    setSuggestions(results);
  };

  const autocomplete = useCallback(throttle(200, fetchAutocomplete), []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    autocomplete(searchTerm);
    if (props.value) {
      setSearchTerm(props.value);
    }
  }, [searchTerm, autocomplete, props.value]);

  return (
    <SearchModal
      altClassName={`${style.aSearchField} ${style.flightSearchField}`}
      className={style.modal}
      isFullScreen={fullScreen}
      closeModal={() => {
        setShowSuggestions(false);
        setFullScreen(false);
      }}
    >
      <div
        onFocus={() => {
          setShowSuggestions(true);
          if (window.innerWidth <= 650) setFullScreen(true);
        }}
        onBlur={(e) => {
          if (!isSuggestionClicked(e)) {
            setShowSuggestions(false);
          }
        }}
      >
        {showSuggestions && (
          <Suggestions
            className={props.suggestionsClass}
            suggestions={suggestions}
            onSuggestionClick={({ suggestion, identifier }) => {
              setSearchTerm(suggestion);
              setShowSuggestions(false);
              props.onSuggestionSelect(identifier);
              setFullScreen(false);
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </SearchModal>
  );
};

export default AirportSearch;
