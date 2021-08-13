import InputField from "./InputField";
import "./searchForm.scss";
import Button from "../button/Button";
import fetchSuggestions from "./fetchSuggestions";
import Suggestions from "./Suggestions";
import flightLandIcon from "../../icons/flight_land_black_24dp.svg";
import flightTakeoffIcon from "../../icons/flight_takeoff_black_24dp.svg";
import dateIcon from "../../icons/calendar_black.svg";
import React from "react";
import { useState } from "react";
const SearchForm = () => {
    let timer: NodeJS.Timeout;
    const [suggestions, setSuggestions] = useState<Array<string[]>>([]);
    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        clearTimeout(timer);
        timer = setTimeout(async () => {
            setSuggestions(
                await fetchSuggestions((e.target as HTMLTextAreaElement).value)
            );
        }, 500);
    }

    function focusHandler(e: React.FocusEvent<HTMLInputElement>) {
        console.log(e.target);
    }

    return (
        <div id="searchForm">
            <div className="searchTabs">
                <Button id="active" className="searchTab">
                    Flights
                </Button>
                <Button className="searchTab">Hotels</Button>
                <Button className="searchTab">Cars</Button>
                <Button className="searchTab">Packages</Button>
            </div>
            <Suggestions className="suggestions" suggestions={suggestions} />
            <div className="form">
                <InputField
                    focusHandler={focusHandler}
                    handleKeyUp={handleKeyUp}
                    label="Traveling from"
                    className="searchField"
                    icon={flightTakeoffIcon}
                    name="departureCity"
                    placeholder="Departure city"
                />
                <InputField
                    focusHandler={focusHandler}
                    handleKeyUp={handleKeyUp}
                    label="Traveling to"
                    className="searchField"
                    icon={flightLandIcon}
                    name="returnCity"
                    placeholder="Destiniation city"
                />
                <div id="dateSearchField" className="searchFieldWrapper">
                    <InputField
                        focusHandler={focusHandler}
                        handleKeyUp={handleKeyUp}
                        label="Departure date"
                        className="searchField"
                        icon={dateIcon}
                        name="departureDate"
                        placeholder="Pick date"
                    />
                    <InputField
                        focusHandler={focusHandler}
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
