import React, { useState, useReducer, useEffect } from "react";
import { ReactComponent as FlightTakeoffIcon } from "../../icons/flight_takeoff_black_24dp.svg";
import { ReactComponent as ExpandArrow } from "../../icons/expand_more_black_24dp.svg";
import { ReactComponent as SearchIcon } from "../../icons/search_white.svg";
import DateInput from "../RangeDatePicker";
import Button from "../Button/Button";
import { SearchModal } from "../Modal/Modal";
import AirportSearch from "../AirportSearchField/AirportSearch";
import { ReactComponent as DateIcon } from "../../icons/calendar_black.svg";
import { Redirect } from "react-router";
const FlightSearchFields = () => {
    /*Search fields and autocomplete suggestions should be full screen on mobile */
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [redirect, setRedirect] = useState(false);

    function searchHandler() {
        (async () => {
            setRedirect(true);
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
                        icon={FlightTakeoffIcon}
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
                        icon={FlightTakeoffIcon}
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
            {redirect && (
                <Redirect
                    to={{
                        pathname: "/SearchResults",
                        search: `?from=${from}&to=${to}&date=${date}&returnDate=${returnDate}&adults=${adults}&children=${children}`,
                    }}
                />
            )}
        </div>
    );
};

export default FlightSearchFields;
