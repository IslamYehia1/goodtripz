import { DayModifiers } from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";

export type toPropsType = {
    state: {
        [key: string]: Date | undefined;
    };

    today: Date;
    className?: string;
    icon?: string;
    label?: string;
    wrapperClass?: string;
    setState: (params: { [key: string]: Date | undefined }) => void;
    onDayChange: (
        day: Date,
        DayModifiers: DayModifiers,
        dayPickerInput: DayPickerInput
    ) => void;
};
export type fromPropsType = {
    state: {
        [key: string]: Date | undefined;
    };
    today: Date;
    setState: (params: { [key: string]: Date | undefined }) => void;
    className?: string;
    icon?: string;
    label?: string;
    wrapperClass?: string;
    onDayChange: (
        day: Date,
        DayModifiers: DayModifiers,
        dayPickerInput: DayPickerInput
    ) => void;
};
