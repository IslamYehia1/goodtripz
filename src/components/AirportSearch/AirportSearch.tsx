import { useState, useEffect } from "react";
import { airportAutocomplete as fetchSuggestions } from "../SearchForm/fetchSuggestions";
import Suggestions from "../SearchForm/Suggestions";
import InputField from "../InputField/InputField";
type AirportSearchProps = {
    label: string;
    icon?: string;
    placeholder: string;
    // setFullScreen: () => void;
    inputClass: string;
    suggestionsClass: string;
    wrapperClass?: string;
};
const AirportSearch = (props: AirportSearchProps) => {
    const [suggestions, setSuggestions] = useState<Array<string[]>>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

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
                    onSuggestionClick={(suggestion) => {
                        setSearchTerm(suggestion);
                        setShowSuggestions(false);
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
