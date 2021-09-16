import { useState, useEffect } from "react";
import { airportAutocomplete as fetchSuggestions } from "../SearchForm/fetchSuggestions";
import flightTakeoffIcon from "../../icons/flight_takeoff_black_24dp.svg";
import InputField from "../InputField/InputField";
import Suggestions from "../SearchForm/Suggestions";

function isSuggestionClicked(e: React.FocusEvent<HTMLDivElement>) {
    return (
        e.relatedTarget !== null &&
        (e.relatedTarget as HTMLElement).classList.contains("suggestions")
    );
}

const DepartureSearch = (props: any) => {
    const [departureVal, setDepartureVal] = useState("");
    const [suggestions, setSuggestions] = useState<Array<string[]>>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    function hideSuggestions(e: React.FocusEvent<HTMLDivElement>) {
        if (!isSuggestionClicked(e)) {
            setShowSuggestions(false);
        }
    }

    useEffect(() => {
        (async () => {
            setSuggestions(await fetchSuggestions(departureVal));
        })();
    }, [departureVal]);

    function focusHandler() {
        // Invoke the modal to make the input full screen on mobile devices
        setShowSuggestions(true);
        if (window.screen.width <= 650) {
            props.setFullScreen();
        }
    }
    return (
        <div
            className="aSearchField flightSearchField"
            onBlur={hideSuggestions}
            onFocus={() => focusHandler()}
        >
            <InputField
                label="Departure"
                className="searchTextInput"
                icon={flightTakeoffIcon}
                name="departure"
                value={departureVal}
                onChange={(e) => setDepartureVal(e.target.value)}
                placeholder="Flying from"
                // selectedSuggestion={depAutocomplete}
            />
            {showSuggestions && (
                <Suggestions
                    className="suggestions"
                    suggestions={suggestions}
                    onSuggestionClick={(suggestion: string) => {
                        setDepartureVal(suggestion);
                        setShowSuggestions(false);
                        // setSuggestions([]);
                    }}
                />
            )}
        </div>
    );
};

export default DepartureSearch;
