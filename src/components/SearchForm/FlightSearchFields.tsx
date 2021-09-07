import React, { useState } from "react";
import fetchSuggestions from "./fetchSuggestions";
import Suggestions from "./Suggestions";
import flightLandIcon from "../../icons/flight_land_black_24dp.svg";
import flightTakeoffIcon from "../../icons/flight_takeoff_black_24dp.svg";
import InputField from "../InputField/InputField";
import DateInput from "./RangeDatePicker";
import Button from "../Button/Button";
import searchIcon from "../../icons/search_white.svg";
import Modal from "../Modal/Modal";
import "./flightSearchFields.scss";
const FlightSearchFields = () => {
    const [suggestions, setSuggestions] = useState<Array<string[]>>([]);
    const [showSuggestions, setShowSuggestions] = useState("");
    const [flightFieldWidth, setFlightFieldWidth] = useState({
        from: "33%",
        to: "33%",
    });
    const [fullScreen, setFullScreen] = useState({
        departure: false,
        destination: false,
        date: false,
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
    function searchHandler() {}

    // When an searchInput is in focus expand it and make the sibling smaller

    return (
        <div className="flightSearchFields">
            <Modal isOpen={fullScreen.departure} className="modal">
                <div
                    // style={{ width: flightFieldWidth.from }}
                    className="aSearchField flightSearchField"
                >
                    <InputField
                        focusHandler={(e) => {
                            setShowSuggestions("departure");
                            if (window.screen.width <= 650)
                                setFullScreen({
                                    ...fullScreen,
                                    departure: true,
                                });
                            setFlightFieldWidth({ from: "40%", to: "26%" });
                        }}
                        blurHandler={(e) => {
                            setShowSuggestions("");
                            setSuggestions([]);
                            setFlightFieldWidth({ from: "33%", to: "33%" });
                        }}
                        handleKeyUp={handleKeyUp}
                        label="Departure"
                        className="searchTextInput"
                        icon={flightTakeoffIcon}
                        name="departure"
                        placeholder="Flying from"
                    />
                    {showSuggestions === "departure" ? (
                        <Suggestions
                            className="suggestions"
                            suggestions={suggestions}
                        />
                    ) : null}
                </div>
            </Modal>
            <Modal isOpen={fullScreen.destination} className="modal">
                <div
                    className="aSearchField flightSearchField"
                    // style={{ width: flightFieldWidth.to }}
                >
                    <InputField
                        focusHandler={(e) => {
                            setShowSuggestions("destination");
                            setFlightFieldWidth({ from: "26%", to: "40%" });
                            setFullScreen({
                                ...fullScreen,
                                destination: true,
                            });
                        }}
                        blurHandler={(e) => {
                            setShowSuggestions("");
                            setSuggestions([]);
                            setFlightFieldWidth({ from: "33%", to: "33%" });
                        }}
                        handleKeyUp={handleKeyUp}
                        label="Destination"
                        className="searchTextInput"
                        icon={flightLandIcon}
                        name="destination"
                        placeholder="Flying to"
                    />
                    {showSuggestions === "destination" ? (
                        <Suggestions
                            className="suggestions"
                            suggestions={suggestions}
                        />
                    ) : null}
                </div>
            </Modal>
            <Modal isOpen={fullScreen.date} className="modal">
                <DateInput
                    onClick={() => {
                        setFullScreen({
                            ...fullScreen,
                            date: true,
                        });
                    }}
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
