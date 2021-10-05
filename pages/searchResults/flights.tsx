import { useRouter } from "next/router";
import Button from "../../src/components/Button/Button";
import FlightsSideBar from "../../src/components/SearchResults/FlightsSideBar";
import FlightOffers from "../../src/components/SearchResults/FlightOffers";
import SideBarNav from "../../src/components/SearchResults/SideBarNav";
import { useState, useEffect } from "react";
import { searchResultsT } from "../../src/components/SearchResults/types";
import style from "../../styles/SearchResults.module.scss";
import useIsMobile from "../../src/utils/useIsMobile";
import FilterAndSort from "../../src/components/FilterAndSort";
const SearchResults = (props: searchResultsT) => {
    const { type }: any = useRouter().query;
    const [searchType, setSearchType] = useState(type);
    // console.log("OOOOOH", searchType);
    const [filterModal, setFilterModal] = useState(false);

    const isMobile = useIsMobile();

    return (
        <div className={style.searchResultsPage}>
            <div className={style.sideBar}>
                <SideBarNav
                    activeTab={"flights"}
                    // onTabChange={(tab) => {
                    //     setSearchType(tab);
                    // }}
                />
                <FlightsSideBar
                    closeModal={() => {
                        setFilterModal(false);
                    }}
                    isFullScreen={filterModal}
                    isMobile={isMobile}
                />
            </div>
            <div className={style.searchResults}>
                <FilterAndSort
                    sortClick={() => {
                        if (isMobile) setFilterModal(true);
                    }}
                    filterClick={() => {
                        if (isMobile) setFilterModal(true);
                    }}
                />
                {/* <FlightOffers offers={searchResults} /> */}
                <FlightOffers />
            </div>
        </div>
    );
};

export default SearchResults;
