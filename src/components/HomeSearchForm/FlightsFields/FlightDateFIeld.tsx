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
  const fieldRef: any = useOutsideClick(activeField == "date", () => {
    setActiveField("");
  });

  return (
    <div className={style.searchFragment} ref={fieldRef}>
      <DateInput
        activeField={activeField === "date"}
        overlayClass={`${style.dateOverlay} ${
          activeField == "date" && isModalOn ? style.inModal : ""
        }`}
        fromLabel="Date"
        toLabel="Return date"
        range={type === "roundTrip"}
        icon={DateIcon}
        textFieldClass={style.textField}
        className={`${style.aSearchField} ${style.flightSearchField} ${style.dateSearchField} ${
          activeField == "date" && isModalOn ? style.inModal : ""
        }`}
        wrapperClass={style.textFieldWrapper}
        fromDate={date}
        toDate={returnDate}
        onActivate={() => {
          setActiveField("date");
          if (isMobile) openModal("flightDates");
        }}
        onDeActivate={() => {
          setActiveField("");
          if (isModalOn) closeModal();
        }}
        setFromDate={(date: Date) => {
          setFlightDate(date.toISOString().substring(0, 10));
        }}
        setToDate={(date: Date) => {
          setReturnDate(date.toISOString().substring(0, 10));
        }}
      />
    </div>
  );
};
export default FlightDateField;
