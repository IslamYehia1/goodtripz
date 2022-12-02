import DateInput from "../../RangeDatePicker";
import style from "../SearchForm.module.scss";
import {DateIcon} from "../../Icons"; //prettier-ignore
import { useCarsContext } from "../../CommonContexts/CarsContext";

function DropOffPlace() {
  const { pickUpDate, setPickUpDate, setDropOffDate, dropOffDate } = useCarsContext();

  return (
    // <div className={style.searchFragment}>
    //   {" "}
    <DateInput
      overlayClass={`${style.dateOverlay}`}
      singleDateFieldClass={style.singleDateField}
      fromLabel="Pick-up date"
      toLabel="Drop-off date"
      range={true}
      icon={DateIcon}
      textFieldClass={style.textField}
      className={`${style.searchFragment} ${style.dateSearchField}`}
      wrapperClass={style.textFieldWrapper}
      fromDate={pickUpDate}
      toDate={dropOffDate}
      setFromDate={(date: Date) => {
        setPickUpDate(date.toISOString().substring(0, 10));
      }}
      setToDate={(date: Date) => {
        setDropOffDate(date.toISOString().substring(0, 10));
      }}
    />
    // </div>
  );
}
export default DropOffPlace;
