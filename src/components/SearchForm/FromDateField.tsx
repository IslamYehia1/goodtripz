import "react-day-picker/lib/style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import DateIcon from "../../icons/calendar_black.svg";
import { useRef } from "react";
import { DayModifiers } from "react-day-picker";
import { DateUtils } from "react-day-picker";

type propsType = {
    from: Date | undefined;
    to: Date | undefined;
    lastHoveredDay: Date | undefined;
    today: Date;
    setState: React.Dispatch<
        React.SetStateAction<{ [key: string]: Date | undefined }>
    >;
    onDayChange: (
        day: Date,
        DayModifiers: DayModifiers,
        dayPickerInput: DayPickerInput
    ) => void;
};
const FromDateField = (props: propsType) => {
    const inputRef = useRef<DayPickerInput>(null);
    const selectedDays = props.to
        ? { from: props.to, to: props.lastHoveredDay }
        : { from: null, to: null };
    const modifiers = props.to
        ? { start: props.to, end: props.lastHoveredDay }
        : { start: props.from, end: props.lastHoveredDay };

    function onDayClick(day: Date) {
        if (props.to && DateUtils.isDayAfter(day, props.to)) {
            props.setState({
                to: undefined,
            });
            inputRef?.current?.getInput().focus();
        }
        if (
            DateUtils.isSameDay(day, props.today) ||
            DateUtils.isDayAfter(day, props.today)
        ) {
            props.setState({
                from: day,
                lastHoveredDay: day,
            });
            if (!props.to) {
                inputRef?.current?.getInput().focus();
            }
        }
    }
    function onDayMouseEnter(day: Date) {
        if (props.to && DateUtils.isDayAfter(day, props.to)) {
            props.setState({
                lastHoveredDay: undefined,
            });
            return;
        }
        if (!DateUtils.isDayBefore(day, props.today)) {
            props.setState({
                lastHoveredDay: day,
            });
        }
    }
    return (
        <>
            <div className="searchFieldWrapper">
                <img src={DateIcon} alt="Date Icon" />
                <div className="searchField">
                    <label htmlFor={"fromDateInput"}>{"Departure"}</label>
                    <DayPickerInput
                        inputProps={{
                            name: "fromDateInput",
                        }}
                        ref={inputRef}
                        value={props.from}
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
                </div>
            </div>
        </>
    );
};

export default FromDateField;
