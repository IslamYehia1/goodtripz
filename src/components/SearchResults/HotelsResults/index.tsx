import style from "styles/SearchResults.module.scss";
import SideBarNav from "../SideBarNav";
import { useRouter } from "next/router";
import HotelsSideBar from "./HotelsSearchFields";
import HotelOffers from "./Offers";
import { SortIcon, FilterIcon } from "src/components/Icons";
import Button from "../../Button/Button";
import useIsMobile from "src/utils/useIsMobile";
const HotelsResultsOverlay = () => {
  const router = useRouter();
  const isMobile = useIsMobile();

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
              // if (isMobile && !isModalOn) openModal("hotelResultsSort");
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
        <HotelOffers />
      </div>
    </div>
  );
};
export default HotelsResultsOverlay;
