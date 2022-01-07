import { DayModifiers } from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
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
// export type fromPropsType = {
//   state: {
//     [key: string]: Date | undefined;
//   };
//   today: Date;
//   setState: Dispatch<any>;
//   // isFullScreen: Boolean;
//   onFocus?: any;
//   onBlur?: any;

//   className?: string;
//   icon?: string;
//   label?: string;
//   wrapperClass?: string;
//   isFocused?: Boolean;
//   isMobile: Boolean;
//   // setFocused: any;
//   value: string;
//   singleDateClass?: string;
//   onDayChange: (day: Date) => void;
// };
