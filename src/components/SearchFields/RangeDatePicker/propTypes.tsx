import { DayModifiers } from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { Dispatch } from "react";
export type toPropsType = {
  state: {
    [key: string]: Date | undefined;
  };
  isFullScreen: Boolean;
  today: Date;
  className?: string;
  icon?: string;
  label?: string;
  wrapperClass?: string;
  singleDateClass?: string;
  setState: Dispatch<any>;
  handleFocus?: any;
  isFocused?: Boolean;
  isMobile: Boolean;
  setFocused: any;

  onDayChange: (day: Date, DayModifiers: DayModifiers, dayPickerInput: DayPickerInput) => void;
};
export type fromPropsType = {
  state: {
    [key: string]: Date | undefined;
  };
  today: Date;
  setState: Dispatch<any>;
  isFullScreen: Boolean;
  handleFocus?: any;
  className?: string;
  icon?: string;
  label?: string;
  wrapperClass?: string;
  isFocused?: Boolean;
  isMobile: Boolean;
  setFocused: any;
  singleDateClass?: string;
  onDayChange: (day: Date, DayModifiers: DayModifiers, dayPickerInput: DayPickerInput) => void;
};
