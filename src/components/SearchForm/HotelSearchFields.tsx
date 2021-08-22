import React, { useState } from "react";
import InputField from "./InputField";
import locationIcon from "../../icons/location.svg";
import fetchSuggestions from "./fetchSuggestions";
import Suggestions from "./Suggestions";
// AIzaSyAeoS5PEjjRAt82A7C_8ADjcn9Nriwqt6I
const HotelSearchFields = () => {
    const [suggestions, setSuggestions] = useState<Array<string[]>>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    function focusHandler() {}
    function blurHandler() {}
    let timer: NodeJS.Timeout;

    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        clearTimeout(timer);
        timer = setTimeout(async () => {
            setSuggestions(
                await fetchSuggestions((e.target as HTMLTextAreaElement).value)
            );
        }, 500);
    }
    return (
        <div className="hotelSearch">
            <InputField
                focusHandler={focusHandler}
                blurHandler={blurHandler}
                handleKeyUp={handleKeyUp}
                placeholder="Hotel location"
                label="Going to"
                className="searchField"
                icon={locationIcon}
                name="hotelLocation"
            />
            {showSuggestions && (
                <Suggestions
                    className="suggestions"
                    suggestions={suggestions}
                />
            )}
        </div>
    );
};
export default HotelSearchFields;
