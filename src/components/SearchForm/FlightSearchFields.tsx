import React, { useState, useReducer, useEffect } from "react";
import flightTakeoffIcon from "../../icons/flight_takeoff_black_24dp.svg";
import DateInput from "../RangeDatePicker/RangeDatePicker";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import flightLandIcon from "../../icons/flight_land_black_24dp.svg";
import searchIcon from "../../icons/search_white.svg";
import AirportSearch from "../AirportSearch/AirportSearch";
import { fetchFlights } from "./fetchFlights";
type actionType = {
    active: string;
    isOpen: Boolean;
};
type stateType = {
    [key: string]: Boolean;
};
const FlightSearchFields = () => {
    /*Search fields and autocomplete suggestions should be full screen on mobile */
    const [isFullScreen, setFullScreen] = useReducer(reducer, {
        departure: false,
        destination: false,
        date: false,
    });
    function reducer(state: stateType, action: actionType): stateType {
        switch (action.active) {
            case "departure":
                return { departure: action.isOpen };
            case "destination":
                return { destination: action.isOpen };
            case "date":
                return { date: action.isOpen };
            default:
                return state;
        }
    }

    function searchHandler() {}

    return (
        <div className="flightSearchFields">
            {/* -------- Departure airport search field -------- */}
            <Modal
                isOpen={isFullScreen.departure}
                closeModal={() =>
                    setFullScreen({ active: "departure", isOpen: false })
                }
                className="modal"
            >
                <AirportSearch
                    label="Flying from"
                    icon={flightTakeoffIcon}
                    placeholder="Departure airport"
                    setFullScreen={() =>
                        setFullScreen({
                            active: "departure",
                            isOpen: true,
                        })
                    }
                />
            </Modal>
            {/* -------- Destination airport search field -------- */}

            <Modal
                isOpen={isFullScreen.destination}
                closeModal={() =>
                    setFullScreen({ active: "destination", isOpen: false })
                }
                className="modal"
            >
                <AirportSearch
                    label="Flying to"
                    icon={flightLandIcon}
                    placeholder="Destination airport"
                    setFullScreen={() =>
                        setFullScreen({
                            active: "destination",
                            isOpen: true,
                        })
                    }
                />
            </Modal>
            {/* -------- Date picker search field -------- */}

            <Modal
                isOpen={isFullScreen.date}
                closeModal={() => {
                    setFullScreen({ active: "date", isOpen: false });
                }}
                className="modal"
            >
                <DateInput
                    // onClick={(e) => fieldFocusHandler("date")}
                    className="aSearchField flightSearchField dateSearchField"
                />
            </Modal>
            <Button
                handleClick={searchHandler}
                icon={searchIcon}
                className="button searchButton"
            >
                Search
            </Button>
        </div>
    );
};

export default FlightSearchFields;
