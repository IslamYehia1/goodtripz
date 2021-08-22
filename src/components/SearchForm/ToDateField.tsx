import { DateUtils, Modifier } from "react-day-picker";
import DateIcon from "../../icons/calendar_black.svg";
import { DayModifiers } from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { useRef } from "react";
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
const ToDateField = (props: propsType) => {
    const inputRef = useRef<DayPickerInput>(null);
    const disabledDays = [
        { before: new Date() },
        { before: props.from },
    ] as Modifier[];
    const selectedDays = props.from
        ? [props.from, { from: props.from, to: props.lastHoveredDay }]
        : [{ from: undefined, to: undefined }];
    const modifiers = { start: props.from, end: props.lastHoveredDay };
    function onDayClick(day: Date) {
        if (props.from && DateUtils.isDayBefore(day, props.from)) return;
        props.setState({
            to: day,
            lastHoveredDay: day,
        });
        if (!props.from) inputRef!.current!.getInput().focus();
    }
    function onDayMouseEnter(day: Date) {
        if (props.from && DateUtils.isDayBefore(day, props.from)) {
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
        <div className="searchFieldWrapper">
            <img src={DateIcon} alt="Date Icon" />
            <div className="searchField">
                <label htmlFor={"toDateInput"}>{"Departure"}</label>
                <DayPickerInput
                    inputProps={{
                        name: "toDateInput",
                    }}
                    ref={inputRef}
                    value={props.to}
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
