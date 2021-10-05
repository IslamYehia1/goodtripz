import AirportSearch from "../../components/SearchFields/FlightAirportSearch/AirportSearch";
import DateInput from "../../components/SearchFields/RangeDatePicker";
import { FiltersModal, SearchModal } from "../../components/Modal";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import { SearchIcon } from "../../components/Icons";
import { FlightsSideBarT } from "./types";
import style from "../../../styles/SearchResults.module.scss";

const FlightsSideBar = (props: FlightsSideBarT) => {
    return (
        <>
            <div className={`${style.sideSection} ${style.searchTerms}`}>
                <SearchModal
                    altClassName={style.lilSearchField}
                    className={style.modal}
                >
                    <AirportSearch
                        label="From"
                        inputClass={style.textField}
                        wrapperClass={style.textFieldWrapper}
                        suggestionsClass={style.suggestions}
                        placeholder="Departure"
                        value="New york"
                    />
                </SearchModal>
                <SearchModal
                    altClassName={style.lilSearchField}
                    className={style.modal}
                >
                    <AirportSearch
                        label="To"
                        inputClass={style.textField}
                        wrapperClass={style.textFieldWrapper}
                        suggestionsClass={style.suggestions}
                        value="New york"
                        placeholder="Destination"
                    />
                </SearchModal>

                <SearchModal className={style.modal}>
                    <DateInput
                        rangeClass={style.dateRangeWrapper}
                        singleDateClass={style.lilSearchField}
                        className={style.searchField}
                        fromLabel="Date"
                        toLabel="Return date"
                    />
                </SearchModal>
                <div className={style.lilSearchField}>
                    <InputField
                        className={style.textField}
                        wrapperClass={style.textFieldWrapper}
                        value="Amesterdam"
                        label="Travellers"
                        name="travellers"
                    />
                </div>
                <div className={style.lilSearchField}>
                    <InputField
                        className={style.textField}
                        wrapperClass={style.textFieldWrapper}
                        value="Amesterdam"
                        label="Tier"
                        name="tier"
                    />
                </div>
            </div>
            <FiltersModal
                closeModal={() => {
                    props.closeModal();
                }}
                isOpen={props.isFullScreen}
                className={style.modal}
            >
                {(!props.isMobile || props.isFullScreen) && (
                    <>
                        <div
                            className={`${style.sideSection} ${style.priceRange}`}
                        >
                            <span>Price range</span>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                className={style.priceSlider}
                            />
                        </div>
                        <div
                            className={`${style.sideSection} ${style.addExtra}`}
                        >
                            <div className={`${style.addHotel}`}>
                                <input type="checkbox" name="addHotel" />
                                <label htmlFor="addHotel">Add hotel</label>
                            </div>
                            <div className={`${style.addCar}`}>
                                <input type="checkbox" name="addCar" />
                                <label htmlFor="addCar">Add car</label>
                            </div>
                        </div>
                        <div>
                            <Button
                                handleClick={() => {}}
                                className={`${style.button} ${style.updateSearchBtn}`}
                                icon={SearchIcon}
                            >
                                Update
                            </Button>
                        </div>
                    </>
                )}
            </FiltersModal>
        </>
    );
};

export default FlightsSideBar;
