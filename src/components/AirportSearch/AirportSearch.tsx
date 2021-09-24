import { useState, useEffect } from "react";
import { airportAutocomplete as fetchSuggestions } from "../../utils/fetchSuggestions";
import Suggestions from "../Autocomplete/Suggestions";
import InputField from "../InputField/InputField";
type AirportSearchProps = {
    label: string;
    icon?: string;
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
    useEffect(() => {
        (async () => {
            setSuggestions(await fetchSuggestions(searchTerm));
        })();
    }, [searchTerm]);

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
