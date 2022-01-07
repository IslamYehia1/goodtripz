import { useEffect, useState } from "react";
import { autocompleteT } from "./types";
import { hotelAutoComplete as fetchSuggestions } from "../../utils/fetchAutocomplete";
import style from "./Suggestions.module.scss";
const HotelPlaceSuggestions = ({ inputValue, onSuggestionClick }: any) => {
  const [suggestions, setSuggestions] = useState<autocompleteT>([]);

  useEffect(() => {
    (async () => {
      setSuggestions(await fetchSuggestions(inputValue));
    })();
  }, [inputValue]);
  if (!inputValue || !suggestions) {
    return (
      <ul className={style.suggestions}>
        <p>Type to search </p>
      </ul>
    );
  }
  const SuggestionsList = suggestions.map(({ autocomplete, identifier }) => {
    return (
      <li
        key={autocomplete.id}
        onClick={() => {
          onSuggestionClick({
            suggestion: `${autocomplete.main},  ${autocomplete.secondary}`,
            IATA: identifier,
          });
        }}
      >
        <span>{autocomplete.main}</span>
        <span>{autocomplete.secondary}</span>
      </li>
    );
  });
  return <ul className={style.suggestions}>{SuggestionsList}</ul>;
};
export default HotelPlaceSuggestions;
