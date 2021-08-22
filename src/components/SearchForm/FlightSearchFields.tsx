import React, { useState } from "react";
import fetchSuggestions from "./fetchSuggestions";
import Suggestions from "./Suggestions";
import flightLandIcon from "../../icons/flight_land_black_24dp.svg";
import flightTakeoffIcon from "../../icons/flight_takeoff_black_24dp.svg";
import InputField from "./InputField";

const FlightSearchFields = () => {
    const [suggestions, setSuggestions] = useState<Array<string[]>>([]);
    const [showSuggestions, setShowSuggestions] = useState("");
    let timer: NodeJS.Timeout;
    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        clearTimeout(timer);
        timer = setTimeout(async () => {
            setSuggestions(
                await fetchSuggestions((e.target as HTMLTextAreaElement).value)
            );
        }, 500);
    }

    // When an searchInput is in focus expand it and make the sibling smaller

    return (
        <>
            <div className="flightSearch">
                <InputField
                    focusHandler={(e) => {
                        setShowSuggestions("departure");
                        e.target.style.width = "50%";
                    }}
                    blurHandler={(e) => {
                        setShowSuggestions("");
                        setSuggestions([]);
                        e.target.style.width = "33%";
                    }}
                    handleKeyUp={handleKeyUp}
                    label="Flying from"
                    className="searchField"
                    icon={flightTakeoffIcon}
                    name="departure"
                    placeholder="Departure airport"
                />
                {showSuggestions === "departure" ? (
                    <Suggestions
                        className="suggestions"
                        suggestions={suggestions}
                    />
                ) : null}
            </div>
            <div className="flightSearch">
                <InputField
                    focusHandler={(e) => {
                        setShowSuggestions("destination");
                        e.target.style.width = "50%";
                    }}
                    blurHandler={(e) => {
                        setShowSuggestions("");
                        setSuggestions([]);
                        e.target.style.width = "33%";
                    }}
                    handleKeyUp={handleKeyUp}
                    label="Flying to"
                    className="searchField"
                    icon={flightLandIcon}
                    name="destination"
                    placeholder="Destiniation airport"
                />
                {showSuggestions === "destination" ? (
                    <Suggestions
                        className="suggestions"
                        suggestions={suggestions}
                    />
                ) : null}
            </div>
        </>
    );
};

export default FlightSearchFields;
