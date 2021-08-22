import "./suggestions.scss";
import airportIcon from "../../icons/airport.svg";
type propsType = {
    suggestions: Array<string[]>;
    className: string;
};
const Suggestions = (props: propsType) => {
    const suggestions = props.suggestions.map((suggestion) => (
        <li>
            <img src={airportIcon} alt="" />
            <div>
                <span>{suggestion[0]}</span>
                <span>{suggestion[1]}</span>
            </div>
        </li>
    ));
    return <ul className={props.className}>{suggestions}</ul>;
};

export default Suggestions;
