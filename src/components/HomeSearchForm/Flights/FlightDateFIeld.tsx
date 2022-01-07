import DateInput from "../../RangeDatePicker";
import style from "../SearchForm.module.scss";
import { useFlightContext } from "../FlightsContext";
import {DateIcon} from "../../Icons"; //prettier-ignore
import useIsMobile from "../../../utils/useIsMobile";
import { useUIContext } from "../../UI";
const FlightDateField = () => {
  const { isModalOn, openModal, closeModal } = useUIContext();
  const isMobile = useIsMobile();
  const { type, date, returnDate, activeField, setActiveField, setFlightDate, setReturnDate } =
    useFlightContext();
  return (
    <DateInput
      activeField={activeField}
      fromLabel="Date"
      toLabel="Return date"
      range={type === "roundTrip"}
      icon={DateIcon}
      textFieldClass={style.textField}
      className={`${style.aSearchField} ${style.flightSearchField} ${style.dateSearchField}`}
      wrapperClass={style.textFieldWrapper}
      fromDate={date}
      toDate={returnDate}
      onActivate={(field) => {
        if (isMobile) openModal("flightDates");
        setActiveField(field);
      }}
      onDeActivate={() => {
        setActiveField("");
        if (isModalOn) closeModal();
      }}
      setFromDate={(date) => {
        setFlightDate(date.toISOString().substring(0, 10));
      }}
      setToDate={(date) => {
        setReturnDate(date.toISOString().substring(0, 10));
      }}
    />
  );
};
export default FlightDateField;
