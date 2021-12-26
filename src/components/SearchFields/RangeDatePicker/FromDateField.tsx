import { useRef, useEffect, RefObject, forwardRef } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { fromPropsType } from "./propTypes";
import InputField from "../../InputField/InputField";

import style from "./RangeDatePicker.module.scss";
const { isDayAfter, isDayBefore, isSameDay } = DateUtils;
const FromDateField = (props: fromPropsType) => {
  const { from, to, lastHoveredDay } = props.state;
  const inputRef = useRef<DayPickerInput>(null);

  useEffect(() => {
    if (props.isFocused) {
      inputRef!.current!.getInput().focus();
      if (props.isMobile) inputRef!.current!.showDayPicker();
    }
    if (!props.isFocused) {
      inputRef!.current!.getInput().blur();
    }
  }, [props.isMobile]);
  let selectedDays: { from: Date | undefined; to: Date | undefined } = {
    from: undefined,
    to: undefined,
  };
  let modifiers = to ? { start: to, end: lastHoveredDay } : { start: from, end: lastHoveredDay };
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
    if (to && isDayAfter(day, to)) {
      props.setState({ type: "to", to: undefined });
    }
    if (isSameDay(day, props.today) || isDayAfter(day, props.today)) {
      props.setState({ type: "from", from: day });
      props.setState({ type: "lastHoveredDay", lastHoveredDay: day });
    }
  }
  function onDayMouseEnter(day: Date) {
    if (to && isDayAfter(day, to)) {
      props.setState({
        type: "lastHoveredDay",
        lastHoveredDay: undefined,
      });
      return;
    }
    if (!isDayBefore(day, props.today)) {
      props.setState({
        type: "lastHoveredDay",
        lastHoveredDay: day,
      });
    }
  }

  return (
    // <div className={props.sing leDateClass}>
    <InputField
      className={props.singleDateClass}
      wrapperClass={props.wrapperClass}
      icon={props.icon}
      label={props.label}
      name="fromDateInput"
      placeholder="Choose date"
    >
      <DayPickerInput
        inputProps={{
          name: "fromDateInput",
          readonly: "readonly",
          onFocus: () => {
            props.handleFocus();
          },
        }}
        ref={inputRef}
        value={from}
        dayPickerProps={{
          className: "Range",
          numberOfMonths: 2,
          fromMonth: props.today,
          month: from || props.today,
          selectedDays: selectedDays,
          disabledDays: { before: new Date() },
          modifiers: modifiers,
          onDayClick: onDayClick,
          onDayMouseEnter: onDayMouseEnter,
        }}
        // Pass a call back to onFromDayChange prop to handle state in the parent component
        onDayChange={props.onDayChange}
      />
    </InputField>
    // </div>
  );
};

export default FromDateField;
