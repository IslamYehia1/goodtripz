import { DateUtils, Modifier } from "react-day-picker";
import DateIcon from "../../icons/calendar_black.svg";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { useRef, useEffect } from "react";
import { toPropsType } from "./propTypes";

const { isDayBefore } = DateUtils;

const ToDateField = (props: toPropsType) => {
    const { from, to, lastHoveredDay } = props.state;
    useEffect(() => {
        if (from && !to) {
            inputRef!.current!.getInput().focus();
        }
    }, [from, to]);

    const inputRef = useRef<DayPickerInput>(null);
    const disabledDays = [
        { before: new Date() },
        { before: from },
    ] as Modifier[];

    const selectedDays = from
        ? [from, { from: from, to: lastHoveredDay }]
        : [{ from: undefined, to: undefined }];
    const modifiers = { start: from, end: lastHoveredDay };
    function onDayClick(day: Date) {
        if (from && isDayBefore(day, from)) return;
        props.setState({
            ...props.state,
            to: day,
            lastHoveredDay: day,
        });
    }
    function onDayMouseEnter(day: Date) {
        if (from && isDayBefore(day, from)) {
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
        <div className="searchFieldWrapper">
            <img src={DateIcon} alt="Date Icon" />
            <div className="searchField">
                <label htmlFor={"toDateInput"}>{"Departure"}</label>
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
                        selectedDays: selectedDays,
                        disabledDays: disabledDays,
                        modifiers: modifiers,
                        onDayClick: onDayClick,
                        onDayMouseEnter: onDayMouseEnter,
                    }}
                    // Pass a call back to onToDayChange prop to handle state in the parent component
                    onDayChange={props.onDayChange}
                />
            </div>
        </div>
    );
};

export default ToDateField;
