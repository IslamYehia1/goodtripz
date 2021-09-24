import Button from "../Button/Button";
import DateInput from "../RangeDatePicker/RangeDatePicker";
import { ReactComponent as SearchIcon } from "../../icons/search_white.svg";
import { SearchModal } from "../Modal/Modal";
import { ReactComponent as ExpandArrow } from "../../icons/expand_more_black_24dp.svg";
import HotelSearch from "../HotelSearch/HotelSearch";
import DateIcon from "../../icons/calendar_black.svg";
import locationIcon from "../../icons/location.svg";
import { useState } from "react";
import { fetchFlights } from "./fetchFlights";

const HotelSearchFields = () => {
    function searchHandler() {}
    const [place, setPlace] = useState("");
    const [date, setDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
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
                <SearchModal
                    altClassName="aSearchField hotelSearchField"
                    className="modal"
                >
                    <HotelSearch
                        label="Going to"
                        icon={locationIcon}
                        inputClass="searchTextInput"
                        onSuggestionSelected={(suggestion) => {
                            setPlace(suggestion);
                        }}
                    />
                </SearchModal>

                <SearchModal
                    altClassName="aSearchField hotelSearchField dateSearchField"
                    className="modal"
                >
                    <DateInput
                        fromLabel="Check in"
                        toLabel="Check out"
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
export default HotelSearchFields;
