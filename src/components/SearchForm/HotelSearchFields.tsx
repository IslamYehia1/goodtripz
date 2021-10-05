import Button from "../Button/Button";
import DateInput from "../SearchFields/RangeDatePicker";
import { SearchIcon } from "../Icons";
import { SearchModal } from "../Modal";
import Image from "next/image";
import HotelSearch from "../SearchFields/HotelPlaceSearch/HotelPlaceSearch";
import { useState } from "react";
import { LocationIcon, DateIcon, ExpandIcon } from "../Icons";
import { useRouter } from "next/router";
import style from "./SearchForm.module.scss";

const HotelSearchFields = () => {
    const history = useRouter();
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
        <form onSubmit={searchHandler} className={style.hotelSearchFields}>
            <div className={style.options}>
                <span className={style.travellers}>
                    <Button
                        icon={ExpandIcon}
                        className={style.button}
                        handleClick={() => {}}
                    >
                        1 Traveller
                    </Button>
                </span>
                <span className={style.flightType}>
                    <Button
                        icon={ExpandIcon}
                        className={style.button}
                        handleClick={() => {}}
                    >
                        Round trip
                    </Button>
                </span>
            </div>
            <div className={style.fields}>
                <SearchModal
                    altClassName={`${style.aSearchField} ${style.hotelSearchField}`}
                    className={style.modal}
                >
                    <HotelSearch
                        label="Going to"
                        icon={LocationIcon}
                        inputClass={style.textField}
                        inputWrapperClass={style.textFieldWrapper}
                        onSuggestionSelected={(suggestion) => {
                            setSearchTerms({
                                ...searchTerms,
                                place: suggestion,
                            });
                        }}
                    />
                </SearchModal>

                <SearchModal
                    altClassName={`${style.aSearchField} ${style.hotelSearchField} ${style.dateSearchField}`}
                    className={style.modal}
                >
                    <DateInput
                        fromLabel="Check in"
                        toLabel="Check out"
                        icon={DateIcon}
                        className={style.textField}
                        wrapperClass={style.textFieldWrapper}
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
                    className={`${style.button} ${style.searchButton}`}
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
