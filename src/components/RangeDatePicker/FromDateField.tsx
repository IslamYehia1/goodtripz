import { isAfter, isBefore, isSameDay } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { DATE_FIELD_PROPS } from "./propTypes";
import style from "./RangeDatePicker.module.scss";
import style2 from "../Suggestions/Suggestions.module.scss";
const FromDateField = (props: DATE_FIELD_PROPS) => {
  const { from, to, lastHoveredDay } = props.state;
  // let selectedDays: { from: Date | undefined; to: Date | undefined } = {
  //   from: undefined,
  //   to: undefined,
  // };
  // let modifiers = to ? { start: to, end: lastHoveredDay } : { start: from, end: lastHoveredDay };
  let modifiers = to ? { start: to, end: lastHoveredDay } : { start: from, end: lastHoveredDay };

  let selectedDays: { from: Date | undefined; to: Date | undefined } = to
    ? { from: to, to: lastHoveredDay }
    : { from: from, to: lastHoveredDay };
  if (from && to) {
    selectedDays = {
      from: from,
      to: to,
    };
    modifiers = { start: from, end: to };
  } else if (to && !from) {
    selectedDays = { from: to, to: lastHoveredDay };
    modifiers = { start: to, end: lastHoveredDay };
  }

  function onDayClick(day: Date) {
    if (to && isAfter(day, to)) {
      props.setState({ type: "to", to: undefined });
    }
    if (isSameDay(day, props.today) || isAfter(day, props.today)) {
      console.log(day);

      props.setState({ type: "from", from: day });
      props.setState({ type: "lastHoveredDay", lastHoveredDay: day });
    }
  }
  function onDayMouseEnter(day: Date) {
    if (to && isAfter(day, to)) {
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
            mode="single"
            className={`Range ${style2.suggestions} ${style2.datePickerOverlay}`}
            numberOfMonths={2}
            fromMonth={props.today}
            month={from || props.today}
            selected={selectedDays}
            disabled={{ before: new Date() }}
            // modifiers={modifiers}
            onDayClick={onDayClick}
            onDayMouseEnter={onDayMouseEnter}
          />
        </div>
      )}
      <div className={`${props.wrapperClass}`}>
        {props.icon && <props.icon />}
        <div className={props.singleDateClass}>
          <label htmlFor="fromDateInput">{props.label}</label>
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
  );
};

export default FromDateField;