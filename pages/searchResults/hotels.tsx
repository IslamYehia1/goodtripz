import HotelsSideBar from "../../src/components/SearchResults/HotelsSideBar";
import HotelOffers from "../../src/components/SearchResults/HotelOffers";
import SideBarNav from "../../src/components/SearchResults/SideBarNav";
import useIsMobile from "../../src/utils/useIsMobile";
import style from "../../styles/SearchResults.module.scss";
import FilterAndSort from "../../src/components/FilterAndSort";

import { useState } from "react";
const Hotels = () => {
    const isMobile = useIsMobile();
    const [filterModal, setFilterModal] = useState(false);

    return (
        <div className={style.searchResultsPage}>
            <div className={style.sideBar}>
                <SideBarNav
                    activeTab={"hotels"}
                    // onTabChange={(tab) => {
                    //     setSearchType(tab);
                    // }}
                />
                <HotelsSideBar
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
                <HotelOffers />
            </div>
        </div>
    );
};

export default Hotels;
