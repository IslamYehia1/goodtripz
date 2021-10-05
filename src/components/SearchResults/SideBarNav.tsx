import Button from "../../components/Button/Button";
import { FlightIcon, HotelIcon, CarIcon } from "../../components/Icons";
import style from "../../../styles/SearchResults.module.scss";
type propsType = {
    onTabChange?: (tab: string) => void;
    activeTab: string;
};
const SideBarNav = ({ onTabChange, activeTab }: propsType) => {
    return (
        <div className={style.lilTabs}>
            <Button
                handleClick={(e) => {
                    // onTabChange("flights");
                }}
                id={activeTab === "flights" ? "activeLilTab" : ""}
                className={`${style.lilTab} ${style.button}`}
                icon={FlightIcon}
            >
                Flights
            </Button>
            <Button
                handleClick={(e) => {
                    // onTabChange("hotels");
                }}
                id={activeTab === "hotels" ? "activeLilTab" : ""}
                className={`${style.lilTab} ${style.button}`}
                icon={HotelIcon}
            >
                Hotels
            </Button>
            <Button
                handleClick={(e) => {
                    // onTabChange("cars");
                }}
                id={activeTab === "car" ? "activeLilTab" : ""}
                className={`${style.lilTab} ${style.button}`}
                icon={CarIcon}
            >
                Cars
            </Button>
        </div>
    );
};
export default SideBarNav;
