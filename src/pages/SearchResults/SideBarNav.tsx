import Button from "../../components/Button/Button";
import { FlightIcon, HotelIcon, CarIcon } from "../../components/Icons";

type propsType = {
    onTabChange: (tab: string) => void;
    activeTab: string;
};
const SideBarNav = ({ onTabChange, activeTab }: propsType) => {
    return (
        <div className="lilTabs">
            <Button
                handleClick={(e) => {
                    onTabChange("flights");
                }}
                id={activeTab === "flights" ? "activeLilTab" : ""}
                className="lilTab button"
                icon={FlightIcon}
            >
                Flights
            </Button>
            <Button
                handleClick={(e) => {
                    onTabChange("hotels");
                }}
                id={activeTab === "hotels" ? "activeLilTab" : ""}
                className="lilTab button"
                icon={HotelIcon}
            >
                Hotels
            </Button>
            <Button
                handleClick={(e) => {
                    onTabChange("cars");
                }}
                id={activeTab === "car" ? "activeLilTab" : ""}
                className="lilTab button"
                icon={CarIcon}
            >
                Cars
            </Button>
        </div>
    );
};
export default SideBarNav;
