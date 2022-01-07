import { AirportIcon } from "../Icons";
import { propsType } from "./types";
import Image from "next/image";
import style from "./Suggestions.module.scss";
const Suggestions = (props: propsType) => {
  const suggestions = props.suggestions.map(({ autocomplete, identifier }) => (
    <li
      key={autocomplete.id}
      onClick={() => {
        if (props.onSuggestionClick)
          props.onSuggestionClick({
            suggestion: `${autocomplete.main},  ${autocomplete.secondary}`,
            identifier: identifier,
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
  return (
    // <div>
    <ul className={`${style.suggestions} ${props.className}`} tabIndex={1}>
      {suggestions}
    </ul>
    // </div>
  );
};

export default Suggestions;
