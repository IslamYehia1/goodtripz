import React, { useState, useEffect, useReducer } from "react";
import InputField from "../InputField/InputField";
import locationIcon from "../../icons/location.svg";
import Suggestions from "./Suggestions";
import Button from "../Button/Button";
import DateInput from "../RangeDatePicker/RangeDatePicker";
import searchIcon from "../../icons/search_white.svg";
import Modal from "../Modal/Modal";
import { hotelAutoComplete as fetchSuggestions } from "./fetchSuggestions";

type fullScreenType = {
    hotelSearch?: Boolean;
    date?: Boolean;
};
type setFullScreenType = {
    active: string;
    isOpen: Boolean;
};
const HotelSearchFields = () => {
    const [suggestions, setSuggestions] = useState<Array<string[]>>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isFullScreen, setFullScreen] = useReducer(reducer, {
        hotelSearch: false,
        date: false,
    });

    function reducer(
        prevState: fullScreenType,
        action: setFullScreenType
    ): fullScreenType {
        switch (action.active) {
            case "hotelSearch":
                return { hotelSearch: action.isOpen };
            case "date":
                return { date: action.isOpen };
            default:
                return prevState;
        }
    }
    function isSuggestionClicked(e: React.FocusEvent<HTMLDivElement>) {
        return (
            e.relatedTarget !== null &&
            (e.relatedTarget as HTMLElement).classList.contains("suggestions")
        );
    }
    function focusHandler(focused: string) {
        if (window.screen.width <= 650) {
            setFullScreen({
                active: focused,
                isOpen: true,
            });
        }
    }

    useEffect(() => {
        (async () => {
            console.log("Before");
            setSuggestions(await fetchSuggestions(searchTerm));
            console.log("after");
        })();
    }, [searchTerm]);
    function searchHandler() {}

    return (
        <div className="hotelSearchFields">
            <Modal
                isOpen={isFullScreen.hotelSearch}
                closeModal={() => {
                    setFullScreen({ active: "hotelSearch", isOpen: false });
                }}
                className="modal"
            >
                <div
                    onBlur={(e) => {
                        if (!isSuggestionClicked(e)) setShowSuggestions(false);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    className="aSearchField hotelSearchField"
                >
                    <InputField
                        focusHandler={(e) => focusHandler("hotelSearch")}
                        placeholder="Hotel location"
                        label="Going to"
                        className="searchTextInput"
                        icon={locationIcon}
                        name="hotelLocation"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {showSuggestions && (
                        <Suggestions
                            onSuggestionClick={(searchTerm) => {
                                setShowSuggestions(false);
                                setSearchTerm(searchTerm);
                            }}
                            autocompleteSetter={setSearchTerm}
                            className="suggestions"
                            suggestions={suggestions}
                        />
                    )}
                </div>
            </Modal>

            <Modal
                isOpen={isFullScreen.date}
                closeModal={() => {
                    setFullScreen({ active: "departure", isOpen: false });
                }}
                className="modal"
            >
                <DateInput
                    onClick={(e) => focusHandler("hotelSearch")}
                    className="aSearchField hotelSearchField dateSearchField"
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
export default HotelSearchFields;
