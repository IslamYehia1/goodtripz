import FlightOffer from "../../components/FlightOffer/FlightOffer";
import InputField from "../../components/InputField/InputField";
import "./flightSearch.scss";
import AirportSearch from "../../components/AirportSearch/AirportSearch";
import Modal from "../../components/Modal/Modal";
import DateInput from "../../components/RangeDatePicker/RangeDatePicker";
import Button from "../../components/Button/Button";
import { ReactComponent as FlightIcon } from "../../icons/flight_takeoff_black_24dp.svg";
import { ReactComponent as HotelIcon } from "../../icons/hotel_black_24dp.svg";
import { ReactComponent as CarIcon } from "../../icons/directions_car_filled_black_24dp.svg";
import { useEffect } from "react";
import { useState } from "react";
const FlightSearch = (props: any) => {
    const [searchState, setSearchState] = useState("flight");
    return (
        <div className="flightSearchPage">
            <div className="sideBar">
                <div className="littleTabs">
                    <Button
                        handleClick={(e) => {
                            setSearchState("flight");
                        }}
                        id={searchState === "flight" ? "activeLittleTab" : ""}
                        className="littleTab button"
                        icon={FlightIcon}
                    >
                        Flights
                    </Button>
                    <Button
                        handleClick={(e) => {
                            setSearchState("hotel");
                        }}
                        id={searchState === "hotel" ? "activeLittleTab" : ""}
                        className="littleTab button"
                        icon={HotelIcon}
                    >
                        Hotels
                    </Button>
                    <Button
                        handleClick={(e) => {
                            setSearchState("car");
                        }}
                        id={searchState === "car" ? "activeLittleTab" : ""}
                        className="littleTab button"
                        icon={CarIcon}
                    >
                        Cars
                    </Button>
                </div>
                <div className="sideBarSection searchTerms">
                    <Modal altClassName="lilSearchField" className="modal">
                        <AirportSearch
                            label="From"
                            inputClass="searchInput"
                            suggestionsClass="suggestions"
                            placeholder="Departure"
                            value="New york"
                        />
                    </Modal>
                    <Modal altClassName="lilSearchField" className="modal">
                        <AirportSearch
                            label="To"
                            inputClass="searchInput"
                            suggestionsClass="suggestions"
                            value="New york"
                            placeholder="Destination"
                        />
                    </Modal>

                    <Modal className="modal">
                        <DateInput
                            wrapperClass="lilDateFields"
                            fieldClass="lilSearchField"
                            className="searchInput"
                        />
                    </Modal>
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
                <div className="sideBarSection priceRange">
                    <span>Price range</span>
                    <input
                        type="range"
                        min="1"
                        max="100"
                        className="priceSlider"
                    />
                </div>
                <div className="sideBarSection addExtra">
                    <div className="addHotel">
                        <input type="checkbox" name="addHotel" />
                        <label htmlFor="addHotel">Add hotel</label>
                    </div>
                    <div className="addCar">
                        <input type="checkbox" name="addCar" />
                        <label htmlFor="addCar">Add car</label>
                    </div>
                </div>
                <button className="updateSearchTerms"></button>
            </div>
            <div className="flightOffers">
                <FlightOffer />
                <FlightOffer />
                <FlightOffer />
            </div>
        </div>
    );
};

export default FlightSearch;
