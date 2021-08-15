import React, { useState } from "react";
import InputField from "./InputField";
import "./searchForm.scss";
import Button from "../Button/Button";
import fetchSuggestions from "./fetchSuggestions";
import Suggestions from "./Suggestions";
import flightLandIcon from "../../icons/flight_land_black_24dp.svg";
import flightTakeoffIcon from "../../icons/flight_takeoff_black_24dp.svg";
import dateIcon from "../../icons/calendar_black.svg";

const SearchForm = () => {
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

    function focusHandler(e: React.FocusEvent<HTMLInputElement>) {
        let name = e.target.name;
        let element = e.target.closest<HTMLElement>(".inputAndSuggestion");
        if (element) {
            element!.style.width = "50%";
            setShowSuggestions(name);
            setSuggestions([]);
        }
    }

    function blurHandler(e: React.FocusEvent<HTMLInputElement>) {
        let element = e.target.closest<HTMLElement>(".inputAndSuggestion");
        if (element) {
            element!.style.width = "33%";
            setShowSuggestions("");
            setSuggestions([]);
        }
    }

    function activateTab(e: React.MouseEvent<HTMLButtonElement>) {
        document.querySelector("#active")!.id = "";
        //@ts-ignore
        e.target.id = "active";
    }

    return (
        <div id="searchForm">
            <div className="searchTabs">
                <Button
                    handleClick={activateTab}
                    id="active"
                    className="searchTab"
                >
                    Flights
                </Button>
                <Button handleClick={activateTab} className="searchTab">
                    Hotels
                </Button>
                <Button handleClick={activateTab} className="searchTab">
                    Cars
                </Button>
                <Button handleClick={activateTab} className="searchTab">
                    Packages
                </Button>
            </div>
            <div className="form">
                <div className="inputAndSuggestion">
                    <InputField
                        focusHandler={focusHandler}
                        blurHandler={blurHandler}
                        handleKeyUp={handleKeyUp}
                        label="Traveling from"
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
                <div className="inputAndSuggestion">
                    <InputField
                        focusHandler={focusHandler}
                        blurHandler={blurHandler}
                        handleKeyUp={handleKeyUp}
                        label="Traveling to"
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

                <div id="dateSearchField" className="searchFieldWrapper">
                    <InputField
                        focusHandler={focusHandler}
                        blurHandler={blurHandler}
                        handleKeyUp={handleKeyUp}
                        label="Departure date"
                        className="searchField"
                        icon={dateIcon}
                        name="departureDate"
                        placeholder="Pick date"
                    />
                    <InputField
                        focusHandler={focusHandler}
                        blurHandler={blurHandler}
                        handleKeyUp={handleKeyUp}
                        label="Return date"
                        className="searchField"
                        icon={dateIcon}
                        name="returnDate"
                        placeholder="Pick date"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchForm;
