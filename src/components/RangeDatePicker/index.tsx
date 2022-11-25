import React, { useEffect, useState } from "react";
import { addDays, format, isBefore } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import style from "./RangeDatePicker.module.scss";
import style2 from "../Suggestions/Suggestions.module.scss";
import style3 from "../SearchField/SearchField.module.scss";
import Button from "../Button/Button";
import { motion, AnimatePresence } from "framer-motion";
import useOutsideClick from "../../utils/useOutsideClick";
import useIsMobile from "../../utils/useIsMobile";
import { SearchModal } from "../Modal";

export default function App(props: any) {
  const defaultSelected: DateRange = {
    from: addDays(new Date(), 15),
    to: addDays(new Date(), 16),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const isMobile = useIsMobile();
  const [isActive, setIsActive] = useState(false);
  const fieldRef: any = useOutsideClick(isActive, () => {
    setIsActive(false);
  });

  function activateDateField() {
    setIsActive(true);
  }
  return (
    <SearchModal
      isOpen={isActive && isMobile}
      onClose={() => setIsActive(false)}
      className={style3.modal}
    >
      <div className={`${props.className} ${style3.container}`} ref={fieldRef}>
        {isActive && (
          // {true && (
          <AnimatePresence>
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className={`${props.overlayClass} ${style3.dateOverlay}`}
            >
              <div className={`${style.dayPickerWrapper} ${style2.suggestions}`}>
                <DayPicker
                  className={`Range`}
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
                      setIsActive(false);
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
        <div
          onClick={activateDateField}
          onFocus={activateDateField}
          className={`${style.dateFieldsWrapper} ${props.wrapperClass} ${style3.textFieldWrapper}`}
        >
          <div className={`${props.singleDateFieldClass} ${style3.input}`}>
            {props.icon && <props.icon />}
            <div className={props.textFieldClass}>
              <label htmlFor={"fromDateInput"}>{props.fromLabel}</label>
              <input
                name={"fromDateInput"}
                readOnly
                tabIndex={-1}
                value={range && range.from ? format(range!.from, "P") : undefined}
                placeholder="Pick a date"
              />
            </div>
          </div>
          {props.range && (
            <div className={`${props.singleDateFieldClass} ${style3.input}`}>
              {props.icon && <props.icon />}
              <div className={props.textFieldClass}>
                <label htmlFor={"toDateInput"}>{props.toLabel}</label>
                <input
                  readOnly
                  name={"toDateInput"}
                  tabIndex={-1}
                  value={range && range.to ? format(range!.to, "P") : undefined}
                  placeholder="Pick a date"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </SearchModal>
  );
}
