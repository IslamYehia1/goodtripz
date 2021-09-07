import { useRef, useEffect } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import DateIcon from "../../icons/calendar_black.svg";
import { fromPropsType } from "./propTypes";
import InputField from "../InputField/InputField";

const { isDayAfter, isDayBefore, isSameDay } = DateUtils;
const FromDateField = (props: fromPropsType) => {
    const { from, to, lastHoveredDay } = props.state;
    const selectedDays = to
        ? { from: to, to: lastHoveredDay }
        : { from: null, to: null };
    const modifiers = to
        ? { start: to, end: lastHoveredDay }
        : { start: from, end: lastHoveredDay };
    const inputRef = useRef<DayPickerInput>(null);
    useEffect(() => {
        if (to && !from) {
            inputRef!.current!.getInput().focus();
        }
    }, [from, to]);
    function onDayClick(day: Date) {
        if (to && isDayAfter(day, to)) {
            props.setState({
                ...props.state,
                to: undefined,
            });
        }
        if (isSameDay(day, props.today) || isDayAfter(day, props.today)) {
            props.setState({
                ...props.state,
                from: day,
                lastHoveredDay: day,
            });
        }
    }
    function onDayMouseEnter(day: Date) {
        if (to && isDayAfter(day, to)) {
            props.setState({
                ...props.state,
                lastHoveredDay: undefined,
            });
            return;
        }
        if (!isDayBefore(day, props.today)) {
            props.setState({
                ...props.state,
                lastHoveredDay: day,
            });
        }
    }
    return (
        <>
            <InputField
                className="searchTextInput"
                icon={DateIcon}
                label="Date"
                name="fromDateInput"
                placeholder="Choose date"
            >
                <DayPickerInput
                    inputProps={{
                        name: "fromDateInput",
                    }}
                    ref={inputRef}
                    value={from}
                    dayPickerProps={{
                        className: "Range",
                        numberOfMonths: 2,
                        fromMonth: props.today,
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
        </>
    );
};

export default FromDateField;
