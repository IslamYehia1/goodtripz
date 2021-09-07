import React, { useState } from "react";
import InputField from "../InputField/InputField";
import locationIcon from "../../icons/location.svg";
import fetchSuggestions from "./fetchSuggestions";
import Suggestions from "./Suggestions";
import Button from "../Button/Button";
import DateInput from "./RangeDatePicker";
import searchIcon from "../../icons/search_white.svg";

const HotelSearchFields = () => {
    const [suggestions, setSuggestions] = useState<Array<string[]>>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    function focusHandler() {}
    function blurHandler() {}
    let timer: NodeJS.Timeout;
    function searchHandler() {}

    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        clearTimeout(timer);
        timer = setTimeout(async () => {
            setSuggestions(
                await fetchSuggestions((e.target as HTMLTextAreaElement).value)
            );
        }, 500);
    }
    return (
        <div className="hotelSearchFields">
            <div className="aSearchField hotelSearchField">
                <InputField
                    focusHandler={focusHandler}
                    blurHandler={blurHandler}
                    handleKeyUp={handleKeyUp}
                    placeholder="Hotel location"
                    label="Going to"
                    className="searchTextInput"
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
            <div className="secondRow">
                <DateInput className="aSearchField hotelSearchField dateSearchField" />
                <Button
                    handleClick={searchHandler}
                    icon={searchIcon}
                    className="button searchButton"
                >
                    Search
                </Button>
            </div>
        </div>
    );
};
export default HotelSearchFields;
