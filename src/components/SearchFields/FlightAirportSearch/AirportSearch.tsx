import { useState, useEffect, useCallback } from "react";
import { airportAutocomplete as fetchSuggestions } from "../../../utils/fetchAutocomplete";
import Suggestions from "../../Suggestions/Suggestions";
import InputField from "../../InputField/InputField";
import { propsType, autocompleteT } from "./types";

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
const AirportSearch = (props: propsType) => {
    const [suggestions, setSuggestions] = useState<autocompleteT>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchTerm, setSearchTerm] = useState(props.value || "");
    function isSuggestionClicked(e: React.FocusEvent<HTMLDivElement>) {
        return (
            e.relatedTarget !== null &&
            (e.relatedTarget as HTMLElement).classList.contains("suggestions")
        );
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
            onBlur={(e) => {
                if (!isSuggestionClicked(e)) {
                    setShowSuggestions(false);
                }
            }}
            className={props.wrapperClass}
            onFocus={() => setShowSuggestions(true)}
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
            />
        </div>
    );
};

export default AirportSearch;
