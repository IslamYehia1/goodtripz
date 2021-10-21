import HotelsSideBar from "../../src/components/SearchResults/HotelsSideBar";
import HotelOffers from "../../src/components/SearchResults/HotelOffers";
import SideBarNav from "../../src/components/SearchResults/SideBarNav";
import useIsMobile from "../../src/utils/useIsMobile";
import style from "../../styles/SearchResults.module.scss";
import FilterAndSort from "../../src/components/FilterAndSort";
import { useRouter } from "next/router";
import { useState, useReducer, useEffect } from "react";
import reducer from "../../src/components/SearchResults/hotelsReducer";
const Hotels = () => {
  const isMobile = useIsMobile();
  const [filterModal, setFilterModal] = useState(false);
  const router = useRouter();
  const query = router.query;
  const initial = {
    place: "",
    checkIn: "",
    checkOut: "",
    adults: "1",
    rooms: "1",
  };

  const [searchTerms, dispatch] = useReducer(reducer, initial);
  useEffect(() => {
    if (!router.isReady) return;
    dispatch({ type: "pullFromUrl", query: query });
  }, [router.isReady]);
  return (
    <div className={style.searchResultsPage}>
      <div className={style.sideBar}>
        <SideBarNav
          activeTab={"hotels"}
          onTabChange={(tab) => {
            router.replace("flights/");
          }}
        />
        <HotelsSideBar
          dispatch={dispatch}
          closeModal={() => {
            setFilterModal(false);
          }}
          searchTerms={searchTerms}
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
