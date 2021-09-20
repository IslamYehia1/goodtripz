import FlightOffer from "../../components/FlightOffer/FlightOffer";
import InputField from "../../components/InputField/InputField";
import "./flightSearch.scss";
import AirportSearch from "../../components/AirportSearch/AirportSearch";
import Modal from "../../components/Modal/Modal";

const FlightSearch = (props: any) => {
    const isFullScreen: any = {};
    const setFullScreen: any = {};
    return (
        <div className="flightSearchPage">
            <div className="sideBar">
                <div className="sideBarItem searchTerms">
                    <div>
                        {/* <Modal className="modal">
                            <AirportSearch
                                label="From"
                                inputClass="searchInput"
                                suggestionsClass="suggestions"
                                wrapperClass="something"
                                placeholder="To"
                                setFullScreen={() =>
                                    setFullScreen({
                                        active: "destination",
                                        isOpen: true,
                                    })
                                }
                            />
                        </Modal> */}
                    </div>

                    <div>
                        <InputField
                            className="searchInput"
                            value="Amesterdam"
                            label="From"
                            name="from"
                        />
                        <InputField
                            className="searchInput"
                            value="Amesterdam"
                            label="From"
                            name="from"
                        />
                    </div>
                    <div>
                        <InputField
                            className="searchInput"
                            value="Amesterdam"
                            label="From"
                            name="from"
                        />
                        <InputField
                            className="searchInput"
                            value="Amesterdam"
                            label="From"
                            name="from"
                        />
                    </div>
                    <div>
                        <InputField
                            className="searchInput"
                            value="Amesterdam"
                            label="From"
                            name="from"
                        />
                        <InputField
                            className="searchInput"
                            value="Amesterdam"
                            label="From"
                            name="from"
                        />
                    </div>
                </div>
                <div className="sideBarItem priceRange">Price range</div>
                <div className="sideBarItem addExtra">
                    <span>Add hotel</span>
                    <span>Add car</span>
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
