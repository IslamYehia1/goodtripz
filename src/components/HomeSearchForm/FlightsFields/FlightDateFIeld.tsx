import DateInput from "../../RangeDatePicker";
import style from "../SearchForm.module.scss";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import {DateIcon} from "../../Icons"; //prettier-ignore
import useIsMobile from "../../../utils/useIsMobile";

const FlightDateField = () => {
  const isMobile = useIsMobile();
  const { type, date, returnDate, setFlightDate, setReturnDate } = useFlightContext();

  return (
    <DateInput
      overlayClass={`${style.dateOverlay}`}
      fromLabel="Date"
      toLabel="Return date"
      range={type === "roundTrip"}
      icon={DateIcon}
      singleDateFieldClass={style.singleDateField}
      textFieldClass={style.textField}
      className={`${style.searchFragment} ${style.flightSearchField} ${style.dateSearchField}`}
      wrapperClass={style.textFieldWrapper}
      fromDate={date}
      toDate={returnDate}
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
