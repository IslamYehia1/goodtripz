import { useRouter } from "next/router";
import FlightsSideBar from "../../src/components/SearchResults/FlightsSideBar";
import FlightOffers from "../../src/components/SearchResults/FlightOffers";
import SideBarNav from "../../src/components/SearchResults/SideBarNav";
import { useState, useEffect, useReducer } from "react";
import { searchResultsT } from "../../src/components/SearchResults/types";
import style from "../../styles/SearchResults.module.scss";
import useIsMobile from "../../src/utils/useIsMobile";
import FilterAndSort from "../../src/components/FilterAndSort";
import { fetchAirport } from "../../src/utils/fetchAirportName";
import reducer from "../../src/utils/flightsSearchReducer";
type searchQueryT = {
  from?: string | string[];
  to?: string | string[];
  date?: string | string[];
  returnDate?: string | string[];
  adults?: string | string[];
  childs?: string | string[];
};
const SearchResults = (props: searchResultsT) => {
  const [filterModal, setFilterModal] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();
  const query = router.query;
  const initial: any = {
    from: { name: "", IATA: "" },
    to: { name: "", IATA: "" },
    date: "",
    returnDate: "",
    adults: "1",
    children: "0",
  };
  const [searchTerms, dispatch] = useReducer(reducer, initial);

  const [airports, setAirports] = useState({
    from: { city: "City", name: "WHAAT" },
    to: { city: "City", name: "WOOOW" },
  });
  useEffect(() => {
    if (!router.isReady) return;
    dispatch({ type: "pullFromUrl", query: query, val: "" });
    // console.log(searchTerms);
    (async () => {
      try {
        if (query.from && query.to) {
          const fromAirport = await fetchAirport(query.from as string);
          const toAirport = await fetchAirport(query.from as string);
          dispatch({
            type: "from",
            val: fromAirport!.Name,
            IATA: searchTerms.from.IATA,
          });
          dispatch({
            type: "to",
            val: toAirport!.City,
            IATA: searchTerms.from.IATA,
          });
          if (toAirport && fromAirport) {
            setAirports({
              from: { city: fromAirport.City, name: fromAirport.Name },
              to: { city: toAirport.City, name: toAirport.Name },
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [router.isReady]);
  return (
    <div className={style.searchResultsPage}>
      <div className={style.sideBar}>
        <SideBarNav
          activeTab={"flights"}
          onTabChange={(tab) => {
            router.replace("hotels/");
          }}
        />
        <FlightsSideBar
          closeModal={() => {
            setFilterModal(false);
          }}
          airports={airports}
          searchQuery={searchTerms}
          isFullScreen={filterModal}
          isMobile={isMobile}
          dispatch={({ val, IATA }) => dispatch({ type: "from", val: val, IATA: IATA })}
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
        <FlightOffers airports={airports} searchQuery={query} />
      </div>
    </div>
  );
};

export default SearchResults;
