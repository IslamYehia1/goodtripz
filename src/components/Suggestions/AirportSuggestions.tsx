import { AirportIcon } from "../Icons";
// import { autocompleteT, propsType } from "./types";
import { airportAutocomplete as fetchSuggestions } from "../../utils/fetchAutocomplete";
import style from "./Suggestions.module.scss";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
export type autocompleteT = Array<{
  autocomplete: { id: string; main: string; secondary: string };
  identifier: string;
}>;
export type propsType = {
  suggestions: autocompleteT;
  suggestionsClass?: string;
  className?: string;
  onSuggestionSelect?: (x: { suggestion: string; id: string }) => void;
  inputValue: string;
};

const AirportsSuggestions = ({ inputValue, onSuggestionSelect }: propsType) => {
  const { isLoading, error, data, isFetching }: any = useQuery(
    ["airportAutoComplete", inputValue],
    () => fetchSuggestions(inputValue) as any
  );

  if (isLoading) {
    return (
      <ul className={style.suggestions}>
        <p className={style.placeHolder}>Loading</p>
      </ul>
    );
  }
  if (!inputValue || !(data.length > 0))
    return (
      <ul className={style.suggestions}>
        <p className={style.placeHolder}>Search by city or airport name</p>
      </ul>
    );

  const SuggestionsList = data?.map(({ autocomplete, identifier }: any) => (
    <li
      key={identifier}
      onClick={() => {
        if (onSuggestionSelect)
          onSuggestionSelect({
            suggestion: `${autocomplete.main},  ${autocomplete.secondary}`,
            id: identifier,
          });
      }}
    >
      <div className={style.suggestionWrapper}>
        <div className={style.airportIconWrapper}>
          <AirportIcon />
        </div>
        <div className={style.airportInfoWrapper}>
          <span>{autocomplete.main}</span>
          <span>{autocomplete.secondary}</span>
        </div>
      </div>
    </li>
  ));
  return <ul className={style.suggestions}>{SuggestionsList}</ul>;
};
export default AirportsSuggestions;
