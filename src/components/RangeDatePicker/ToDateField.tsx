// import { DateUtils, Modifier } from "react-day-picker";
// import DayPickerInput from "react-day-picker/DayPickerInput";
import { DayPicker } from "react-day-picker";
import { useRef, useEffect, forwardRef } from "react";
import { DATE_FIELD_PROPS } from "./propTypes";
import InputField from "../InputField/InputField";
import { useUIContext } from "../UI";
import useIsMobile from "../../utils/useIsMobile";
import style from "./RangeDatePicker.module.scss";
import style2 from "../Suggestions/Suggestions.module.scss";
import { isAfter, isBefore, isSameDay } from "date-fns";

// const { isDayBefore } = DateUtils;

const ToDateField = (props: DATE_FIELD_PROPS) => {
  // const { isModalOn, openModal, closeModal } = useUIContext();
  const { from, to, lastHoveredDay } = props.state;
  const isMobile = useIsMobile();

  // const inputRef = useRef<DayPickerInput>(null);
  const inputRef = useRef<any>(null);
  // const disabledDays = [{ before: new Date() }, { before: from }] as Modifier[];
  const disabledDays = [{ before: new Date() }, { before: from }] as any;
  let modifiers = { start: from, end: lastHoveredDay };
  let selectedDays: any = [from, { from: undefined, to: undefined }];
  if (from && to) {
    selectedDays = [
      from,
      {
        from: from,
        to: to,
      },
    ];
    modifiers = {
      start: from,
      end: to,
    };
  } else if (from && !to) {
    selectedDays = [from, { from: from, to: lastHoveredDay }];
  }

  function onDayClick(day: Date) {
    if (from && isBefore(day, from)) return;
    props.setState({ type: "to", to: day });
    props.setState({ type: "lastHoveredDay", to: day });
  }
  function onDayMouseEnter(day: Date) {
    if (from && isBefore(day, from)) {
      props.setState({
        type: "lastHoveredDay",
        lastHoveredDay: undefined,
      });

      return;
    }
    if (!isBefore(day, props.today)) {
      props.setState({
        type: "lastHoveredDay",
        lastHoveredDay: day,
      });
    }
  }

  return (
    <>
      {props.isFocused && (
        <div className={style.overlay}>
          <DayPicker
            className={`Range ${style2.suggestions} ${style2.datePickerOverlay}`}
            numberOfMonths={2}
            fromMonth={props.today}
            month={from || props.today}
            selected={selectedDays}
            disabled={disabledDays}
            // modifiers={modifiers}
            onDayClick={onDayClick}
            onDayMouseEnter={onDayMouseEnter}
          />
        </div>
      )}
      <div className={`${props.wrapperClass}`}>
        {props.icon && <props.icon />}
        <div className={props.singleDateClass}>
          <label htmlFor={"toDateInput"}>{props.label}</label>
          <input
            onFocus={() => {
              props.onFocus();
            }}
            readOnly
            tabIndex={-1}
            value={props.value}
            placeholder="Pick a date"
          />
        </div>
      </div>
    </>
    // </InputField>
  );
};

export default ToDateField;
