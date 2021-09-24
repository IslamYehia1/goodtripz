import "./searchResults.scss";
import Button from "../../components/Button/Button";
import { ReactComponent as FlightIcon } from "../../icons/flight_takeoff_black_24dp.svg";
import { ReactComponent as HotelIcon } from "../../icons/hotel_black_24dp.svg";
import { ReactComponent as CarIcon } from "../../icons/directions_car_filled_black_24dp.svg";
import { ReactComponent as SortIcon } from "../../icons/sort_black_24dp.svg";
import { ReactComponent as FilterIcon } from "../../icons/filter_list_black_24dp.svg";
import { useState, useEffect } from "react";
import FlightsSideBar from "./FlightsSideBar";
import HotelsSideBar from "./HotelsSideBar";
import FlightOffers from "./FlightOffers";
import HotelsOffers from "./HotelsOffers";
const SearchResults = (props: any) => {
    const [searchState, setSearchState] = useState("flights");
    const [isMobile, setIsMobile] = useState(false);
    const [filterModal, setFilterModal] = useState(false);
    useEffect(() => {
        if (window.innerWidth <= 790) setIsMobile(true);
        function checkSize() {
            if (window.innerWidth <= 790) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        window.addEventListener("resize", checkSize);
    }, []);
    return (
        <div className="searchResultsPage">
            <div className="sideBar">
                <div className="littleTabs">
                    <Button
                        handleClick={(e) => {
                            setSearchState("flights");
                        }}
                        id={searchState === "flights" ? "activeLittleTab" : ""}
                        className="littleTab button"
                        icon={FlightIcon}
                    >
                        Flights
                    </Button>
                    <Button
                        handleClick={(e) => {
                            setSearchState("hotels");
                        }}
                        id={searchState === "hotels" ? "activeLittleTab" : ""}
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
                {searchState === "flights" && (
                    <FlightsSideBar
                        onModalClose={() => {
                            setFilterModal(false);
                        }}
                        filtersModal={filterModal}
                        isMobile={isMobile}
                    />
                )}
                {searchState === "hotels" && <HotelsSideBar />}
            </div>
            <div className="searchResults">
                <div className="filterAndSort">
                    <Button
                        className="button sortBtn"
                        icon={SortIcon}
                        handleClick={() => {
                            if (isMobile) {
                                setFilterModal(true);
                            }
                        }}
                    >
                        Sort by
                    </Button>
                    {isMobile && (
                        <Button
                            className="button filterBtn"
                            icon={FilterIcon}
                            handleClick={() => {
                                if (isMobile) {
                                    setFilterModal(true);
                                }
                            }}
                        >
                            Filter
                        </Button>
                    )}
                </div>
                {searchState === "flights" && <FlightOffers />}
                {searchState === "hotels" && <HotelsOffers />}
            </div>
        </div>
    );
};

export default SearchResults;
