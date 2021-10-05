import { useState, useEffect } from "react";
import {SearchIcon,ExpandIcon,FlyToIcon,FlyFromIcon,DateIcon} from "../Icons"; //prettier-ignore
import DateInput from "../SearchFields/RangeDatePicker";
import Button from "../Button/Button";
import { SearchModal } from "../Modal";
import AirportSearch from "../SearchFields/FlightAirportSearch/AirportSearch";
import { useRouter } from "next/router";
import style from "./SearchForm.module.scss";
const FlightSearchFields = () => {
    let history = useRouter();
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
        <form onSubmit={handleSearch} className={style.flightSearchFields}>
            <div className={style.options}>
                <SearchModal className={style.modal}>
                    <span className={style.travellers}>
                        <Button
                            icon={ExpandIcon}
                            className={style.button}
                            handleClick={() => {}}
                        >
                            {`${searchTerms.adults}`} Adult
                        </Button>
                    </span>
                </SearchModal>
                <SearchModal className={style.modal}>
                    <span className={style.flightType}>
                        <Button
                            icon={ExpandIcon}
                            className={style.button}
                            handleClick={() => {}}
                        >
                            Round trip
                        </Button>
                    </span>
                </SearchModal>
            </div>
            <div className={style.fields}>
                {/* -------- Departure airport search field -------- */}
                <SearchModal
                    altClassName={`${style.aSearchField} ${style.flightSearchField}`}
                    className={style.modal}
                >
                    <AirportSearch
                        label="Flying from"
                        inputClass={style.textField}
                        wrapperClass={style.textFieldWrapper}
                        suggestionsClass={style.suggestions}
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
                    altClassName={`${style.aSearchField} ${style.flightSearchField}`}
                    className={style.modal}
                >
                    <AirportSearch
                        label="Flying to"
                        icon={FlyToIcon}
                        inputClass={style.textField}
                        wrapperClass={style.textFieldWrapper}
                        suggestionsClass={style.suggestions}
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
                    altClassName={`${style.aSearchField} ${style.flightSearchField} ${style.dateSearchField}`}
                    className={style.modal}
                >
                    <DateInput
                        fromLabel="Date"
                        toLabel="Return date"
                        icon={DateIcon}
                        className={style.textField}
                        wrapperClass={style.textFieldWrapper}
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
                    className={`${style.button} ${style.searchButton}`}
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
