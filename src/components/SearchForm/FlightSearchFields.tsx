import { useState } from "react";
import {SearchIcon,ExpandIcon,FlyToIcon,FlyFromIcon,DateIcon} from "../Icons"; //prettier-ignore
import DateInput from "../SearchFields/RangeDatePicker";
import Button from "../Button/Button";
import { SearchModal } from "../Modal";
import AirportSearch from "../SearchFields/FlightAirportSearch/AirportSearch";
import { useHistory } from "react-router-dom";

const FlightSearchFields = () => {
    let history = useHistory();
    function handleSearch() {
        history.push(
            `/searchResults/flights?from=${searchTerms.from}&to=${searchTerms.to}&date=${searchTerms.date}&returnDate=${searchTerms.returnDate}&adults=${searchTerms.adults}&children=${searchTerms.children}`
        );
    }
    const [searchTerms, setSearchTerms] = useState({
        from: "",
        to: "",
        date: "",
        returnDate: "",
        adults: 1,
        children: 0,
    });
    return (
        <form onSubmit={handleSearch} className="flightSearchFields">
            <div className="options">
                <SearchModal className="modal">
                    <span className="travellers">
                        <Button
                            icon={ExpandIcon}
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
                            icon={ExpandIcon}
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
                        icon={FlyFromIcon}
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
                        icon={FlyToIcon}
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
                <Button
                    className="button searchButton"
                    icon={SearchIcon}
                    handleClick={handleSearch}
                >
                    <SearchIcon />
                </Button>
            </div>
        </form>
    );
};

export default FlightSearchFields;
