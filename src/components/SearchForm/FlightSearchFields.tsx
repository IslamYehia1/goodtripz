import React, { useState, useReducer, useEffect } from "react";
import { ReactComponent as FlightTakeoffIcon } from "../../icons/flight_takeoff_black_24dp.svg";
import { ReactComponent as ExpandArrow } from "../../icons/expand_more_black_24dp.svg";
import { ReactComponent as SearchIcon } from "../../icons/search_white.svg";
import DateInput from "../RangeDatePicker";
import Button from "../Button/Button";
import { SearchModal } from "../Modal/Modal";
import AirportSearch from "../AirportSearchField/AirportSearch";
import { ReactComponent as DateIcon } from "../../icons/calendar_black.svg";
import { Link } from "react-router-dom";
const FlightSearchFields = () => {
    /*Search fields and autocomplete suggestions should be full screen on mobile */
    const [searchTerms, setSearchTerms] = useState({
        from: "",
        to: "",
        date: "",
        returnDate: "",
        adults: 1,
        children: 0,
    });
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
                            {`${searchTerms.adults}`} Adult
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
                        onSuggestionSelect={(suggestion) =>
                            setSearchTerms({
                                ...searchTerms,
                                from: suggestion,
                            })
                        }
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
                            setSearchTerms({
                                ...searchTerms,
                                to: suggestion,
                            });
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
                            setSearchTerms({
                                ...searchTerms,
                                date: day.toISOString().substring(0, 10),
                            });
                        }}
                        onToDateSelected={(day: Date) => {
                            setSearchTerms({
                                ...searchTerms,
                                returnDate: day.toISOString().substring(0, 10),
                            });
                        }}
                    />
                </SearchModal>
                <Link
                    className="button searchButton"
                    to={`/searchResults/flights?from=${searchTerms.from}&to=${searchTerms.to}&date=${searchTerms.date}&returnDate=${searchTerms.returnDate}&adults=${searchTerms.adults}&children=${searchTerms.children}`}
                >
                    <SearchIcon />
                </Link>
            </div>
        </div>
    );
};

export default FlightSearchFields;
