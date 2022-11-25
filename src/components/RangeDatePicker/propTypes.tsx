import { DayModifiers } from "react-day-picker";
import { Dispatch } from "react";
export type DATE_FIELD_PROPS = {
  state: {
    [key: string]: Date | undefined;
  };
  // isFullScreen: Boolean;
  today: Date;
  className?: string;
  icon?: string;
  label?: string;
  wrapperClass?: string;
  singleDateClass?: string;
  setState: Dispatch<any>;
  onFocus?: any;
  onBlur?: any;
  isFocused?: Boolean;
  isMobile: Boolean;
  value: string;
  // setFocused: any;

  // onDayChange: (day: Date) => void;
};
