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
  const fieldRef: any = useOutsideClick(activeField == "date", () => {
    setActiveField("");
  });

  const isMobile = useIsMobile();
  useEffect(() => {
    console.log("LOOK", activeField);
  }, [activeField]);
  return (
    <div className={style.searchFragment} ref={fieldRef}>
      {" "}
      <DateInput
        activeField={activeField === "date"}
        overlayClass={`${style.dateOverlay} ${
          activeField == "date" && isModalOn ? style.inModal : ""
        }`}
        fromLabel="Pick-up date"
        toLabel="Drop-off date"
        range={true}
        icon={DateIcon}
        textFieldClass={style.textField}
        className={`${style.aSearchField} ${style.flightSearchField} ${style.dateSearchField} ${
          activeField == "date" && isModalOn ? style.inModal : ""
        }`}
        wrapperClass={style.textFieldWrapper}
        fromDate={pickUpDate}
        toDate={dropOffDate}
        onActivate={() => {
          if (setActiveField) {
            setActiveField("date");
          }
          if (isMobile) openModal("flightDates");
        }}
        onDeActivate={() => {
          if (setActiveField) setActiveField("");
          if (isModalOn) closeModal();
        }}
        setFromDate={(date: Date) => {
          setPickUpDate(date.toISOString().substring(0, 10));
        }}
        setToDate={(date: Date) => {
          setDropOffDate(date.toISOString().substring(0, 10));
        }}
      />
    </div>
  );
}
export default DropOffPlace;
