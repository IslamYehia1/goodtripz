import React, { useState, useReducer, useEffect, useRef } from "react";
import fetchSuggestions from "./fetchSuggestions";
import Suggestions from "./Suggestions";
import InputField from "../InputField/InputField";
import DateInput from "./RangeDatePicker";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import flightLandIcon from "../../icons/flight_land_black_24dp.svg";
import flightTakeoffIcon from "../../icons/flight_takeoff_black_24dp.svg";
import searchIcon from "../../icons/search_white.svg";
type actionType = {
    active: string;
    isOpen: Boolean;
};
type stateType = {
    [key: string]: Boolean;
};
const FlightSearchFields = () => {
    const [suggestions, setSuggestions] = useState<Array<string[]>>([]);
    const [showSuggestions, setShowSuggestions] = useState("");
    const [departureVal, setDepartureVal] = useState("");
    const [destinationVal, setDestinationVal] = useState("");
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
    let timer: NodeJS.Timeout;

    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        clearTimeout(timer);
        timer = setTimeout(async () => {
            setSuggestions(
                await fetchSuggestions((e.target as HTMLTextAreaElement).value)
            );
        }, 500);
    }
    function searchHandler() {}

    function isSuggestionClicked(e: React.FocusEvent<HTMLDivElement>) {
        return (
            e.relatedTarget !== null &&
            (e.relatedTarget as HTMLElement).classList.contains("suggestions")
        );
    }
    function fieldFocusHandler(focused: string) {
        setShowSuggestions(focused);
        if (window.screen.width <= 650) {
            setFullScreen({
                active: focused,
                isOpen: true,
            });
        }
    }

    return (
        <div className="flightSearchFields">
            {/* -------- Departure airport search field -------- */}

            <Modal
                isOpen={isFullScreen.departure}
                closeModal={() => {
                    setFullScreen({ active: "departure", isOpen: false });
                }}
                className="modal"
            >
                <div
                    className="aSearchField flightSearchField"
                    onBlur={(e) => {
                        // When a suggestion is clicked let the suggestion click handler do the hiding to avoid hiding the suggestions before firing the onBlur
                        if (!isSuggestionClicked(e)) {
                            setShowSuggestions("");
                        }
                    }}
                    // onFocus={changeFieldWidth}
                >
                    <InputField
                        focusHandler={(e) => fieldFocusHandler("departure")}
                        handleKeyUp={handleKeyUp}
                        label="Departure"
                        className="searchTextInput"
                        icon={flightTakeoffIcon}
                        name="departure"
                        value={departureVal}
                        onChange={(e) => setDepartureVal(e.target.value)}
                        placeholder="Flying from"
                        // selectedSuggestion={depAutocomplete}
                    />
                    {showSuggestions === "departure" && (
                        <Suggestions
                            className="suggestions"
                            suggestions={suggestions}
                            autocompleteSetter={setDepartureVal}
                            onSuggestionClick={() => {
                                setShowSuggestions("");
                                // setSuggestions([]);
                            }}
                        />
                    )}
                </div>
            </Modal>
            {/* -------- Destination airport search field -------- */}

            <Modal
                isOpen={isFullScreen.destination}
                closeModal={() =>
                    setFullScreen({ active: "destination", isOpen: false })
                }
                className="modal"
            >
                <div
                    onBlur={(e) => {
                        if (!isSuggestionClicked(e)) {
                            setShowSuggestions("");
                        }
                    }}
                    className="aSearchField flightSearchField"
                >
                    <InputField
                        focusHandler={(e) => fieldFocusHandler("destination")}
                        handleKeyUp={handleKeyUp}
                        label="Destination"
                        className="searchTextInput"
                        icon={flightLandIcon}
                        name="destination"
                        placeholder="Flying to"
                        value={destinationVal}
                        onChange={(e) => setDestinationVal(e.target.value)}
                        // selectedSuggestion={desAutocomplete}
                    />
                    {showSuggestions === "destination" && (
                        <Suggestions
                            className="suggestions"
                            suggestions={suggestions}
                            autocompleteSetter={setDestinationVal}
                            onSuggestionClick={() => {
                                setShowSuggestions("");
                                setSuggestions([]);
                            }}
                        />
                    )}
                </div>
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
                    onClick={(e) => fieldFocusHandler("date")}
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
