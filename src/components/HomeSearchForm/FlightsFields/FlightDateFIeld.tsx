import DateInput from "../../RangeDatePicker";
import style from "../SearchForm.module.scss";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import {DateIcon} from "../../Icons"; //prettier-ignore
import useIsMobile from "../../../utils/useIsMobile";
import { useUIContext } from "../../UI";
import useOutsideClick from "../../../utils/useOutsideClick";
const FlightDateField = () => {
  const { isModalOn, openModal, closeModal } = useUIContext();
  const isMobile = useIsMobile();
  const { type, date, returnDate, activeField, setActiveField, setFlightDate, setReturnDate } =
    useFlightContext();
  // const fieldRef: any = useOutsideClick(activeField == "flightDates", () => {
  //   setActiveField("");
  // });

  return (
    <DateInput
      isActive={activeField === "flightDates"}
      overlayClass={`${style.dateOverlay} ${
        activeField == "flightDates" && isModalOn ? style.inModal : ""
      }`}
      fromLabel="Date"
      toLabel="Return date"
      range={type === "roundTrip"}
      icon={DateIcon}
      singleDateFieldClass={style.singleDateField}
      textFieldClass={style.textField}
      // ${style.aSearchField}
      className={`${style.searchFragment} ${style.flightSearchField} ${style.dateSearchField} ${
        activeField == "flightDates" && isModalOn ? style.inModal : ""
      }`}
      wrapperClass={style.textFieldWrapper}
      fromDate={date}
      toDate={returnDate}
      onActivate={() => {
        setActiveField("flightDates");
        // if (isMobile) openModal("flightDates");
      }}
      onDeactivate={() => {
        setActiveField("");
        // if (isModalOn) closeModal();
      }}
      setFromDate={(date: Date) => {
        setFlightDate(date.toISOString().substring(0, 10));
      }}
      setToDate={(date: Date) => {
        setReturnDate(date.toISOString().substring(0, 10));
      }}
    />
  );
};
export default FlightDateField;
