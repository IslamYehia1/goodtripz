import ToDateField from "./ToDateField";
import FromDateField from "./FromDateField";
import { useState } from "react";
import "./datePicker.scss";
const RangeDatePicker = () => {
    const today = new Date();
    const [state, setState] = useState<{ [key: string]: Date | undefined }>({
        from: undefined,
        to: undefined,
        lastHoveredDay: undefined,
    });
    function onFromDayChange() {}
    function onToDayChange() {}
    return (
        <div id="dateSearchField" className="searchFieldWrapper">
            <FromDateField
                from={state.from}
                to={state.to}
                lastHoveredDay={state.lastHoveredDay}
                setState={setState}
                today={today}
                onDayChange={onFromDayChange}
            />
            <ToDateField
                from={state.from}
                to={state.to}
                lastHoveredDay={state.lastHoveredDay}
                setState={setState}
                today={today}
                onDayChange={onToDayChange}
            />
        </div>
    );
};

export default RangeDatePicker;
