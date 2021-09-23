import ToDateField from "./ToDateField";
import FromDateField from "./FromDateField";
import DateIcon from "../../icons/calendar_black.svg";
import { useState } from "react";
import "./datePicker.scss";
type propsType = {
    className?: string;
    fieldClass?: string;
    wrapperClass?: string;
    icon?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};
const RangeDatePicker = (props: propsType) => {
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
        <div className={props.wrapperClass} onClick={props.onClick}>
            <FromDateField
                className={props.className}
                wrapperClass={props.fieldClass}
                label="Date"
                icon={props.icon}
                state={state}
                setState={stateSetter}
                today={today}
                onDayChange={onFromDayChange}
            />
            <ToDateField
                className={props.className}
                wrapperClass={props.fieldClass}
                label="Return date"
                icon={props.icon}
                state={state}
                setState={stateSetter}
                today={today}
                onDayChange={onToDayChange}
            />
        </div>
    );
};

export default RangeDatePicker;
