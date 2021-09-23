import AirportSearch from "../../components/AirportSearch/AirportSearch";
import DateInput from "../../components/RangeDatePicker/RangeDatePicker";
import { FiltersModal, SearchModal } from "../../components/Modal/Modal";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import { ReactComponent as SearchIcon } from "../../icons/search_white.svg";

type FlightsSideBar = {
    onModalClose: () => void;
    filtersModal: Boolean;
    isMobile: Boolean;
};
const FlightsSideBar = (props: FlightsSideBar) => {
    return (
        <>
            <div className="sideSection searchTerms">
                <SearchModal altClassName="lilSearchField" className="modal">
                    <AirportSearch
                        label="From"
                        inputClass="searchInput"
                        suggestionsClass="suggestions"
                        placeholder="Departure"
                        value="New york"
                    />
                </SearchModal>
                <SearchModal altClassName="lilSearchField" className="modal">
                    <AirportSearch
                        label="To"
                        inputClass="searchInput"
                        suggestionsClass="suggestions"
                        value="New york"
                        placeholder="Destination"
                    />
                </SearchModal>

                <SearchModal className="modal">
                    <DateInput
                        wrapperClass="lilDateFields"
                        fieldClass="lilSearchField"
                        className="searchInput"
                    />
                </SearchModal>
                <div className="lilSearchField">
                    <InputField
                        className="searchInput"
                        value="Amesterdam"
                        label="Travellers"
                        name="travellers"
                    />
                </div>
                <div className="lilSearchField">
                    <InputField
                        className="searchInput"
                        value="Amesterdam"
                        label="Tier"
                        name="tier"
                    />
                </div>
            </div>
            <FiltersModal
                closeModal={() => {
                    props.onModalClose();
                }}
                isOpen={props.filtersModal}
                className="modal"
            >
                {(!props.isMobile || props.filtersModal) && (
                    <>
                        <div className="sideSection priceRange">
                            <span>Price range</span>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                className="priceSlider"
                            />
                        </div>
                        <div className="sideSection addExtra">
                            <div className="addHotel">
                                <input type="checkbox" name="addHotel" />
                                <label htmlFor="addHotel">Add hotel</label>
                            </div>
                            <div className="addCar">
                                <input type="checkbox" name="addCar" />
                                <label htmlFor="addCar">Add car</label>
                            </div>
                        </div>
                        <div>
                            <Button
                                handleClick={() => {}}
                                className="button updateSearchBtn"
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
