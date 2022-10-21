import { useUIContext } from "../../UI";
import DateInput from "../../RangeDatePicker";
import style from "../SearchForm.module.scss";
import {DateIcon} from "../../Icons"; //prettier-ignore
import useIsMobile from "../../../utils/useIsMobile";
import { useCarsContext } from "../../CommonContexts/CarsContext";
import { useEffect } from "react";
import useOutsideClick from "../../../utils/useOutsideClick";
function DropOffPlace() {
  const { isModalOn, openModal, closeModal } = useUIContext();
  const { activeField, setActiveField, pickUpDate, setPickUpDate, setDropOffDate, dropOffDate } =
    useCarsContext();
  // const fieldRef: any = useOutsideClick(activeField == "carsDates", () => {
  //   setActiveField("");
  // });

  const isMobile = useIsMobile();
  useEffect(() => {}, [activeField]);
  return (
    // <div className={style.searchFragment}>
    //   {" "}
    <DateInput
      isActive={activeField === "carsDates"}
      overlayClass={`${style.dateOverlay} ${
        activeField == "carsDates" && isModalOn ? style.inModal : ""
      }`}
      singleDateFieldClass={style.singleDateField}
      fromLabel="Pick-up date"
      toLabel="Drop-off date"
      range={true}
      icon={DateIcon}
      textFieldClass={style.textField}
      // ${style.aSearchField}
      className={`${style.searchFragment} ${style.dateSearchField} ${
        activeField == "carsDates" && isModalOn ? style.inModal : ""
      }`}
      wrapperClass={style.textFieldWrapper}
      fromDate={pickUpDate}
      toDate={dropOffDate}
      onActivate={() => {
        if (setActiveField) setActiveField("carsDates");
      }}
      onDeactivate={() => {
        if (setActiveField) setActiveField("");
      }}
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
