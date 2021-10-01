import "./suggestions.scss";
import airportIcon from "../../icons/airport.svg";
import { propsType } from "./types";
const Suggestions = (props: propsType) => {
    const suggestions = props.suggestions.map(
        ({ autocomplete, identifier }) => (
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
                <img src={airportIcon} alt="Airport drawing" />
                <div>
                    <span>{autocomplete.main}</span>
                    <span>{autocomplete.secondary}</span>
                </div>
            </li>
        )
    );
    return (
        <ul tabIndex={0} className={props.className}>
            {suggestions}
        </ul>
    );
};

export default Suggestions;
