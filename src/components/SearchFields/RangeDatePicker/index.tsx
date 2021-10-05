import ToDateField from "./ToDateField";
import FromDateField from "./FromDateField";
import { useState } from "react";
import style from "./RangeDatePicker.module.scss";
type propsType = {
    className?: string;
    fieldClass?: string;
    wrapperClass?: string;
    rangeClass?: string;
    fromLabel?: string;
    toLabel?: string;
    icon?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onFromDateSelected?: (day: Date) => void;
    onToDateSelected?: (day: Date) => void;
    singleDateClass?: string;
};
const RangeDatePicker = (props: propsType) => {
    const today = new Date();
    const [state, setState] = useState<{ [key: string]: Date | undefined }>({
        from: undefined,
        to: undefined,
        lastHoveredDay: undefined,
    });

    function stateSetter(param: { [key: string]: Date | undefined }) {
        setState(param);
    }

    return (
        <div className={props.rangeClass} onClick={props.onClick}>
            <FromDateField
                className={props.className}
                wrapperClass={props.wrapperClass}
                label={props.fromLabel}
                icon={props.icon}
                state={state}
                setState={stateSetter}
                today={today}
                singleDateClass={props.singleDateClass}
                onDayChange={(day: Date) => {
                    if (props.onFromDateSelected) props.onFromDateSelected(day);
                }}
            />
            <ToDateField
                className={props.className}
                wrapperClass={props.wrapperClass}
                singleDateClass={props.singleDateClass}
                label={props.toLabel}
                icon={props.icon}
                state={state}
                setState={stateSetter}
                today={today}
                onDayChange={(day: Date) => {
                    if (props.onToDateSelected) props.onToDateSelected(day);
                }}
            />
        </div>
    );
};

export default RangeDatePicker;
