import { AirportIcon } from "../Icons";
// import { autocompleteT, propsType } from "./types";
import { airportAutocomplete as fetchSuggestions } from "../../utils/fetchAutocomplete";
import style from "./Suggestions.module.scss";
import { useEffect, useState } from "react";
export type autocompleteT = Array<{
  autocomplete: { id: string; main: string; secondary: string };
  identifier: string;
}>;
export type propsType = {
  suggestions: autocompleteT;
  suggestionsClass?: string;
  className?: string;
  onSuggestionClick?: (x: { suggestion: string; IATA: string }) => void;
  inputValue: string;
};

const AirportsSuggestions = ({ inputValue, onSuggestionClick }: propsType) => {
  const [suggestions, setSuggestions] = useState<autocompleteT>();
  async function fetchAutocomplete(searchTerm: any) {
    const results = await fetchSuggestions(searchTerm);
    if (results.length === 0) return;
    setSuggestions(results);
  }
  useEffect(() => {
    fetchAutocomplete(inputValue);
  }, [inputValue]);

  if (!inputValue || !suggestions)
    return (
      <ul className={style.suggestions}>
        <p className={style.placeHolder}>Type to search </p>
      </ul>
    );

  const SuggestionsList = suggestions.map(({ autocomplete, identifier }) => (
    <li
      key={autocomplete.id}
      onClick={() => {
        if (onSuggestionClick)
          onSuggestionClick({
            suggestion: `${autocomplete.main},  ${autocomplete.secondary}`,
            IATA: identifier,
          });
      }}
    >
      <AirportIcon />
      <div>
        <span>{autocomplete.main}</span>
        <span>{autocomplete.secondary}</span>
      </div>
    </li>
  ));
  return <ul className={style.suggestions}>{SuggestionsList}</ul>;
};
export default AirportsSuggestions;
