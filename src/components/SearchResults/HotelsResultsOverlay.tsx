import style from "../../../styles/SearchResults.module.scss";
import SideBarNav from "./SideBarNav";
import { useRouter } from "next/router";
import HotelsSideBar from "./HotelsSideBar";
import HotelOffers from "./HotelOffers";
import { SortIcon, FilterIcon } from "../Icons";
import Button from "../Button/Button";
import useIsMobile from "../../utils/useIsMobile";
import { useUIContext } from "../UI";
const HotelsResultsOverlay = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { isModalOn, openModal } = useUIContext();

  return (
    <div className={style.searchResultsPage}>
      <div className={style.sideBar}>
        <SideBarNav
          activeTab={"hotels"}
          onTabChange={(tab) => {
            router.replace(tab);
          }}
        />
        <HotelsSideBar />
      </div>
      <div className={style.searchResults}>
        <div className={style.filterAndSort}>
          <Button
            className={`${style.button} ${style.sortBtn}`}
            icon={SortIcon}
            handleClick={() => {
              if (isMobile && !isModalOn) openModal("hotelResultsSort");
            }}
          >
            Sort by
          </Button>
          {isMobile && (
            <Button
              className={`${style.button} ${style.filterBtn}`}
              icon={FilterIcon}
              handleClick={() => {
                if (isMobile && !isModalOn) openModal("hotelsResultsFilter");
              }}
            >
              Filter
            </Button>
          )}
        </div>
        <HotelOffers />
      </div>
    </div>
  );
};
export default HotelsResultsOverlay;
