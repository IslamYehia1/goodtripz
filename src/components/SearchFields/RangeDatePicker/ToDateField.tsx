import { DateUtils, Modifier } from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { useRef, useEffect } from "react";
import { toPropsType } from "./propTypes";
import InputField from "../../InputField/InputField";
import style from "./RangeDatePicker.module.scss";
const { isDayBefore } = DateUtils;

const ToDateField = (props: toPropsType) => {
  const { from, to, lastHoveredDay } = props.state;
  useEffect(() => {
    if (from && !to) {
      inputRef!.current!.getInput().focus();
    }
  }, [from, to]);

  const inputRef = useRef<DayPickerInput>(null);
  const disabledDays = [{ before: new Date() }, { before: from }] as Modifier[];
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
    if (from && isDayBefore(day, from)) return;
    props.setState({ type: "to", to: day });
    props.setState({ type: "lastHoveredDay", to: day });
  }
  function onDayMouseEnter(day: Date) {
    if (from && isDayBefore(day, from)) {
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
    <InputField
      className={props.singleDateClass}
      wrapperClass={props.wrapperClass}
      icon={props.icon}
      label={props.label}
      name="toDateInput"
      placeholder="Choose date"
    >
      {" "}
      <DayPickerInput
        inputProps={{
          name: "toDateInput",
        }}
        ref={inputRef}
        value={to}
        dayPickerProps={{
          className: "Range",
          numberOfMonths: 2,
          fromMonth: props.today,
          month: from || props.today,
          selectedDays: selectedDays,
          disabledDays: disabledDays,
          modifiers: modifiers,
          onDayClick: onDayClick,
          onDayMouseEnter: onDayMouseEnter,
        }}
        // Pass a call back to onToDayChange prop to handle state in the parent component
        onDayChange={props.onDayChange}
      />
    </InputField>
  );
};

export default ToDateField;
