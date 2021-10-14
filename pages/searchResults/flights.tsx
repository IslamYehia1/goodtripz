import { useRouter } from "next/router";
import FlightsSideBar from "../../src/components/SearchResults/FlightsSideBar";
import FlightOffers from "../../src/components/SearchResults/FlightOffers";
import SideBarNav from "../../src/components/SearchResults/SideBarNav";
import { useState, useEffect } from "react";
import { searchResultsT } from "../../src/components/SearchResults/types";
import style from "../../styles/SearchResults.module.scss";
import useIsMobile from "../../src/utils/useIsMobile";
import FilterAndSort from "../../src/components/FilterAndSort";
import { fetchAirport } from "../../src/utils/fetchAirportName";
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
  const [searchQuery, setSearchQuery] = useState<searchQueryT>({});
  const isMobile = useIsMobile();
  const router = useRouter();
  const { from, to, date, returnDate, adults, childs } = router.query;
  const [cities, setCities] = useState({
    from: "City",
    to: "City",
  });
  useEffect(() => {
    if (!router.isReady) return;
    setSearchQuery({ from, to, date, returnDate, adults, childs });
    (async () => {
      try {
        if (from && to) {
          const fromCity = await fetchAirport(from as string);
          const toCity = await fetchAirport(to as string);
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
  }, [router.isReady, from, to, date, returnDate, adults, childs]);
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
          cities={cities}
          searchQuery={searchQuery}
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
        <FlightOffers cities={cities} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default SearchResults;
