import Button from "../../components/Button/Button";
import { FlightIcon, HotelIcon, CarIcon } from "../../components/Icons";
import style from "./SearchResults.module.scss";
type propsType = {
  onTabChange?: (tab: string) => void;
  activeTab: string;
};
const SideBarNav = ({ onTabChange, activeTab }: propsType) => {
  return (
    <div className={style.lilTabs}>
      <Button
        handleClick={(e) => {
          if (onTabChange) onTabChange("flights");
        }}
        id={activeTab === "flights" ? style.activeLilTab : ""}
        className={`${style.lilTab} ${style.button}`}
        icon={FlightIcon}
      >
        Flights
      </Button>
      <Button
        handleClick={(e) => {
          if (onTabChange) onTabChange("hotels");
        }}
        id={activeTab === "hotels" ? style.activeLilTab : ""}
        className={`${style.lilTab} ${style.button}`}
        icon={HotelIcon}
      >
        Hotels
      </Button>
      <Button
        handleClick={(e) => {
          if (onTabChange) onTabChange("cars");
        }}
        id={activeTab === "cars" ? style.activeLilTab : ""}
        className={`${style.lilTab} ${style.button}`}
        icon={CarIcon}
      >
        Cars
      </Button>
    </div>
  );
};
export default SideBarNav;
