import React, { useEffect, useState } from "react";
// import style from "./RangeDatePicker.module.scss";
import { addDays, format, isBefore } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import { useUIContext } from "../UI";
const pastMonth = new Date(2020, 10, 15);
import "react-day-picker/dist/style.css";
import style from "./RangeDatePicker.module.scss";
import style2 from "../Suggestions/Suggestions.module.scss";
import Button from "../Button/Button";
import { motion, AnimatePresence } from "framer-motion";
import useOutsideClick from "../../utils/useOutsideClick";
import useIsMobile from "../../utils/useIsMobile";
export default function App(props: any) {
  const defaultSelected: DateRange = {
    // from: pastMonth,
    from: addDays(new Date(), 15),
    // to: addDays(pastMonth, 4),
    to: addDays(new Date(), 16),
  };
  const { isModalOn, openModal, closeModal } = useUIContext();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const isMobile = useIsMobile();
  function activateDateField() {
    props.onActivate();
  }
  return (
    // <div
    //   className={`${props.className} RangePicker`}
    //   // onBlur={(e) => {
    //   //   if (
    //   //     !isModalOn &&
    //   //     (!e.relatedTarget || !(e.relatedTarget as HTMLElement)!.closest(".RangePicker"))
    //   //   ) {
    //   //     props.onDeActivate();
    //   //   }
    //   // }}
    //   onFocus={() => {
    //     props.onActivate("date");
    //   }}
    //   onClick={props.onClick}
    //   tabIndex={0}
    // >
    <>
      {props.activeField && (
        // {true && (
        <AnimatePresence>
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className={`${props.overlayClass}`}>
            <div className={`${style.dayPickerWrapper} ${style2.suggestions}`}>
              <DayPicker
                className={`Range ${style2.datePickerOverlay}`}
                mode={props.range ? ("range" as any) : ("single" as any)}
                defaultMonth={new Date()}
                numberOfMonths={isMobile ? 7 : 2}
                selected={range}
                //   footer={footer}
                onSelect={setRange}
                disabled={{ before: new Date() }}
                fromMonth={new Date()}
              />
              <div className={style.buttonWrapper}>
                <Button
                  handleClick={() => {
                    props.onDeActivate();
                  }}
                  className={style.doneBtn}
                >
                  Done
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      <div className={props.className} onFocus={activateDateField} onClick={activateDateField}>
        <div className={style.dateFieldsWrapper}>
          <div className={`${props.wrapperClass}`}>
            {props.icon && <props.icon />}
            <div className={props.singleDateClass}>
              <label htmlFor={"toDateInput"}>{props.label}</label>
              <input
                readOnly
                tabIndex={-1}
                value={range!.from ? format(range!.from, "P") : undefined}
                placeholder="Pick a date"
              />
            </div>
          </div>
          {props.range && (
            <div className={`${props.wrapperClass}`}>
              {props.icon && <props.icon />}
              <div className={props.singleDateClass}>
                <label htmlFor={"toDateInput"}>{props.label}</label>
                <input
                  readOnly
                  tabIndex={-1}
                  value={range!.to ? format(range!.to, "P") : undefined}
                  placeholder="Pick a date"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
    // </div>
  );
}
