import Button from "../Button/Button";
import DateInput from "../SearchFields/RangeDatePicker";
import { SearchIcon } from "../Icons";
import { SearchModal } from "../Modal";
import HotelSearch from "../SearchFields/HotelPlaceSearch/HotelPlaceSearch";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { LocationIcon, DateIcon, ExpandIcon } from "../Icons";
const HotelSearchFields = () => {
    const history = useHistory();
    function searchHandler() {
        history.push(
            `/SearchResults/hotels?place=${searchTerms.place}&checkIn=${searchTerms.checkIn}&checkOut=${searchTerms.checkOut}`
        );
    }

    const [searchTerms, setSearchTerms] = useState({
        place: "",
        checkIn: "",
        checkOut: "",
    });
    return (
        <form onSubmit={searchHandler} className="hotelSearchFields">
            <div className="options">
                <span className="travellers">
                    <Button
                        icon={ExpandIcon}
                        className="button"
                        handleClick={() => {}}
                    >
                        1 Traveller
                    </Button>
                </span>
                <span className="flightType">
                    <Button
                        icon={ExpandIcon}
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
                <Button
                    className="button searchButton"
                    handleClick={searchHandler}
                    icon={SearchIcon}
                >
                    <SearchIcon />
                </Button>
            </div>
        </form>
    );
};
export default HotelSearchFields;
