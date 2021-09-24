import React, { useState, useReducer, useEffect } from "react";
import flightTakeoffIcon from "../../icons/flight_takeoff_black_24dp.svg";
import { ReactComponent as ExpandArrow } from "../../icons/expand_more_black_24dp.svg";
import DateInput from "../RangeDatePicker/RangeDatePicker";
import Button from "../Button/Button";
import { SearchModal } from "../Modal/Modal";
import flightLandIcon from "../../icons/flight_land_black_24dp.svg";
import { ReactComponent as SearchIcon } from "../../icons/search_white.svg";
import AirportSearch from "../AirportSearch/AirportSearch";
import { fetchFlights } from "./fetchFlights";
import DateIcon from "../../icons/calendar_black.svg";

const FlightSearchFields = () => {
    /*Search fields and autocomplete suggestions should be full screen on mobile */
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    function searchHandler() {
        (async () => {
            const results = await fetchFlights({
                from: from,
                to: to,
                date: date,
                returnDate: returnDate,
            });
            console.log(results);
        })();
    }

    return (
        <div className="flightSearchFields">
            <div className="options">
                <SearchModal className="modal">
                    <span className="travellers">
                        <Button
                            icon={ExpandArrow}
                            className="button"
                            handleClick={() => {}}
                        >
                            1 Traveller
                        </Button>
                    </span>
                </SearchModal>
                <SearchModal className="modal">
                    <span className="flightType">
                        <Button
                            icon={ExpandArrow}
                            className="button"
                            handleClick={() => {}}
                        >
                            Round trip
                        </Button>
                    </span>
                </SearchModal>
            </div>
            <div className="fields">
                {/* -------- Departure airport search field -------- */}
                <SearchModal
                    altClassName="aSearchField flightSearchField"
                    className="modal"
                >
                    <AirportSearch
                        label="Flying from"
                        inputClass="searchTextInput"
                        suggestionsClass="suggestions"
                        // wrapperClass="aSearchField flightSearchField"
                        icon={flightTakeoffIcon}
                        placeholder="Departure airport"
                        onSuggestionSelect={(suggestion) => setFrom(suggestion)}
                    />
                </SearchModal>
                {/* -------- Destination airport search field -------- */}

                <SearchModal
                    altClassName="aSearchField flightSearchField"
                    className="modal"
                >
                    <AirportSearch
                        label="Flying to"
                        icon={flightLandIcon}
                        inputClass="searchTextInput"
                        suggestionsClass="suggestions"
                        // wrapperClass="aSearchField flightSearchField"
                        placeholder="Destination airport"
                        onSuggestionSelect={(suggestion) => {
                            setTo(suggestion);
                        }}
                    />
                </SearchModal>
                {/* -------- Date picker search field -------- */}

                <SearchModal
                    altClassName="aSearchField flightSearchField
                    dateSearchField"
                    className="modal"
                >
                    <DateInput
                        fromLabel="Date"
                        toLabel="Return date"
                        icon={DateIcon}
                        className="searchTextInput"
                        onFromDateSelected={(day: Date) => {
                            setDate(day.toISOString().substring(0, 10));
                        }}
                        onToDateSelected={(day: Date) => {
                            setReturnDate(day.toISOString().substring(0, 10));
                        }}
                    />
                </SearchModal>
                <Button
                    handleClick={searchHandler}
                    icon={SearchIcon}
                    className="button searchButton"
                >
                    Search
                </Button>
            </div>
        </div>
    );
};

export default FlightSearchFields;
