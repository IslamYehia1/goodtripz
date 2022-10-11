import FlightTypeOptions from "./FlightTypeOptions";
import TravellersOptions from "./TravellersOptions";
import Button from "../../Button/Button";
import {ExpandIcon} from "../../Icons"; //prettier-ignore
import style from "../SearchForm.module.scss";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import useOutsideClick from "../../../utils/useOutsideClick";

function SearchOptions() {
  const { activeField, setActiveField, from, to, date, returnDate, adults, children, type } =
    useFlightContext();
  const flightOptionsRef = useOutsideClick(activeField === "flightTypeOptions", () => {
    setActiveField("");
  });
  const travellersOptionsRef = useOutsideClick(activeField === "travellersOptions", () => {
    setActiveField("");
  });
  return (
    <>
      <div ref={flightOptionsRef as any} tabIndex={0} className={style.filterButtonWrapper}>
        <Button
          icon={ExpandIcon}
          className={style.button}
          handleClick={() => setActiveField("flightTypeOptions")}
          type="button"
        >
          {type === "oneWay" ? "One way" : "Round trip"}
        </Button>
        {activeField === "flightTypeOptions" && <FlightTypeOptions />}
      </div>

      <div ref={travellersOptionsRef as any} className={style.filterButtonWrapper}>
        <Button
          icon={ExpandIcon}
          className={style.button}
          handleClick={() => setActiveField("travellersOptions")}
          type="button"
        >
          {`${parseInt(adults) + parseInt(children)} Travellers`}
        </Button>
        {activeField === "travellersOptions" && <TravellersOptions />}
      </div>
    </>
  );
}
export default SearchOptions;
