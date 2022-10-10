import SideBarNav from "./SideBarNav";
import FlightsSideBar from "./FlightsSideBar";
import FlightOffers from "./FlightOffers";
import style from "../../../styles/SearchResults.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchAirport } from "../../utils/fetchAirportName";
import { useFlightContext } from "../CommonContexts/FlightsContext";
// import style from "./FilterAndSort.module.scss";
import Button from "../Button/Button";
import { SortIcon, FilterIcon } from "../Icons";
import useIsMobile from "../../utils/useIsMobile";
import { useUIContext } from "../UI";
const ResultsPageContainer = () => {
  const { setFlightOrigin, setFlightDestination } = useFlightContext();
  const [airports, setAirports] = useState({
    from: { city: "City", name: "WHAAT" },
    to: { city: "City", name: "WOOOW" },
  });
  const isMobile = useIsMobile();
  const { isModalOn, openModal, closeModal } = useUIContext();
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    if (!router.isReady) return;

    (async () => {
      try {
        if (query.from && query.to) {
          const fromAirport = await fetchAirport(query.from as string);
          const toAirport = await fetchAirport(query.from as string);

          setFlightOrigin(fromAirport, query.from);

          setFlightDestination(toAirport, query.to);

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
        <FlightsSideBar airports={airports} />
      </div>
      <div className={style.searchResults}>
        <div className={style.filterAndSort}>
          <Button
            className={`${style.button} ${style.sortBtn}`}
            icon={SortIcon}
            handleClick={() => {
              if (isMobile && !isModalOn) openModal("flightsResultsSort");
            }}
          >
            Sort by
          </Button>
          {isMobile && (
            <Button
              className={`${style.filterBtn}`}
              icon={FilterIcon}
              handleClick={() => {
                if (isMobile && !isModalOn) openModal("flightsResultsFilter");
              }}
            >
              Filter
            </Button>
          )}
        </div>
        <FlightOffers airports={airports} searchQuery={query} />
      </div>
    </div>
  );
};

export default ResultsPageContainer;
