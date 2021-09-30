import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./searchResults.scss";
import Button from "../../components/Button/Button";
import FlightsSideBar from "./FlightsSideBar";
import HotelsSideBar from "./HotelsSideBar";
import FlightOffers from "./FlightOffers";
import HotelsOffers from "./HotelsOffers";
import { FlightIcon, HotelIcon, CarIcon } from "../../components/Icons/Icons";
import { SortIcon, FilterIcon } from "../../components/Icons/Icons";
import { fetchFlights } from "../../utils/fetchFlights";
import * as fakeOffers from "./offers.json";
import { fetchAirport } from "../../utils/fetchAirportName";
const SearchResults = (props: any) => {
    const [searchType, setSearchType] = useState("flights");
    const [isMobile, setIsMobile] = useState(false);
    const [filterModal, setFilterModal] = useState(false);
    const [searchResults, setSearchResults] = useState<Array<Object>>();
    const [cities, setCities] = useState({
        from: "City",
        to: "City",
    });
    const queryParams = new URLSearchParams(useLocation().search);
    const query = {
        from: queryParams.get("from"),
        to: queryParams.get("to"),
        date: queryParams.get("date"),
        returnDate: queryParams.get("returnDate") || undefined,
    };

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

    useEffect(() => {
        (async () => {
            try {
                // if (from && to && date) {
                //     setSearchResults(
                //         await fetchFlights({
                //             from: from,
                //             to: to,
                //             date: date,
                //             returnDate: returnDate,
                //             adults: 1,
                //             children: 0,
                //         })
                //     );
                // }
                console.log(query);
                if (query.from && query.to) {
                    const fromCity = await fetchAirport(query.from);
                    const toCity = await fetchAirport(query.to);
                    if (toCity && fromCity) {
                        setCities({
                            from: fromCity.City,
                            to: toCity.City,
                        });
                    }
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [query.from, query.to, query.date, query.returnDate]);

    return (
        <div className="searchResultsPage">
            <div className={`sideBar`}>
                <div className="lilTabs">
                    <Button
                        handleClick={(e) => {
                            setSearchType("flights");
                        }}
                        id={searchType === "flights" ? "activeLilTab" : ""}
                        className="lilTab button"
                        icon={FlightIcon}
                    >
                        Flights
                    </Button>
                    <Button
                        handleClick={(e) => {
                            setSearchType("hotels");
                        }}
                        id={searchType === "hotels" ? "activeLilTab" : ""}
                        className="lilTab button"
                        icon={HotelIcon}
                    >
                        Hotels
                    </Button>
                    <Button
                        handleClick={(e) => {
                            setSearchType("car");
                        }}
                        id={searchType === "car" ? "activeLilTab" : ""}
                        className="lilTab button"
                        icon={CarIcon}
                    >
                        Cars
                    </Button>
                </div>
                {searchType === "flights" && (
                    <FlightsSideBar
                        closeModal={() => {
                            setFilterModal(false);
                        }}
                        isFullScreen={filterModal}
                        isMobile={isMobile}
                    />
                )}
                {searchType === "hotels" && (
                    <HotelsSideBar
                        closeModal={() => {
                            setFilterModal(false);
                        }}
                        isFullScreen={filterModal}
                        isMobile={isMobile}
                    />
                )}
            </div>
            <div className="searchResults">
                <div className="filterAndSort">
                    <Button
                        className="button sortBtn"
                        icon={SortIcon}
                        handleClick={() => {
                            if (isMobile) setFilterModal(true);
                        }}
                    >
                        Sort by
                    </Button>
                    {isMobile && (
                        <Button
                            className="button filterBtn"
                            icon={FilterIcon}
                            handleClick={() => {
                                if (isMobile) setFilterModal(true);
                            }}
                        >
                            Filter
                        </Button>
                    )}
                </div>
                {searchType === "flights" && (
                    // <FlightOffers offers={searchResults} />
                    <FlightOffers offers={fakeOffers} cities={cities} />
                )}
                {searchType === "hotels" && <HotelsOffers />}
            </div>
        </div>
    );
};

export default SearchResults;
