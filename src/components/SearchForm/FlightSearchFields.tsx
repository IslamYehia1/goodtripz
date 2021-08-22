import React, { useState } from "react";
import fetchSuggestions from "./fetchSuggestions";
import Suggestions from "./Suggestions";
import flightLandIcon from "../../icons/flight_land_black_24dp.svg";
import flightTakeoffIcon from "../../icons/flight_takeoff_black_24dp.svg";
import InputField from "./InputField";

const FlightSearchFields = () => {
    const [suggestions, setSuggestions] = useState<Array<string[]>>([]);
    const [showSuggestions, setShowSuggestions] = useState("");
    const [flightFieldWidth, setFlightFieldWidth] = useState({
        from: "33%",
        to: "33%",
    });
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
            <div
                style={{ width: flightFieldWidth.from }}
                className="flightSearch"
            >
                <InputField
                    focusHandler={(e) => {
                        setShowSuggestions("departure");
                        setFlightFieldWidth({ from: "40%", to: "26%" });
                    }}
                    blurHandler={(e) => {
                        setShowSuggestions("");
                        setSuggestions([]);
                        setFlightFieldWidth({ from: "33%", to: "33%" });
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
            <div
                className="flightSearch"
                style={{ width: flightFieldWidth.to }}
            >
                <InputField
                    focusHandler={(e) => {
                        setShowSuggestions("destination");
                        setFlightFieldWidth({ from: "26%", to: "40%" });
                    }}
                    blurHandler={(e) => {
                        setShowSuggestions("");
                        setSuggestions([]);
                        setFlightFieldWidth({ from: "33%", to: "33%" });
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
