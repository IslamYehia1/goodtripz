import React, { useState, useEffect, useReducer } from "react";
import InputField from "../InputField/InputField";
import locationIcon from "../../icons/location.svg";
import Suggestions from "./Suggestions";
import Button from "../Button/Button";
import DateInput from "../RangeDatePicker/RangeDatePicker";
import { ReactComponent as SearchIcon } from "../../icons/search_white.svg";
import Modal from "../Modal/Modal";
import { hotelAutoComplete as fetchSuggestions } from "./fetchSuggestions";
import { ReactComponent as ExpandArrow } from "../../icons/expand_more_black_24dp.svg";

const HotelSearchFields = () => {
    const [suggestions, setSuggestions] = useState<Array<string[]>>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    function isSuggestionClicked(e: React.FocusEvent<HTMLDivElement>) {
        return (
            e.relatedTarget !== null &&
            (e.relatedTarget as HTMLElement).classList.contains("suggestions")
        );
    }

    useEffect(() => {
        (async () => {
            setSuggestions(await fetchSuggestions(searchTerm));
        })();
    }, [searchTerm]);
    function searchHandler() {}

    return (
        <div className="hotelSearchFields">
            <div className="options">
                <span className="travellers">
                    <Button
                        icon={ExpandArrow}
                        className="button"
                        handleClick={() => {}}
                    >
                        1 Traveller
                    </Button>
                </span>
                <span className="flightType">
                    <Button
                        icon={ExpandArrow}
                        className="button"
                        handleClick={() => {}}
                    >
                        Round trip
                    </Button>
                </span>
            </div>
            <div className="fields">
                <Modal
                    altClassName="aSearchField hotelSearchField"
                    className="modal"
                >
                    <div
                        onBlur={(e) => {
                            if (!isSuggestionClicked(e))
                                setShowSuggestions(false);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                    >
                        <InputField
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
                    altClassName="aSearchField hotelSearchField dateSearchField"
                    className="modal"
                >
                    <DateInput />
                </Modal>
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
export default HotelSearchFields;
