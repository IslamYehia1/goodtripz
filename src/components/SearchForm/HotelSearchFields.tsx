import Button from "../Button/Button";
import DateInput from "../RangeDatePicker";
import { ReactComponent as SearchIcon } from "../../icons/search_white.svg";
import { SearchModal } from "../Modal/Modal";
import { ReactComponent as ExpandArrow } from "../../icons/expand_more_black_24dp.svg";
import HotelSearch from "../HotelSearch/HotelSearch";
import { ReactComponent as DateIcon } from "../../icons/calendar_black.svg";
import { ReactComponent as LocationIcon } from "../../icons/location.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const HotelSearchFields = () => {
    function searchHandler() {}

    const [searchTerms, setSearchTerms] = useState({
        place: "",
        checkIn: "",
        checkOut: "",
    });
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
                        icon={LocationIcon}
                        inputClass="searchTextInput"
                        onSuggestionSelected={(suggestion) => {
                            setSearchTerms({
                                ...searchTerms,
                                place: suggestion,
                            });
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
                            setSearchTerms({
                                ...searchTerms,
                                checkIn: day.toISOString().substring(0, 10),
                            });
                        }}
                        onToDateSelected={(day: Date) => {
                            setSearchTerms({
                                ...searchTerms,
                                checkOut: day.toISOString().substring(0, 10),
                            });
                        }}
                    />
                </SearchModal>
                <Link
                    to={`/SearchResults/hotels?place=${searchTerms.place}&checkIn=${searchTerms.checkIn}&checkOut=${searchTerms.checkOut}`}
                    className="button searchButton"
                >
                    <SearchIcon />
                </Link>
            </div>
        </div>
    );
};
export default HotelSearchFields;
