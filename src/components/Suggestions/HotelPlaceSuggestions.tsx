import { useEffect, useState } from "react";
import { autocompleteT } from "./types";
import { hotelAutoComplete as fetchSuggestions } from "../../utils/fetchAutocomplete";
import style from "./Suggestions.module.scss";
import { useQuery } from "@tanstack/react-query";
import { LocationIcon } from "../Icons";

const HotelPlaceSuggestions = ({ inputValue, onSuggestionSelect, className }: any) => {
  const [suggestions, setSuggestions] = useState<autocompleteT>([]);
  const { data, isLoading } = useQuery(["hotelPlaceAutoComplete", inputValue], () =>
    fetchSuggestions(inputValue)
  );
  // useEffect(() => {
  //   (async () => {
  //     setSuggestions(await fetchSuggestions(inputValue));
  //   })();
  // }, [inputValue]);
  if (isLoading) {
    return (
      <ul className={`${style.suggestions} ${className || ""}`}>
        <div className={style.placeHolder}>
          <p>Loading</p>
        </div>
      </ul>
    );
  }
  if (!inputValue || !(data!.length > 0)) {
    return (
      <ul className={`${style.suggestions} ${className || ""}`}>
        <div className={style.placeHolder}>
          <p>Search by a place</p>
        </div>
      </ul>
    );
  }
  const SuggestionsList = data!.map(({ autocomplete, identifier }) => {
    return (
      <li
        key={autocomplete.id}
        onClick={() => {
          onSuggestionSelect({
            suggestion: `${autocomplete.main},  ${autocomplete.secondary}`,
            id: identifier,
          });
        }}
        className={style.hotelSuggestion}
      >
        <div className={style.locationIconWrapper}>
          <LocationIcon />
        </div>
        <div>
          <div>{autocomplete.main}</div>
          <div>{autocomplete.secondary}</div>
        </div>
      </li>
    );
  });
  return <ul className={style.suggestions}>{SuggestionsList}</ul>;
};

export default HotelPlaceSuggestions;
