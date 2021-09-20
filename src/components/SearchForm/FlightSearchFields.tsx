import React, { useState, useReducer, useEffect } from "react";
import flightTakeoffIcon from "../../icons/flight_takeoff_black_24dp.svg";
import expandArrow from "../../icons/expand_more_black_24dp.svg";
import DateInput from "../RangeDatePicker/RangeDatePicker";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import flightLandIcon from "../../icons/flight_land_black_24dp.svg";
import searchIcon from "../../icons/search_white.svg";
import AirportSearch from "../AirportSearch/AirportSearch";
import { fetchFlights } from "./fetchFlights";
const FlightSearchFields = () => {
    /*Search fields and autocomplete suggestions should be full screen on mobile */

    function searchHandler() {
        (async () => {
            const results = await fetchFlights();
            console.log(results);
        })();
    }

    return (
        <div className="flightSearchFields">
            <div className="options">
                <Modal className="modal">
                    <span className="travellers">
                        <Button
                            icon={expandArrow}
                            className="button"
                            handleClick={() => {}}
                        >
                            1 Traveller
                        </Button>
                    </span>
                </Modal>
                <Modal className="modal">
                    <span className="flightType">
                        <Button
                            icon={expandArrow}
                            className="button"
                            handleClick={() => {}}
                        >
                            Round trip
                        </Button>
                    </span>
                </Modal>
            </div>
            <div className="fields">
                {/* -------- Departure airport search field -------- */}
                <Modal
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
                    />
                </Modal>
                {/* -------- Destination airport search field -------- */}

                <Modal
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
                    />
                </Modal>
                {/* -------- Date picker search field -------- */}

                <Modal
                    altClassName="aSearchField flightSearchField
                    dateSearchField"
                    className="modal"
                >
                    <DateInput />
                </Modal>
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

export default FlightSearchFields;
