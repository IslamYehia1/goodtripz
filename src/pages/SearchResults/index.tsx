import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./searchResults.scss";
import Button from "../../components/Button/Button";
import FlightsSideBar from "./FlightsSideBar";
import HotelsSideBar from "./HotelsSideBar";
import FlightOffers from "./FlightOffers";
import HotelsOffers from "./HotelsOffers";
import { SortIcon, FilterIcon } from "../../components/Icons";
import { searchResultsT } from "./types";
import SideBarNav from "./SideBarNav";

const SearchResults = (props: searchResultsT) => {
    const { type } = useParams<{ type: string }>();
    const [searchType, setSearchType] = useState(type);
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
                <SideBarNav
                    activeTab={searchType}
                    onTabChange={(tab) => {
                        setSearchType(tab);
                    }}
                />
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
                    <FlightOffers />
                )}
                {searchType === "hotels" && <HotelsOffers />}
            </div>
        </div>
    );
};

export default SearchResults;
