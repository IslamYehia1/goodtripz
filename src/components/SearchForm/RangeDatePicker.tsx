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
    function stateSetter(param: { [key: string]: Date | undefined }) {
        setState(param);
    }
    return (
        <div id="dateSearchField" className="searchFieldWrapper">
            <FromDateField
                state={state}
                setState={stateSetter}
                today={today}
                onDayChange={onFromDayChange}
            />
            <ToDateField
                state={state}
                setState={stateSetter}
                today={today}
                onDayChange={onToDayChange}
            />
        </div>
    );
};

export default RangeDatePicker;
