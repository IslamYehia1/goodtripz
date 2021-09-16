import { useState, useEffect } from "react";
import { airportAutocomplete as fetchSuggestions } from "../SearchForm/fetchSuggestions";
import Suggestions from "../SearchForm/Suggestions";
import InputField from "../InputField/InputField";

const AirportSearch = (props: any) => {
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
        if (window.screen.width <= 650) {
            props.setFullScreen();
        }
    }
    useEffect(() => {
        (async () => {
            setSuggestions(await fetchSuggestions(searchTerm));
        })();
    }, [searchTerm]);
    // "Flying to"
    // flightLandIcon
    //"Destination"
    return (
        <div
            onBlur={hideSuggestions}
            className="aSearchField flightSearchField"
            onFocus={focusHandler}
        >
            <InputField
                label={props.label}
                className="searchTextInput"
                icon={props.icon}
                name="destination"
                placeholder={props.placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // selectedSuggestion={desAutocomplete}
            />
            {showSuggestions && (
                <Suggestions
                    className="suggestions"
                    suggestions={suggestions}
                    onSuggestionClick={(suggestion) => {
                        setSearchTerm(suggestion);
                        setShowSuggestions(false);
                        // setSuggestions([]);
                    }}
                />
            )}
        </div>
    );
};

export default AirportSearch;
