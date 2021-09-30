import AirportSearch from "../../components/AirportSearchField/AirportSearch";
import DateInput from "../../components/RangeDatePicker";
import { FiltersModal, SearchModal } from "../../components/Modal/Modal";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import { SearchIcon } from "../../components/Icons/Icons";

type FlightsSideBarT = {
    closeModal: () => void;
    isFullScreen: Boolean;
    isMobile: Boolean;
};
const FlightsSideBar = (props: FlightsSideBarT) => {
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
                        fromLabel="Date"
                        toLabel="Return date"
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
                    props.closeModal();
                }}
                isOpen={props.isFullScreen}
                className="modal"
            >
                {(!props.isMobile || props.isFullScreen) && (
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
