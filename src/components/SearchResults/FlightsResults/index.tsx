import SideBarNav from "../SideBarNav";
import FlightsSideBar from "./FlightsSearchFields";
import FlightOffers from "./Offers";
import style from "../SearchResults.module.scss";
import { useRouter } from "next/router";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import Button from "../../Button/Button";
import { SortIcon, FilterIcon } from "../../Icons";
import useIsMobile from "../../../utils/useIsMobile";
import { useState } from "react";
import { useGetExistingFlight } from "src/utils/useGetExistingSearch";
const ResultsPageContainer = () => {
  const { from, to } = useFlightContext();
  useGetExistingFlight();
  const [airports, setAirports] = useState({
    from: { city: "City", name: "WHAAT" },
    to: { city: "City", name: "WOOOW" },
  });
  const isMobile = useIsMobile();
  const router = useRouter();
  const query = router.query;
  // useEffect(() => {
  //   if (!router.isReady) return;

  //   (async () => {
  //     try {
  //       if (query.from && query.to) {
  //         const fromAirport = await fetchAirport(query.from as string);
  //         const toAirport = await fetchAirport(query.from as string);

  //         // setFlightOrigin(fromAirport, query.from);

  //         // setFlightDestination(toAirport, query.to);

  //         if (toAirport && fromAirport) {
  //           setAirports({
  //             from: { city: fromAirport.City, name: fromAirport.Name },
  //             to: { city: toAirport.City, name: toAirport.Name },
  //           });
  //         }
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, [router.isReady]);
  return (
    <div className={style.searchResultsPage}>
      <div className={style.sideBar}>
        <SideBarNav
          activeTab={"flights"}
          onTabChange={(tab) => {
            router.replace(tab);
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
              // if (isMobile && !isModalOn) openModal("flightsResultsSort");
            }}
          >
            Sort by
          </Button>
          {isMobile && (
            <Button
              className={`${style.button} ${style.filterBtn}`}
              icon={FilterIcon}
              handleClick={() => {
                // if (isMobile) setActiveField("sidebarSections");
              }}
            >
              Filter
            </Button>
          )}
        </div>
        {airports && from.name && to.name ? (
          <FlightOffers airports={airports} searchQuery={query} />
        ) : (
          <div>No results</div>
        )}
      </div>
    </div>
  );
};

export default ResultsPageContainer;
