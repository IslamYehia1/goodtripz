import FlightTypeOptions from "./FlightTypeOptions";
import TravellersOptions from "./TravellersOptions";

import style from "../SearchForm.module.scss";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import useOutsideClick from "../../../utils/useOutsideClick";
import useIsMobile from "../../../utils/useIsMobile";
import { useUIContext } from "../../UI";
function SearchOptions() {
  const { from, to, date, returnDate, adults, children, type } = useFlightContext();
  const isMobile = useIsMobile();
  const { openModal, isModalOn, activeField, setActiveField } = useUIContext();

  return (
    <>
      <FlightTypeOptions />
      <TravellersOptions />
    </>
  );
}
export default SearchOptions;
