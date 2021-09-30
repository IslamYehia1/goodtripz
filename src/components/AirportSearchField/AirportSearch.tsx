import { useState, useEffect, useCallback } from "react";
import { airportAutocomplete as fetchSuggestions } from "../../utils/fetchAutocomplete";
import Suggestions from "../Autocomplete/Autocomplete";
import InputField from "../InputField/InputField";

type AirportSearchProps = {
    label: string;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    placeholder: string;
    inputClass: string;
    suggestionsClass: string;
    wrapperClass?: string;
    value?: string;
    onSuggestionSelect?: (suggestion: string) => void;
};
type autocompleteT = Array<{
    autocomplete: { id: string; main: string; secondary: string };
    identifier: string;
}>;

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
const AirportSearch = (props: AirportSearchProps) => {
    const [suggestions, setSuggestions] = useState<autocompleteT>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchTerm, setSearchTerm] = useState(props.value || "");
    function isSuggestionClicked(e: React.FocusEvent<HTMLDivElement>) {
        return (
            e.relatedTarget !== null &&
            (e.relatedTarget as HTMLElement).classList.contains("suggestions")
        );
    }
    function hideSuggestions(e: React.FocusEvent<HTMLDivElement>) {
        if (!isSuggestionClicked(e)) {
            setShowSuggestions(false);
        }
    }
    function focusHandler(e: React.FocusEvent<HTMLDivElement>) {
        setShowSuggestions(true);
    }
    const fetchAutocomplete = async (searchTerm: any) => {
        const results = await fetchSuggestions(searchTerm);
        setSuggestions(results);
    };

    const autocomplete = useCallback(throttle(200, fetchAutocomplete), []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        autocomplete(searchTerm);
    }, [searchTerm, autocomplete]);

    return (
        <div
            onBlur={hideSuggestions}
            className={props.wrapperClass}
            onFocus={focusHandler}
        >
            {showSuggestions && (
                <Suggestions
                    className={props.suggestionsClass}
                    suggestions={suggestions}
                    onSuggestionClick={({ suggestion, identifier }) => {
                        setSearchTerm(suggestion);
                        setShowSuggestions(false);
                        if (props.onSuggestionSelect)
                            props.onSuggestionSelect(identifier);
                        // setSuggestions([]);
                    }}
                />
            )}
            <InputField
                label={props.label}
                className={props.inputClass}
                icon={props.icon}
                name="destination"
                placeholder={props.placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // selectedSuggestion={desAutocomplete}
            />
        </div>
    );
};

export default AirportSearch;
