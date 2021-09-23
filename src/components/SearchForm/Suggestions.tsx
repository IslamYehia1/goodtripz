import "./suggestions.scss";
import airportIcon from "../../icons/airport.svg";
type propsType = {
    suggestions: Array<string[]>;
    className: string;
    onSuggestionClick?: (x: string) => void;
};
const Suggestions = (props: propsType) => {
    const suggestions = props.suggestions.map((suggestion) => (
        <li
            key={suggestion[0]}
            onClick={() => {
                if (props.onSuggestionClick)
                    props.onSuggestionClick(`${suggestion[1]}${suggestion[2]}`);
            }}
        >
            <img src={airportIcon} alt="Airport drawing" />
            <div>
                <span>{suggestion[1]}</span>
                <span>{suggestion[2]}</span>
            </div>
        </li>
    ));
    return (
        <ul tabIndex={0} className={props.className}>
            {suggestions}
        </ul>
    );
};

export default Suggestions;
