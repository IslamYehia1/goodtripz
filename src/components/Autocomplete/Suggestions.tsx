import "./suggestions.scss";
import airportIcon from "../../icons/airport.svg";
type autocompleteT = Array<{
    autocomplete: { id: string; main: string; secondary: string };
    identifier: string;
}>;
type propsType = {
    suggestions: autocompleteT;
    className: string;
    onSuggestionClick?: (x: { suggestion: string; identifier: string }) => void;
};
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
